<script>

import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import Layout from "../../layouts/main";
/**
 * Calendar component
 */
export default {
    components: { Layout },
    setup() {
        return { v$: useVuelidate() };
    },
    data() {
        return {
            title: "Calendar",
            items: [
                {
                    text: "Minible"
                },
                {
                    text: "Calendar",
                    active: true
                }
            ],
            TablaReservas: [],
            TablaCumpleanios: [],
            currentEvents: [],
            tableData: [],
            DiaActual: null,
            fecha_actual: null,
        };
    },
    validations: {
        event: {
            title: { required },
            category: { required }
        }
    },
    mounted() {
        //obtener datos de la api
        this.getData();
        this.getData2();
        this.getDataNews();
        this.obtenerSemanaActual();
    },
    computed: {
        // Estas son funciones computadas correctas
        truncatedTitle() {
            console.log(this.newsItem)
            // Asegúrate de que 'newsItem' está definido y tiene la propiedad 'title'
            if (this.newsItem && this.newsItem.title && this.newsItem.title.length > 30) {
                return this.newsItem.title.substring(0, 30) + '... ver más';
            }
            return "";
        },
        truncatedDescription() {
            // Asegúrate de que 'newsItem' está definido y tiene la propiedad 'description'
            if (this.newsItem && this.newsItem.description && this.newsItem.description.length > 30) {
            return this.newsItem.description.substring(0, 30) + '... ver más';
            }
            return "";
        },
    },
    methods: {
        /**
         * Modal form submit
         */
        async getDataNews() {
            try {
                const response = await this.$http.get(this.$apiURL+'news/principal');
                response.data.data.map(i => this.tableData.push({ ...i }));
            } catch (error) {
                console.error(error);
            }
        },
        getFullImageUrl(relativeUrl) {
            console.log(relativeUrl)
        return this.$storageURL+"/" + relativeUrl;
        },
        async getData() {
            try {
                const response = await this.$http.get(this.$apiURL+'technical/listweekbirthdays');
                response.data.data.map(i => this.TablaCumpleanios.push({ ...i }));
                this.TablaCumpleanios = response.data.data.map(item => {
                    const fecha = new Date(item.Fecha_Nacimiento + 'T00:00:00Z');
                    const fechaFormatted = `${fecha.getUTCDate()} de ${fecha.toLocaleString('es-PE', { month: 'long', timeZone: 'America/Lima' })}`;
                    
                    return {
                        username: item.Nombre_Completo,
                        date: fechaFormatted
                    };
                });
            } catch (error) {
                console.error(error);
            }
        },
        obtenerSemanaActual() {
            const hoy = new Date();
            const primerDiaSemana = new Date(hoy.setDate(hoy.getDate() - hoy.getDay() + (hoy.getDay() === 0 ? -6 : 1)));
            const ultimoDiaSemana = new Date(hoy.setDate(hoy.getDate() - hoy.getDay() + 7));
            
            const options = { weekday: 'long', day: 'numeric', month: 'long' };
            const primerDia = primerDiaSemana.toLocaleDateString('es-ES', options);
            const ultimoDia = ultimoDiaSemana.toLocaleDateString('es-ES', options);

            this.DiaActual = `Semana del ${primerDia} al ${ultimoDia}`;

            const fecha = new Date(); // Crea una fecha con la fecha y hora actual
            const fechaFormatted = `${fecha.getDate()} de ${fecha.toLocaleString('es-PE', { month: 'long', timeZone: 'America/Lima' })}`;
            this.fecha_actual = fechaFormatted
        },
        async getData2() {
            try {
                const response = await this.$http.get(this.$apiURL+'reservation/listweek');
                console.log(response)
                this.TablaReservas = response.data.data.map(item => {
                    const startTimeFormatted = item.start_time.slice(0, 5);
                    const endTimeFormatted = item.end_time.slice(0, 5);
                    console.log(item.date)
                    const fecha = new Date(item.date + 'T00:00:00Z');
                    const fechaFormatted = `${fecha.getUTCDate()} de ${fecha.toLocaleString('es-PE', { month: 'long', timeZone: 'America/Lima' })}`;
                    return {
                        nombre: item.title, 
                        start_time: startTimeFormatted,
                        end_time: endTimeFormatted,
                        date: fechaFormatted,
                        user : item.user.username
                    };
                });
            } catch (error) {
                console.error(error);
            }
        },
        truncateText(text, length) {
            return text.length > length ? text.substring(0, length) + '... ver más' : text;
        },
        handleCardClick(){
            
        }

    }
};
</script>
<template>
  <Layout>
    <BRow>
        <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <div class="button-items d-flex flex-wrap gap-2">
              <a
                class="btn btn-primary"
                href="https://back.comficaconect.com/importdiary"
                role="button" target="_blank"
                >Importar Agendas</a>
                <a
                class="btn btn-primary"
                href="https://back.comficaconect.com/importaudit"
                role="button" target="_blank"
                >Importar Auditorias</a>
                <a
                class="btn btn-primary"
                href="https://back.comficaconect.com/importevidence"
                role="button" target="_blank"
                >Importar Evidencias</a>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
        <BCol lg="8">
            <BRow>
                <BCol cols="12" v-for="newsItem in tableData" :key="newsItem.id">
                    <BCard @click="handleCardClick(newsItem.id)">
                        <BCardBody>
                            <BCardTitle v-html="newsItem.title"></BCardTitle>
                            <BCardTitle v-html="truncateText(newsItem.description, 30)"></BCardTitle>
                            <!-- Carousel para las imágenes de la noticia -->
                            <BCarousel :interval="3000" 
                                style="text-shadow: 0px 0px 2px #000; width: 75%;margin: 0 auto;"
                                controls :id="'carousel' + newsItem.id">
                                <BCarouselSlide
                                    v-for="image in newsItem.images"
                                    :key="image.id"
                                    :img-src="getFullImageUrl(image.url)"
                                ></BCarouselSlide>
                            </BCarousel>
                        </BCardBody>
                    </BCard>
                </BCol>
            </BRow>
        </BCol>
        <BCol lg="4">
            <BRow>
                <BCol cols="12">
                    <BCard np-body>
                        <BCardHeader style="padding: 1em; background-color: #5b73e8;color : #ffff !important">
                            <BRow>
                                <BCol sm="7">
                                    <i class="bx bx-check-circle"></i>&nbsp;&nbsp;&nbsp;Reserva de salas
                                </BCol>
                            </BRow>
                        </BCardHeader>
                        <BCardBody>
                            <strong>{{DiaActual}}</strong>
                            <div class="table-responsive mb-0" v-for="(row, index) in TablaReservas"
                                                                    :key="index">
                                <template v-if="fecha_actual === row.date">
                                    <li style="background-color: #f1b44c;">
                                        {{ row.date }} | {{ row.start_time }} - {{ row.end_time }} | {{ row.user }}
                                    </li>
                                </template>
                                <template v-else>
                                    <li>
                                        {{ row.date }} | {{ row.start_time }} - {{ row.end_time }} | {{ row.user }}
                                    </li>
                                </template>

                            </div>
                        </BCardBody>
                    </BCard>
                </BCol>
                <BCol cols="12">
                    <BCard np-body>
                        <BCardHeader style="padding: 1em; background-color: #5b73e8;color : #ffff !important">
                            <BRow>
                                <BCol sm="7">
                                    <i class="bx bx-check-circle"></i>&nbsp;&nbsp;&nbsp;Cumpleaños
                                </BCol>
                            </BRow>
                        </BCardHeader>
                        <BCardBody>
                            <strong>{{DiaActual}}</strong>
                            <div class="table-responsive mb-0" v-for="(row, index) in TablaCumpleanios"
                                                                    :key="index">
                                <template v-if="fecha_actual === row.date">
                                    <li style="background-color: #f1b44c;">
                                        {{ row.date }} | {{ row.username }}
                                    </li>
                                </template>
                                <template v-else>
                                    <li>
                                        {{ row.date }} | {{ row.username }}
                                    </li>
                                </template>
                            </div>
                        </BCardBody>
                    </BCard>
                </BCol>
            </BRow>
        </BCol>
    </BRow>
  </Layout>
</template>
<style>
p {
    margin-top: 0;
    margin-bottom: 1rem;
    color: #000;
}
</style>