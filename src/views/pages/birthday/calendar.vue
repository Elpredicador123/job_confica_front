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
      },
      editevent: {
        editTitle: "",
        editcategory: ""
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
                const response = await this.$http.get(this.$apiURL+'birthday/all');
                this.calendarOptions.events  = response.data.data;
                this.event.category = "Danger"
                console.log(this.calendarOptions.events)
                
            } catch (error) {
                console.error(error);
            }
        },
    handleSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      this.v$.$touch();
      if (this.v$.$invalid) {
        return;
      }
      const formattedStartDate = format(new Date(this.newEventData.date), 'yyyy-MM-dd');
      const eventData = {
          title: this.event.title,
          start: formattedStartDate,
          end: formattedStartDate, // Ajusta esto si tienes una lógica diferente para 'end'
          user_id: 1 // Asegúrate de que este dato esté disponible
      };

      // Aquí realizas la solicitud POST a tu API
      this.$http.post(this.$apiURL+'birthday/store', eventData)
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
    handleEventDrop(info) {
      console.log(info)
      // Obtener la nueva fecha de inicio y finalización
      const startDate = format(new Date(info.event.start), 'yyyy-MM-dd');
      const endDate = info.event.end ? format(new Date(info.event.end), 'yyyy-MM-dd') : startDate;

      // Datos del evento para actualizar
      const updatedEventData = {
        title: info.event.title,
        start: startDate,
        end: endDate,
        id : parseInt(info.event.id)
        // otros campos que puedas necesitar actualizar
      };

      // Llamar a tu API para actualizar el evento
      this.updateEvent(info.event.id, updatedEventData);
    },
    updateEvent(eventId, updatedEventData) {
      console.log(eventId,updatedEventData)
      // Aquí puedes hacer una solicitud a tu API para actualizar el evento
      this.$http.post(this.$apiURL+'birthday/store', updatedEventData)
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

      // Datos del evento para actualizar
      const updatedEventData = {
        title: this.editevent.editTitle,
        id : parseInt(this.edit.id),
        // otros campos que puedas necesitar actualizar
      };
      // Llamar a tu API para actualizar el evento
      this.updateEvent(this.edit.id, updatedEventData);
      this.closeModal()
      // Llamar a tu API para actualizar el evento
      // Asumiendo que 'this.edit.id' contiene el ID del evento que estás editando
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
      this.newEventData = info;
      this.showModal = true;
    },
    /**
     * Modal open for edit event
     */
    editEvent(info) {
      this.edit = info.event;
      this.editevent.editTitle = this.edit.title;
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
