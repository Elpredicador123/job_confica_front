<script>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import listPlugin from "@fullcalendar/list";

import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

import Swal from "sweetalert2";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

import {  categories } from "../calendar/data-calendar";
import { format } from 'date-fns';

/**
 * Calendar component
 */
export default {
components: { FullCalendar, Layout, PageHeader },
setup() {
    return { v$: useVuelidate() };
},
data() {
    return {
    title: "Reservation",
    items: [
        {
        text: "Minible"
        },
        {
        text: "Reservaciones",
        active: true
        }
    ],
    calendarEvents: [],
    calendarOptions: {
        eventDrop: this.handleEventDrop,
        headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
        },
        plugins: [
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin,
        bootstrapPlugin,
        listPlugin
        ],
        initialView: "dayGridMonth",
        themeSystem: "bootstrap",
        initialEvents: [],
        editable: true,
        droppable: true,
        eventResizableFromStart: true,
        dateClick: this.dateClicked,
        eventClick: this.editEvent,
        eventsSet: this.handleEvents,
        weekends: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true
    },
    currentEvents: [],
    tableData: [],
    showModal: false,
    eventModal: false,
    categories: categories,
    submitted: false,
    submit: false,
    newEventData: {},
    edit: {},
    deleteId: {},
    event: {
        title: "",
        category: "",
        number_of_people : null,
        description: "",
        time : null
    },
    editevent: {
        editTitle: "",
        editCategory: "",
        editNumber_of_people : null,
        editDescription: ""
    }
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
    },
methods: {
    /**
     * Modal form submit
     */
    async getData() {
        try {
            const response = await this.$http.get(this.$apiURL+'reservation/all');
            this.calendarOptions.events  = response.data.data;
            this.event.category = "Danger"
            console.log(this.calendarOptions.events)
            
        } catch (error) {
            console.error(error);
        }
    },
    handleEventDrop(info) {
        console.log(info.event.description)
        // Obtener la nueva fecha de inicio y finalización
        const dateStr = format(new Date(info.event.start), "yyyy-MM-dd'T'HH:mm:ssXXX");
        const [date, time] = dateStr.split('T'); // Separa la fecha y la hora
        const [time2, time3] = time.split('-'); // Ignorar la información de zona horaria

        // Datos del evento para actualizar
        const updatedEventData = {
            date: date,
            start_time: time2,
            end_time: time3,
            id : parseInt(info.event.id)
            // otros campos que puedas necesitar actualizar
        };

        // Llamar a tu API para actualizar el evento
        this.updateEvent(info.event.id, updatedEventData);
    },
    updateEvent(eventId, updatedEventData) {
        console.log(eventId,updatedEventData)
        // Aquí puedes hacer una solicitud a tu API para actualizar el evento
        this.$http.post(this.$apiURL+'reservation/store', updatedEventData)
            .then(response => {
                console.log(response);
                this.successmsg();
                
                this.showModal = false;
                this.getData()
            })
            .catch(error => {
                console.error(error);
                // Manejar errores aquí
            });
    },
    handleSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        this.v$.$touch();
        if (this.v$.$invalid) {
            return;
        }
        console.log(this.newEventData)

        const dateStr = this.newEventData.dateStr;
        const [date, time] = dateStr.split('T'); // Separa la fecha y la hora
        const [time2, time3] = time.split('-'); // Ignorar la información de zona horaria

        const eventData = {
            title: this.event.title,
            description: this.event.description,
            number_of_people: this.event.numberOfPeople,
            date: date,
            start_time: time2,
            end_time: time3,
            user_id: 1 // Asegúrate de que este dato esté disponible
        };

        console.log(eventData)

        // Aquí realizas la solicitud POST a tu API
        this.$http.post(this.$apiURL+'reservation/store', eventData)
            .then(response => {
                console.log(response);
                this.successmsg();
                
                this.showModal = false;
                this.getData()
            })
            .catch(error => {
                console.error(error);
                // Manejar errores aquí
            });

        this.submitted = false;
        this.event = {};
    },
    hideModal() {
        this.submitted = false;
        this.showModal = false;
        this.event = {};
    },
    /**
     * Edit event modal submit
     */
    editSubmit() {
        console.log(this.editevent)

        const updatedEventData = {
            title: this.editevent.editTitle,
            description: this.editevent.editDescription,
            number_of_people: this.editevent.editNumber_of_people,
            id : parseInt(this.edit.id),
            // otros campos que puedas necesitar actualizar
        };

        this.updateEvent(this.edit.id, updatedEventData);
        this.closeModal()
    },

    /**
     * Delete event
     */
    deleteEvent() {
    this.edit.remove();
    this.eventModal = false;
    },
    /**
     * Modal open for add event
     */
    dateClicked(info) {
        if (this.$refs.fullCalendar.getApi().view.type === 'dayGridMonth') {
            // Mostrar un mensaje de error o simplemente retornar para no hacer nada
            Swal.fire({
                title: "Acción no permitida",
                text: "No se pueden crear eventos en la vista de mes.",
                icon: "error",
                confirmButtonColor: "#34c38f",
            });
            return;
        }

        // El resto de tu código para manejar clic en una fecha
        this.newEventData = info;
        this.showModal = true;
    },
    /**
     * Modal open for edit event
     */
    editEvent(info) {
        console.log(info)
        this.edit = info.event;
        this.editevent.editTitle = this.edit.title;
        this.editevent.editDescription = this.edit.extendedProps.description;
        this.editevent.editNumber_of_people = this.edit.extendedProps.number_of_people;
        this.editevent.editcategory = this.edit.classNames[0];
        this.eventModal = true;
    },

    closeModal() {
    this.eventModal = false;
    },

    confirm() {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#34c38f",
            cancelButtonColor: "#f46a6a",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.value) {
            this.deleteEvent();
            Swal.fire("Deleted!", "Event has been deleted.", "success");
            }
        });
    },

    /**
     * Show list of events
     */
    handleEvents(events) {
        this.currentEvents = events;
    },

    /**
     * Show successfull Save Dialog
     */
    successmsg() {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Event has been saved",
            showConfirmButton: false,
            timer: 1000
        });
    }
}
};
</script>

<template>
<Layout>
    <PageHeader :title="title" :items="items" />
    <BRow>
        <BCol cols="12">
            <BCard np-body>
                <BCardBody>
                    <div class="app-calendar">
                    <FullCalendar
                        ref="fullCalendar"
                        :options="calendarOptions"
                    ></FullCalendar>
                    </div>
                </BCardBody>
            </BCard>
        </BCol>
    </BRow>
    <BModal
        v-model="showModal"
        title="Add New Event"
        title-class="font-18"
        body-class="p-3"
        hide-footer
        >
        <BForm @submit.prevent="handleSubmit">
            <BRow>
                <BCol cols="12">
                    <div class="mb-3">
                    <label for="name" class="form-label">Event Name</label>
                    <input
                        id="name"
                        v-model="event.title"
                        type="text"
                        class="form-control"
                        placeholder="Insert Event name"
                        :class="{ 'is-invalid': submitted && v$.event.title.$error }"
                    />
                    <div
                        v-if="submitted && v$.event.title.required.$invalid"
                        class="invalid-feedback"
                    >
                        This value is required.
                    </div>
                    </div>
                </BCol>
                <BCol cols="12">
                    <div class="mb-3">
                    <label class="control-label form-label">Category</label>
                    <select
                        v-model="event.category"
                        class="form-control"
                        name="category"
                        :class="{ 'is-invalid': submitted && v$.event.category.errors }"
                    >
                        <option
                        v-for="option in categories"
                        :key="option.backgroundColor"
                        :value="`${option.value}`"
                        >
                        {{ option.name }}
                        </option>
                    </select>
                    <div
                        v-if="submitted && v$.event.category.$invalid"
                        class="invalid-feedback"
                    >
                        This value is required.
                    </div>
                    </div>
                </BCol>
                <BCol cols="12">
                    <div class="mb-3">
                        <label for="description" class="form-label">Descripción</label>
                        <textarea id="description" v-model="event.description" class="form-control" placeholder="Descripción del evento"></textarea>
                    </div>
                </BCol>
                <BCol cols="12">
                    <div class="mb-3">
                        <label for="numberOfPeople" class="form-label">Número de Personas</label>
                        <input id="numberOfPeople" v-model="event.numberOfPeople" type="number" class="form-control" placeholder="Número de personas">
                    </div>
                </BCol>
            </BRow>

            <div class="text-end pt-5 mt-3">
                <BButton variant="light" @click="hideModal">Close</BButton>
                <BButton type="submit" variant="success" class="ms-1"
                    >Create event</BButton
                >
            </div>
        </BForm>
    </BModal>

    <!-- Edit Modal -->
    <BModal
        v-model="eventModal"
        title="Edit Event"
        title-class="font-18"
        hide-footer
        body-class="p-3"
        >
        <form @submit.prevent="editSubmit">
            <BRow>
                <BCol cols="12">
                    <div class="mb-3">
                        <label for="name" class="form-label">Event Name</label>
                        <input
                            id="name"
                            v-model="editevent.editTitle"
                            type="text"
                            class="form-control"
                            placeholder="Insert Event name"
                        />
                    </div>
                </BCol>
                <BCol cols="12">
                    <div class="mb-3">
                        <label class="control-label form-label">Category</label>
                        <select
                            v-model="editevent.editcategory"
                            class="form-control"
                            name="category"
                        >
                            <option
                            v-for="option in categories"
                            :key="option.backgroundColor"
                            :value="`${option.value}`"
                            >
                            {{ option.name }}
                            </option>
                        </select>
                    </div>
                </BCol>
                <BCol cols="12">
                    <div class="mb-3">
                        <label for="description" class="form-label">Descripción</label>
                        <textarea id="description" v-model="editevent.editDescription" class="form-control" placeholder="Descripción del evento"></textarea>
                    </div>
                </BCol>
                <BCol cols="12">
                    <div class="mb-3">
                        <label for="numberOfPeople" class="form-label">Número de Personas</label>
                        <input id="numberOfPeople" v-model="editevent.editNumber_of_people" type="number" class="form-control" placeholder="Número de personas">
                    </div>
                </BCol>
            </BRow>
            <div class="d-flex justify-content-between">
                <BButton class="ms-1" variant="danger" @click="confirm"
                    >Delete</BButton
                >
                <div class="d-flex">
                    <BButton variant="light" @click="closeModal">Close</BButton>
                    <b-button class="ms-1" variant="success" @click="editSubmit"
                    >Save</b-button
                    >
                </div>
            </div>
        </form>
    </BModal>
</Layout>
</template>
