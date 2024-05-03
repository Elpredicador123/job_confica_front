<script>
import Layout from "../../layouts/main";
/**
 * Calendar component
 */
export default {
    components: { Layout },

};
</script>
<template>
  <Layout>
    <BRow>
        <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <div class="button-items d-flex flex-wrap gap-2">
              <!-- <a
                class="btn btn-primary"
                href="https://back.comficaconect.com/importdiary"
                role="button" target="_blank"
                >Importar Agendas</a> -->
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
                <a
                class="btn btn-primary"
                href="https://back.comficaconect.com/importtechnical"
                role="button" target="_blank"
                >Importar Técnicos</a>
                <a
                class="btn btn-primary"
                href="https://back.comficaconect.com/importdiaryprimary"
                role="button" target="_blank"
                >Importar Agendas Primarias</a>
            </div>
          </BCardBody>
        </BCard>
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