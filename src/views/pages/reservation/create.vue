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

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

/**
 * Calendar component
 */
export default {
components: { FullCalendar, Layout, PageHeader, VueDatePicker},
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
        editTitle: "",
        editcategory: "",
        number_of_people : null,
        description: "",
        start_time : "",
        end_time : ""
    },
    editevent: {
        editTitle: "",
        editcategory: "",
        number_of_people : null,
        description: "",
        start_time : "",
        end_time : ""
    }
    };
},
validations: {
    event: {
    title: { required },
    category: { required },
    start_time : { required },
    end_time : { required },
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
    handleSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    this.v$.$touch();
    if (this.v$.$invalid) {
        return;
    }
    console.log(this.newEventData)

    const dateStr = this.newEventData.dateStr;
    const date = dateStr.split('T'); // Separa la fecha y la hora
    const var_start_time = this.event.start_time.hours+":"+this.event.start_time.minutes+":00"
    const var_end_time = this.event.end_time.hours+":"+this.event.end_time.minutes+":00"
    
    const eventData = {
        title: this.event.title + var_start_time + ' - ' + var_end_time,
        description: this.event.description + var_start_time + ' - ' + var_end_time,
        number_of_people: this.event.numberOfPeople,
        date: date[0],
        start_time: var_start_time,
        end_time: var_end_time,
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
    this.submit = true;
    const editTitle = this.editevent.editTitle;
    const editDescription = this.editevent.editDescription;
    const editNumberOfPeople = this.editevent.editNumberOfPeople;
    const editStartTime = this.editevent.editStartTime;
    const editEndTime = this.editevent.editEndTime;
    const editcategory = this.editevent.editcategory;

    this.edit.setProp("title", editTitle);
    this.edit.setProp("description", editDescription);
    this.edit.setProp("numberOfPeople", editNumberOfPeople);
    this.edit.setProp("start_time", editStartTime);
    this.edit.setProp("end_time", editEndTime);
    this.edit.setProp("classNames", editcategory);
    this.successmsg();
    this.eventModal = false;
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
    this.editevent.editDescription = this.edit.description;
    this.editevent.editNumberOfPeople = this.edit.numberOfPeople;
    this.editevent.editStartTime = this.edit.start_time;
    this.editevent.editEndTime = this.edit.end_time;
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
                <BCol cols="12">
                    <div class="mb-3">
                        <label for="start_time" class="form-label">Hora inicio</label>
                        <VueDatePicker id="start_time" v-model="event.start_time" time-picker />
                    </div>
                </BCol>
                <BCol cols="12">
                    <div class="mb-3">
                        <label for="end_time" class="form-label">Hora fin</label>
                        <VueDatePicker id="end_time" v-model="event.end_time" time-picker />
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
