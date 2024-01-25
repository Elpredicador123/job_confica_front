<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

import Toolbar from "./toolbar";
import Sidepanel from "./sidepanel";

import { emailData } from "./data-inbox";

/**
 * Email-inbox component
 */
export default {
  components: {
    Toolbar,
    Sidepanel,
    Layout,
    PageHeader
  },
  data() {
    return {
      emailData: emailData,
      paginatedEmailData: emailData,
      title: "Inbox",
      items: [
        {
          text: "Email",
          href: "/"
        },
        {
          text: "Inbox",
          active: true
        }
      ],
      // page number
      currentPage: 1,
      // default page size
      perPage: 15,
      emailIds: [],
      // start and end index
      startIndex: 1,
      endIndex: 15
    };
  },
  computed: {
    rows() {
      return this.emailData.length;
    }
  },
  watch: {
    currentPage() {
      this.startIndex = (this.currentPage - 1) * this.perPage;
      this.endIndex = (this.currentPage - 1) * this.perPage + this.perPage;

      this.paginatedEmailData = this.emailData.slice(
        this.startIndex,
        this.endIndex
      );
    }
  },
  created() {
    this.startIndex = 0;
    this.endIndex = this.perPage;

    this.paginatedEmailData = this.emailData.slice(
      this.startIndex,
      this.endIndex
    );
  },
  methods: {
    onPageChange() {
      this.startIndex = (this.currentPage - 1) * this.perPage;
      this.endIndex = (this.currentPage - 1) * this.perPage + this.perPage;

      this.paginatedEmailData = this.emailData.slice(
        this.startIndex,
        this.endIndex
      );
    }
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <BRow>
      <!-- Right Sidebar -->
      <BCol cols="12">
        <Sidepanel />
        <div class="email-rightbar mb-3">
          <BCard no-body>
            <Toolbar />

            <div class="mt-3">
              <ul class="message-list">
                <li
                  v-for="(email, index) in paginatedEmailData"
                  :key="index"
                  :class="{ unread: email.unread === true }"
                  :to="`/email/reademail/${email.id}`"
                >
                  <div class="col-mail col-mail-1">
                    <div class="checkbox-wrapper-mail">
                      <input :id="`chk-${index}`" type="checkbox" />
                      <label :for="`chk-${index}`"></label>
                    </div>
                    <span
                      :class="`star-toggle far fa-star text-${email.text}`"
                    ></span>
                    <a class="title">
                      <router-link
                        tag="a"
                        :to="'/email/reademail/' + email.id"
                        class="subject"
                        >{{ email.title }}</router-link
                      >
                    </a>
                  </div>
                  <div class="col-mail col-mail-2">
                    <router-link
                      tag="a"
                      :to="'/email/reademail/' + email.id"
                      class="subject"
                      >{{ email.subject }}</router-link
                    >

                    <div class="date">{{ email.date }}</div>
                  </div>
                </li>
              </ul>
            </div>
          </BCard>
          <BRow class="justify-content-md-between align-items-md-center">
            <BCol cols="xl-7">
              Showing {{ startIndex }} - {{ endIndex }} of {{ rows }}
            </BCol>
            <!-- end col-->
            <BCol cols="xl-5">
              <div class="text-md-end float-xl-end mt-2 pagination-rounded">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="rows"
                  :per-page="perPage"
                ></b-pagination>
              </div>
            </BCol>
            <!-- end col-->
          </BRow>
        </div>
      </BCol>
    </BRow>
  </Layout>
</template>
