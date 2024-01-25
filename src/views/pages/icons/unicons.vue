<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Unicons-icons component
 */
export default {
  components: {
    Layout,
    PageHeader
  },
  data() {
    return {
      title: "Unicons",
      items: [
        {
          text: "Icons"
        },
        {
          text: "Unicons",
          active: true
        }
      ]
    };
  },
  middleware: "authentication"
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <BRow>
      <BCol cols="xl-12">
        <BCard no-body>
          <BCardBody>
            <BRow class="icon-demo-content">
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-0-plus"></i> uil-0-plus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-10-plus"></i> uil-10-plus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-12-plus"></i> uil-12-plus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-13-plus"></i> uil-13-plus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-16-plus"></i> uil-16-plus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-17-plus"></i> uil-17-plus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-18-plus"></i> uil-18-plus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-21-plus"></i> uil-21-plus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-3-plus"></i> uil-3-plus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-500px"></i> uil-500px
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-6-plus"></i> uil-6-plus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-abacus"></i> uil-abacus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-accessible-icon-alt"></i> uil-accessible-icon-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-adjust-alt"></i> uil-adjust-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-adjust-circle"></i> uil-adjust-circle
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-adjust-half"></i> uil-adjust-half
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-adjust"></i> uil-adjust
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-adobe-alt"></i> uil-adobe-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-adobe"></i> uil-adobe
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-airplay"></i> uil-airplay
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-align-alt"></i> uil-align-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-align-center-alt"></i> uil-align-center-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-align-center-h"></i> uil-align-center-h
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-align-center-justify"></i>
                uil-align-center-justify
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-align-center-v"></i> uil-align-center-v
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-align-justify"></i> uil-align-justify
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-align-center"></i> uil-align-center
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-align-left-justify"></i> uil-align-left-justify
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-align-left"></i> uil-align-left
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-align-letter-right"></i> uil-align-letter-right
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-align-right-justify"></i> uil-align-right
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-align"></i> uil-align
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-amazon"></i> uil-amazon
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-ambulance"></i> uil-ambulance
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-analysis"></i> uil-analysis
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-analytics"></i> uil-analytics
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-anchor"></i> uil-anchor
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-android-alt"></i> uil-android-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-android-phone-slash"></i> uil-android-phone-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-android"></i> uil-android
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-angle-double-down"></i> uil-angle-double-down
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-angle-double-left"></i> uil-angle-double-left
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-angle-double-right"></i> uil-angle-double-right
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-angle-double-up"></i> uil-angle-double-up
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-angle-down"></i> uil-angle-down
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-angle-left"></i> uil-angle-left
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-angle-right-b"></i> uil-angle-right-b
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-angle-right"></i> uil-angle-right
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-angle-up"></i> uil-angry
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-ankh"></i> uil-ankh
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-annoyed-alt"></i> uil-annoyed-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-annoyed"></i> uil-annoyed
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-apple-alt"></i> uil-apple-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-apple"></i> uil-apple
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-apps"></i> uil-apps
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-archive-alt"></i> uil-archive
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-archway"></i> uil-archway
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrow-break"></i> uil-arrow-break
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrow-circle-down"></i> uil-arrow-circle-down
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrow-circle-left"></i> uil-arrow-circle-left
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrow-circle-right"></i> uil-arrow-circle-right
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrow-circle-up"></i> uil-arrow-circle-up
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrow-compress-h"></i> uil-arrow-compress-h
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrow-down-left"></i> uil-arrow-down-left
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrow-down-right"></i> uil-arrow-down-right
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrow-down"></i> uil-arrow-down
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrow-from-right"></i> uil-arrow-from-right
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrow-from-top"></i> uil-arrow-from-top
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrow-growth"></i> uil-arrow-growth
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrow-left"></i> uil-arrow-left
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrow-random"></i> uil-arrow-random
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrow-resize-diagonal"></i>
                uil-arrow-resize-diagonal
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrow-right"></i> uil-arrow-right
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrow-to-bottom"></i> uil-arrow-to-bottom
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrow-to-right"></i> uil-arrow-to-right
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrow-up-left"></i> uil-arrow-up-left
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrow-up-right"></i> uil-arrow-up-right
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrow-up"></i> uil-arrow-up
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrow"></i> uil-arrow
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrows-h-alt"></i> uil-arrows-h-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrows-h"></i> uil-arrows-h
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrows-left-down"></i> uil-arrows-left-down
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrows-maximize"></i> uil-arrows-maximize
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrows-merge"></i> uil-arrows-merge
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrows-resize-h"></i> uil-arrows-resize-h
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrows-resize-v"></i> uil-arrows-resize-v
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrows-resize"></i> uil-arrows-resize
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrows-right-down"></i> uil-arrows-right-down
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrows-shrink-h"></i> uil-arrows-shrink-h
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrows-shrink-v"></i> uil-arrows-shrink-v
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrows-v-alt"></i> uil-arrows-v-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrows-v"></i> uil-arrows-v
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-assistive-listening-systems"></i>
                uil-assistive-listening-systems
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-asterisk"></i> uil-asterisk
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-at"></i> uil-at
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-at"></i> uil-at
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-atom"></i> uil-atom
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-auto-flash"></i> uil-auto-flash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-award-alt"></i> uil-award-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-award"></i> uil-award
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-baby-carriage"></i> uil-baby-carriage
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-backpack"></i> uil-backpack
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-backspace"></i> uil-backspace
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-backward"></i> uil-backward
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-bag-alt"></i> uil-bag-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-bag-slash"></i> uil-bag-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-bag"></i> uil-bag
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-balance-scale"></i> uil-balance-scale
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-ban"></i> uil-ban
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-bars"></i> uil-bars
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-baseball-ball"></i> uil-baseball-ball
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-basketball-hoop"></i> uil-basketball-hoop
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-basketball"></i> uil-basketball
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-bath"></i> uil-bath
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-battery-bolt"></i> uil-battery-bolt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-battery-empty"></i> uil-battery-empty
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-bed-double"></i> uil-bed-double
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-bed"></i> uil-bed
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-behance-alt"></i> uil-behance-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-behance"></i> uil-behance
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-bell-school"></i> uil-bell-school
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-bell-slash"></i> uil-bell-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-bell"></i> uil-bell
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-bill"></i> uil-bill
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-bitcoin-alt"></i> uil-bitcoin-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-bitcoin-circle"></i> uil-bitcoin-circle
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-bitcoin"></i> uil-bitcoin
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-black-berry"></i> uil-black-berry
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-blogger-alt"></i> uil-blogger-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-blogger"></i> uil-blogger
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-bluetooth-b"></i> uil-bluetooth-b
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-bold"></i> uil-bold
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-bolt-alt"></i> uil-bolt-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-bolt-slash"></i> uil-bolt-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-bolt"></i> uil-bolt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-book-alt"></i> uil-book-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-book-medical"></i> uil-book-medical
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-book-open"></i> uil-book-open
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-book-reader"></i> uil-book-reader
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-book"></i> uil-book
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-bookmark-full"></i> uil-bookmark-full
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-bookmark"></i> uil-bookmark
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-books"></i> uil-books
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-boombox"></i> uil-boombox
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-border-alt"></i> uil-border-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-border-bottom"></i> uil-border-bottom
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-border-clear"></i> uil-border-clear
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-border-horizontal"></i> uil-border-horizontal
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-border-inner"></i> uil-border-inner
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-border-left"></i> uil-border-left
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-border-out"></i> uil-border-out
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-border-right"></i> uil-border-right
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-border-top"></i> uil-border-top
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-border-vertical"></i> uil-border-vertical
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-bowling-ball"></i> uil-bowling-ball
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-box"></i> uil-box
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrow-down"></i> uil-arrow-down
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-briefcase"></i> uil-briefcase
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-brightness-minus"></i> uil-brightness-minus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-brightness-plus"></i> uil-brightness-plus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-brightness"></i> uil-brightness
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-bring-bottom"></i> uil-bring-bottom
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-bring-front"></i> uil-bring-front
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-brush-alt"></i> uil-brush-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-bug"></i> uil-bug
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-building"></i> uil-building
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-bullseye"></i> uil-bullseye
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-bus-alt"></i> uil-bus-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-bus-school"></i> uil-bus-school
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-bus"></i> uil-bus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-calculator-alt"></i> uil-calculator-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-calculator"></i> uil-calculator
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-calendar-alt"></i> uil-calendar-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-calendar-slash"></i> uil-calendar-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-calender"></i> uil-calender
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-calling"></i> uil-calling
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-camera-change"></i> uil-camera-change
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-camera-plus"></i> uil-camera-plus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-camera-slash"></i> uil-camera-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-camera"></i> uil-camera
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cancel"></i> uil-cancel
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-capsule"></i> uil-capsule
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-capture"></i> uil-capture
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-car-sideview"></i> uil-car-sideview
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-car-slash"></i> uil-car-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-car-wash"></i> uil-car-wash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-car"></i> uil-car
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-card-atm"></i> uil-card-atm
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-caret-right"></i> uil-caret-right
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cell"></i> uil-cell
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-celsius"></i> uil-celsius
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-chart-bar-alt"></i> uil-chart-bar-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-chart-bar"></i> uil-chart-bar
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-chart-down"></i> uil-chart-down
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-chart-growth-alt"></i> uil-chart-growth-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-chart-growth"></i> uil-chart-growth
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-chart-line"></i> uil-chart-line
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-chart-pie-alt"></i> uil-chart-pie-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-chart-pie"></i> uil-chart-pie
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-chart"></i> uil-chart
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-chat-bubble-user"></i> uil-chat-bubble-user
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-chat-info"></i> uil-chat-info
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-chat"></i> uil-chat
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-check-circle"></i> uil-check-circle
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-check-square"></i> uil-check-square
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-check"></i> uil-check
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrow-down"></i> uil-arrow-down
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-circle-layer"></i> uil-circle-layer
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-circle"></i> uil-circle
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-circuit"></i> uil-circuit
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-clapper-board"></i> uil-clapper-board
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-clipboard-alt"></i> uil-clipboard-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-clipboard-blank"></i> uil-clipboard-blank
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-clipboard-notes"></i> uil-clipboard-notes
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-clipboard"></i> uil-clipboard
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-clock-eight"></i> uil-clock-eight
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-clock-five"></i> uil-clock-five
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-clock-nine"></i> uil-clock-nine
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-clock-seven"></i> uil-clock-seven
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-clock-ten"></i> uil-clock-ten
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-clock-three"></i> uil-clock-three
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-clock-two"></i> uil-clock-two
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-clock"></i> uil-clock
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-closed-captioning"></i> uil-closed-captioning
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-block"></i> uil-cloud-block
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrow-down"></i> uil-arrow-down
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-bookmark"></i> uil-cloud-bookmark
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-check"></i> uil-cloud-check
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-computing"></i> uil-cloud-computing
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-data-connection"></i>
                uil-cloud-data-connection
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-database-tree"></i> uil-cloud-database-tree
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-download"></i> uil-cloud-download
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-drizzle"></i> uil-cloud-drizzle
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrow-down"></i> uil-arrow-down
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-exclamation"></i> uil-cloud-exclamation
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-hail"></i> uil-cloud-hail
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-heart"></i> uil-cloud-heart
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-info"></i> uil-cloud-info
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-lock"></i> uil-cloud-lock
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-meatball"></i> uil-cloud-meatball
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-moon-hail"></i> uil-cloud-moon-hail
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-moon-meatball"></i> uil-cloud-moon-meatball
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-moon-rain"></i> uil-cloud-moon-rain
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-moon-showers"></i> uil-cloud-moon-showers
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-moon"></i> uil-cloud-moon
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-question"></i> uil-cloud-question
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-rain-sun"></i> uil-cloud-rain-sun
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-rain"></i> uil-cloud-rain
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-redo"></i> uil-cloud-redo
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-share"></i> uil-cloud-share
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-shield"></i> uil-cloud-shield
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-showers-alt"></i> uil-cloud-showers-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-showers-heavy"></i> uil-cloud-showers-heavy
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-showers"></i> uil-cloud-showers
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-slash"></i> uil-cloud-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-sun-hail"></i> uil-cloud-sun-hail
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-sun-meatball"></i> uil-cloud-sun-meatball
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-sun-rain-alt"></i> uil-cloud-sun-rain-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-sun-rain"></i> uil-cloud-sun-rain
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-sun-tear"></i> uil-cloud-sun-tear
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-sun"></i> uil-cloud-sun
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-times"></i> uil-cloud-times
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-unlock"></i> uil-cloud-unlock
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-upload"></i> uil-cloud-upload
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-wifi"></i> uil-cloud-wifi
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cloud-wind"></i> uil-cloud-wind
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cog"></i> uil-cog
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-coins"></i> uil-coins
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-columns"></i> uil-columns
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-alt-block"></i> uil-comment-alt-block
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-alt-chart-lines"></i>
                uil-comment-alt-chart-lines
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-alt-check"></i> uil-comment-alt-check
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-alt-dots"></i> uil-comment-alt-dots
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-alt-download"></i>
                uil-comment-alt-download
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-alt-edit"></i> uil-comment-alt-edit
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-alt-exclamation"></i>
                uil-comment-alt-exclamation
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-alt-heart"></i> uil-comment-alt-heart
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-alt-image"></i> uil-comment-alt-image
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-alt-info"></i> uil-comment-alt-info
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-alt-lines"></i> uil-comment-alt-lines
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-alt-lock"></i> uil-comment-alt-lock
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-alt-medical"></i> uil-comment-alt-medical
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-alt-message"></i> uil-comment-alt-message
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-alt-notes"></i> uil-comment-alt-notes
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-alt-plus"></i> uil-comment-alt-plus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-alt-question"></i>
                uil-comment-alt-question
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-alt-redo"></i> uil-comment-alt-redo
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-alt-search"></i> uil-comment-alt-search
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-alt-share"></i> uil-comment-alt-share
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-alt-shield"></i> uil-comment-alt-shield
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-alt-slash"></i> uil-comment-alt-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-alt-upload"></i> uil-comment-alt-upload
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-alt-verify"></i> uil-comment-alt-verify
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-alt"></i> uil-comment-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-block"></i> uil-comment-block
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-chart-line"></i> uil-comment-chart-line
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-check"></i> uil-comment-check
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-dots"></i> uil-comment-dots
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-arrow-down"></i> uil-arrow-down
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-download"></i> uil-comment-download
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-edit"></i> uil-comment-edit
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-exclamation"></i> uil-comment-exclamation
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-heart"></i> uil-comment-heart
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-image"></i> uil-comment-image
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-info-alt"></i> uil-comment-info-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-info"></i> uil-comment-info
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-lines"></i> uil-comment-lines
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-lock"></i> uil-comment-lock
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-medical"></i> uil-comment-medical
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-message"></i> uil-comment-message
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-notes"></i> uil-comment-notes
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-plus"></i> uil-comment-plus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-question"></i> uil-comment-question
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-redo"></i> uil-comment-redo
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-search"></i> uil-comment-search
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-share"></i> uil-comment-share
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-shield"></i> uil-comment-shield
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-slash"></i> uil-comment-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-upload"></i> uil-comment-upload
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment-verify"></i> uil-comment-verify
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comment"></i> uil-comment
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comments-alt"></i> uil-comments-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-comments"></i> uil-comments
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-compact-disc"></i> uil-compact-disc
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-compass"></i> uil-compass
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-compress-alt-left"></i> uil-compress-alt-left
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-compress-alt"></i> uil-compress-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-compress-arrows"></i> uil-compress-arrows
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-compress-lines"></i> uil-compress-lines
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-compress-point"></i> uil-compress-point
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-compress-v"></i> uil-compress-v
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-compress"></i> uil-compress
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-confused"></i> uil-confused
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-constructor"></i> uil-constructor
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-copy-alt"></i> uil-copy-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-copy-landscape"></i> uil-copy-landscape
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-copy"></i> uil-copy
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-copyright"></i> uil-copyright
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-corner-down-left"></i> uil-corner-down-left
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-corner-down-right-alt"></i>
                uil-corner-down-right-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-corner-down-right"></i> uil-corner-down-right
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-corner-left-down"></i> uil-corner-left-down
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-corner-right-down"></i> uil-corner-right-down
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-corner-up-left-alt"></i> uil-corner-up-left-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-corner-up-left"></i> uil-corner-up-left
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-corner-up-right-alt"></i> uil-corner-up-right-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-corner-up-right"></i> uil-corner-up-right
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-creative-commons-pd"></i> uil-creative-commons-pd
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-crockery"></i> uil-crockery
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-crop-alt-rotate-left"></i>
                uil-crop-alt-rotate-left
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-crop-alt-rotate-right"></i>
                uil-crop-alt-rotate-right
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-crop-alt"></i> uil-crop-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-crosshair-alt"></i> uil-crosshair-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-crosshair"></i> uil-crosshair
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-crosshairs"></i> uil-crosshairs
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-cube"></i> uil-cube
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-dashboard"></i> uil-dashboard
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-data-sharing"></i> uil-data-sharing
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-database-alt"></i> uil-database-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-compass"></i> uil-compass
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-database"></i> uil-database
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-desert"></i> uil-desert
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-desktop-alt-slash"></i> uil-desktop-alt-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-desktop-alt"></i> uil-desktop-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-desktop-cloud-alt"></i> uil-desktop-cloud-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-desktop-slash"></i> uil-desktop-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-desktop"></i> uil-desktop
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-dialpad-alt"></i> uil-dialpad-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-dialpad"></i> uil-dialpad
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-diamond"></i> uil-diamond
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-diary-alt"></i> uil-diary-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-diary"></i> uil-diary
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-dice-five"></i> uil-dice-five
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-dice-four"></i> uil-dice-four
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-dice-one"></i> uil-dice-one
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-dice-six"></i> uil-dice-six
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-dice-three"></i> uil-dice-three
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-dice-two"></i> uil-dice-two
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-direction"></i> uil-direction
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-directions"></i> uil-directions
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-dizzy-meh"></i> uil-dizzy-meh
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-dna"></i> uil-dna
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-document-layout-left"></i>
                uil-document-layout-left
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-document-layout-right"></i>
                uil-document-layout-right
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-dollar-alt"></i> uil-dollar-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-dollar-sign-alt"></i> uil-dollar-sign-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-dollar-sign"></i> uil-dollar-sign
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-download-alt"></i> uil-download-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-dribbble"></i> uil-dribbble
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-dropbox"></i> uil-dropbox
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-dumbbell"></i> uil-dumbbell
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-ear"></i> uil-ear
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-edit-alt"></i> uil-edit-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-edit"></i> uil-edit
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-ellipsis-h"></i> uil-ellipsis-h
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-ellipsis-v"></i> uil-ellipsis-v
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-emoji"></i> uil-emoji
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-enter"></i> uil-enter
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-envelope-add"></i> uil-envelope-add
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-envelope-alt"></i> uil-envelope-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-envelope-block"></i> uil-envelope-block
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-envelope-bookmark"></i> uil-envelope-bookmark
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-envelope-check"></i> uil-envelope-check
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-envelope-download-alt"></i>
                uil-envelope-download-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-envelope-download"></i> uil-envelope-download
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-envelope-edit"></i> uil-envelope-edit
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-envelope-exclamation"></i>
                uil-envelope-exclamation
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-envelope-heart"></i> uil-envelope-heart
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-envelope-info"></i> uil-envelope-info
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-envelope-lock"></i> uil-envelope-lock
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-envelope-minus"></i> uil-envelope-minus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-envelope-open"></i> uil-envelope-open
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-envelope-question"></i> uil-envelope-question
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-envelope-receive"></i> uil-envelope-receive
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-envelope-redo"></i> uil-envelope-redo
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-envelope-search"></i> uil-envelope-search
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-envelope-send"></i> uil-envelope-send
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-envelope-share"></i> uil-envelope-share
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-envelope-shield"></i> uil-envelope-shield
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-envelope-star"></i> uil-envelope-star
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-envelope-times"></i> uil-envelope-times
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-envelope-upload-alt"></i> uil-envelope-upload-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-envelope-upload"></i> uil-envelope-upload
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-envelope"></i> uil-envelope
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-envelopes"></i> uil-envelopes
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-equal-circle"></i> uil-equal-circle
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-euro-circle"></i> uil-euro-circle
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-euro"></i> uil-euro
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-exchange-alt"></i> uil-exchange-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-exchange"></i> uil-exchange
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-exclamation-circle"></i> uil-exclamation-circle
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-exclamation-octagon"></i> uil-exclamation-octagon
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-exclamation-triangle"></i>
                uil-exclamation-triangle
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-exclude"></i> uil-exclude
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-expand-alt"></i> uil-expand-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-expand-arrows-alt"></i> uil-expand-arrows-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-expand-arrows"></i> uil-expand-arrows
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-expand-from-corner"></i> uil-expand-from-corner
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-expand-left"></i> uil-expand-left
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-expand-right"></i> uil-expand-right
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-export"></i> uil-export
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-exposure-alt"></i> uil-exposure-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-exposure-increase"></i> uil-exposure-increase
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-external-link-alt"></i> uil-external-link-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-eye-slash"></i> uil-eye-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-eye"></i> uil-eye
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-facebook-f"></i> uil-facebook-f
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-facebook-messenger-alt"></i>
                uil-facebook-messenger-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-facebook-messenger"></i> uil-facebook-messenger
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-facebook"></i> uil-facebook
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-fahrenheit"></i> uil-fahrenheit
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-fast-mail-alt"></i> uil-fast-mail-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-fast-mail"></i> uil-fast-mail
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-favorite"></i> uil-favorite
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-feedback"></i> uil-feedback
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-alt"></i> uil-file-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-blank"></i> uil-file-blank
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-block-alt"></i> uil-file-block-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-bookmark-alt"></i> uil-file-bookmark-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-check-alt"></i> uil-file-check-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-check"></i> uil-file-check
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-contract-dollar"></i>
                uil-file-contract-dollar
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-copy-alt"></i> uil-file-copy-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-download-alt"></i> uil-file-download-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-download"></i> uil-file-download
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-edit-alt"></i> uil-file-edit-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-exclamation-alt"></i>
                uil-file-exclamation-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-exclamation"></i> uil-file-exclamation
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-heart"></i> uil-file-heart
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-info-alt"></i> uil-file-info-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-landscape-alt"></i> uil-file-landscape-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-landscape"></i> uil-file-landscape
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-lanscape-slash"></i> uil-file-lanscape-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-lock-alt"></i> uil-file-lock-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-medical-alt"></i> uil-file-medical-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-medical"></i> uil-file-medical
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-minus-alt"></i> uil-file-minus-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-minus"></i> uil-file-minus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-network"></i> uil-file-network
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-plus-alt"></i> uil-file-plus-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-plus"></i> uil-file-plus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-question-alt"></i> uil-file-question-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-question"></i> uil-file-question
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-redo-alt"></i> uil-file-redo-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-search-alt"></i> uil-file-search-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-share-alt"></i> uil-file-share-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-shield-alt"></i> uil-file-shield-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-slash"></i> uil-file-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-times-alt"></i> uil-file-times-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-times"></i> uil-file-times
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-upload-alt"></i> uil-file-upload-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file-upload"></i> uil-file-upload
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-file"></i> uil-file
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-files-landscapes-alt"></i>
                uil-files-landscapes-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-files-landscapes"></i> uil-files-landscapes
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-film"></i> uil-film
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-filter-slash"></i> uil-filter-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-filter"></i> uil-filter
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-fire"></i> uil-fire
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-flask-potion"></i> uil-flask-potion
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-flask"></i> uil-flask
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-flip-h-alt"></i> uil-flip-h-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-flip-h"></i> uil-flip-h
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-flip-v-alt"></i> uil-flip-v-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-flip-v"></i> uil-flip-v
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-flower"></i> uil-flower
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-focus-add"></i> uil-focus-add
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-focus-target"></i> uil-focus-target
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-focus"></i> uil-focus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-folder-check"></i> uil-folder-check
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-folder-download"></i> uil-folder-download
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-folder-exclamation"></i> uil-folder-exclamation
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-folder-heart"></i> uil-folder-heart
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-folder-info"></i> uil-folder-info
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-folder-lock"></i> uil-folder-lock
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-folder-medical"></i> uil-folder-medical
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-folder-minus"></i> uil-folder-minus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-folder-network"></i> uil-folder-network
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-folder-plus"></i> uil-folder-plus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-folder-question"></i> uil-folder-question
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-folder-slash"></i> uil-folder-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-folder-times"></i> uil-folder-times
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-folder-upload"></i> uil-folder-upload
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-folder"></i> uil-folder
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-football-american"></i> uil-football-american
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-football-ball"></i> uil-football-ball
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-football"></i> uil-football
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-forecastcloud-moon-tear"></i>
                uil-forecastcloud-moon-tear
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-forwaded-call"></i> uil-forwaded-call
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-forward"></i> uil-forward
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-frown"></i> uil-frown
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-game-structure"></i> uil-game-structure
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-gift"></i> uil-gift
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-github-alt"></i> uil-github-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-github"></i> uil-github
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-glass-martini-alt-slash"></i>
                uil-glass-martini-alt-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-glass-martini-alt"></i> uil-glass-martini-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-glass-martini"></i> uil-glass-martini
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-compass"></i> uil-compass
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-glass-tea"></i> uil-glass-tea
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-glass"></i> uil-glass
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-globe"></i> uil-globe
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-gold"></i> uil-gold
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-google-drive-alt"></i> uil-google-drive-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-google-drive"></i> uil-google-drive
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-google-hangouts-alt"></i> uil-google-hangouts-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-google-hangouts"></i> uil-google-hangouts
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-google-play"></i> uil-google-play
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-google"></i> uil-google
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-graph-bar"></i> uil-graph-bar
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-grid"></i> uil-grid
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-grids"></i> uil-grids
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-grin-tongue-wink-alt"></i>
                uil-grin-tongue-wink-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-grin-tongue-wink"></i> uil-grin-tongue-wink
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-grin"></i> uil-grin
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-hdd"></i> uil-hdd
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-headphones-alt"></i> uil-headphones-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-headphones"></i> uil-headphones
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-heart-alt"></i> uil-heart-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-heart-medical"></i> uil-heart-medical
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-heart-rate"></i> uil-heart-rate
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-heart-sign"></i> uil-heart-sign
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-heart"></i> uil-heart
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-heartbeat"></i> uil-heartbeat
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-history-alt"></i> uil-history-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-history"></i> uil-history
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-home-alt"></i> uil-home-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-home"></i> uil-home
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-horizontal-align-center"></i>
                uil-horizontal-align-center
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-horizontal-align-left"></i>
                uil-horizontal-align-left
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-horizontal-align-right"></i>
                uil-horizontal-align-right
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-horizontal-distribution-center"></i>
                uil-horizontal-distribution-center
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-horizontal-distribution-left"></i>
                uil-horizontal-distribution-left
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-horizontal-distribution-right"></i>
                uil-horizontal-distribution-right
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-hourglass"></i> uil-hourglass
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-html3-alt"></i> uil-html3-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="u uil-html3"></i> u uil-html3
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-hunting"></i> uil-hunting
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-image-alt-slash"></i> uil-image-alt-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-image-block"></i> uil-image-block
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-image-broken"></i> uil-image-broken
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-image-check"></i> uil-image-check
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-image-download"></i> uil-image-download
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-image-edit"></i> uil-image-edit
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-image-lock"></i> uil-image-lock
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-image-minus"></i> uil-image-minus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-image-plus"></i> uil-image-plus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-image-question"></i> uil-image-question
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-image-redo"></i> uil-image-redo
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-image-resize-landscape"></i>
                uil-image-resize-landscape
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-image-resize-square"></i> uil-image-resize-square
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-image-search"></i> uil-image-search
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-image-share"></i> uil-image-share
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-image-shield"></i> uil-image-shield
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-image-slash"></i> uil-image-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-image-times"></i> uil-image-times
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-image-upload"></i> uil-image-upload
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-image-v"></i> uil-image-v
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-image"></i> uil-image
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-images"></i> uil-images
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-import"></i> uil-import
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-incoming-call"></i> uil-incoming-call
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-info-circle"></i> uil-info-circle
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-instagram-alt"></i> uil-instagram-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-instagram"></i> uil-instagram
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-intercom-alt"></i> uil-intercom-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-intercom"></i> uil-intercom
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-invoice"></i> uil-invoice
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-italic"></i> uil-italic
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-jackhammer"></i> uil-jackhammer
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-java-script"></i> uil-java-script
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-kayak"></i> uil-kayak
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-key-skeleton-alt"></i> uil-key-skeleton-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-key-skeleton"></i> uil-key-skeleton
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-keyboard-alt"></i> uil-keyboard-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-keyboard-hide"></i> uil-keyboard-hide
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-keyboard-show"></i> uil-keyboard-show
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-keyboard"></i> uil-keyboard
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-keyhole-circle"></i> uil-keyhole-circle
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-keyhole-square-full"></i> uil-keyhole-square-full
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-keyhole-square"></i> uil-keyhole-square
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-kid"></i> uil-kid
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-label-alt"></i> uil-label-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-label"></i> uil-label
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-lamp"></i> uil-lamp
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-laptop-cloud"></i> uil-laptop-cloud
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-laptop"></i> uil-laptop
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-laughing"></i> uil-laughing
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-layer-group-slash"></i> uil-layer-group-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-layer-group"></i> uil-layer-group
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-layers-alt"></i> uil-layers-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-layers-slash"></i> uil-layers-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-layers"></i> uil-layers
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-left-arrow-from-left"></i>
                uil-left-arrow-from-left
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-left-arrow-to-left"></i> uil-left-arrow-to-left
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-left-indent-alt"></i> uil-left-indent-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-left-indent"></i> uil-left-indent
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-left-to-right-text-direction"></i>
                uil-left-to-right-text-direction
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-life-ring"></i> uil-life-ring
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-lightbulb-alt"></i> uil-lightbulb-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-lightbulb"></i> uil-lightbulb
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-line-alt"></i> uil-line-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-line-spacing"></i> uil-line-spacing
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-line"></i> uil-line
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-link-alt"></i> uil-link-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-link-broken"></i> uil-link-broken
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-link-h"></i> uil-link-h
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-link"></i> uil-link
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-linkedin-alt"></i> uil-linkedin-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-linkedin"></i> uil-linkedin
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-list-ui-alt"></i> uil-list-ui-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-list-ul"></i> uil-list-ul
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-location-arrow-alt"></i> uil-location-arrow-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-location-arrow"></i> uil-location-arrow
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-location-pin-alt"></i> uil-location-pin-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-location-point"></i> uil-location-point
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-lock-access"></i> uil-lock-access
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-lock-alt"></i> uil-lock-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-lock-open-alt"></i> uil-lock-open-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-lock-slash"></i> uil-lock-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-lock"></i> uil-lock
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-mailbox-alt"></i> uil-mailbox-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-mailbox"></i> uil-mailbox
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-map-marker-alt"></i> uil-map-marker-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-map-marker-edit"></i> uil-map-marker-edit
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-map-marker-info"></i> uil-map-marker-info
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-map-marker-minus"></i> uil-map-marker-minus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-map-marker-plus"></i> uil-map-marker-plus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-map-marker-question"></i> uil-map-marker-question
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-map-marker-shield"></i> uil-map-marker-shield
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-map-marker-slash"></i> uil-map-marker-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-map-marker"></i> uil-map-marker
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-map-pin-alt"></i> uil-map-pin-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-map-pin"></i> uil-map-pin
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-map"></i> uil-map
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-mars"></i> uil-mars
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-master-card"></i> uil-master-card
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-maximize-left"></i> uil-maximize-left
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-medal"></i> uil-medal
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-medical-drip"></i> uil-medical-drip
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-medical-square-full"></i> uil-medical-square-full
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-medical-square"></i> uil-medical-square
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-medium-m"></i> uil-medium-m
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-medkit"></i> uil-medkit
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-meeting-board"></i> uil-meeting-board
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-megaphone"></i> uil-megaphone
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-meh-alt"></i> uil-meh-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-meh-closed-eye"></i> uil-meh-closed-eye
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-meh"></i> uil-meh
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-message"></i> uil-message
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-metro"></i> uil-metro
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-microphone-slash"></i> uil-microphone-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-microphone"></i> uil-microphone
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-minus-circle"></i> uil-minus-circle
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-minus-path"></i> uil-minus-path
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-minus-square-full"></i> uil-minus-square-full
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-minus-square"></i> uil-minus-square
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-minus"></i> uil-minus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-java-script"></i> uil-java-script
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-missed-call"></i> uil-missed-call
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-mobile-android-alt"></i> uil-mobile-android-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-mobile-android"></i> uil-mobile-android
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-mobile-vibrate"></i> uil-mobile-vibrate
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-modem"></i> uil-modem
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-money-bill-stack"></i> uil-money-bill-stack
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-money-bill"></i> uil-money-bill
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-money-insert"></i> uil-money-insert
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-money-stack"></i> uil-money-stack
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-money-withdraw"></i> uil-money-withdraw
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-money-withdrawal"></i> uil-money-withdrawal
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-moneybag-alt"></i> uil-moneybag-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-moneybag"></i> uil-moneybag
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-monitor-heart-rate"></i> uil-monitor-heart-rate
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-monitor"></i> uil-monitor
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-moon-eclipse"></i> uil-moon-eclipse
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-moon"></i> uil-moon
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-moonset"></i> uil-moonset
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-mountains-sun"></i> uil-mountains-sun
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-mountains"></i> uil-mountains
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-mouse-alt"></i> uil-mouse-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-mouse"></i> uil-mouse
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-music-note"></i> uil-music-note
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-music-tune-slash"></i> uil-music-tune-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-music"></i> uil-music
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-n-a"></i> uil-n-a
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-navigator"></i> uil-navigator
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-nerd"></i> uil-nerd
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-newspaper"></i> uil-newspaper
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-ninja"></i> uil-ninja
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-no-entry"></i> uil-no-entry
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-notebooks"></i> uil-notebooks
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-notes"></i> uil-notes
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-object-group"></i> uil-object-group
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-object-ungroup"></i> uil-object-ungroup
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-octagon"></i> uil-octagon
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-opera-alt"></i> uil-opera-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-opera"></i> uil-opera
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-outgoing-call"></i> uil-outgoing-call
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-package"></i> uil-package
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-padlock"></i> uil-padlock
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-paint-tool"></i> uil-paint-tool
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-palette"></i> uil-palette
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-panorama-h-alt"></i> uil-panorama-h-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-panorama-h"></i> uil-panorama-h
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-panorama-v"></i> uil-panorama-v
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-paperclip"></i> uil-paperclip
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-paragraph"></i> uil-paragraph
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-parcel"></i> uil-parcel
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-parking-square"></i> uil-parking-square
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-pathfinder-unite"></i> uil-pathfinder-unite
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-pathfinder"></i> uil-pathfinder
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-pause-circle"></i> uil-pause-circle
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-pause"></i> uil-pause
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-paypal"></i> uil-paypal
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-pen"></i> uil-pen
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-pentagon"></i> uil-pentagon
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-percentage"></i> uil-percentage
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-phone-alt"></i> uil-phone-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-phone-pause"></i> uil-phone-pause
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-phone-slash"></i> uil-phone-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-phone-times"></i> uil-phone-times
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-phone-volume"></i> uil-phone-volume
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-phone"></i> uil-phone
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-picture"></i> uil-picture
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-plane-arrival"></i> uil-plane-arrival
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-plane-departure"></i> uil-plane-departure
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-plane-fly"></i> uil-plane-fly
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-plane"></i> uil-plane
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-play-circle"></i> uil-play-circle
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-play"></i> uil-play
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-plug"></i> uil-plug
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-plus-circle"></i> uil-plus-circle
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-plus-square"></i> uil-plus-square
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-plus"></i> uil-plus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-podium"></i> uil-podium
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-polygon"></i> uil-polygon
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-post-stamp"></i> uil-post-stamp
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-postcard"></i> uil-postcard
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-pound-circle"></i> uil-pound-circle
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-pound"></i> uil-pound
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-power"></i> uil-power
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-prescription-bottle"></i> uil-prescription-bottle
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-presentation-check"></i> uil-presentation-check
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-presentation-edit"></i> uil-presentation-edit
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-presentation-line"></i> uil-presentation-line
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-presentation-lines-alt"></i>
                uil-presentation-lines-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-presentation-minus"></i> uil-presentation-minus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-presentation-play"></i> uil-presentation-play
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-presentation-plus"></i> uil-presentation-plus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-presentation-times"></i> uil-presentation-times
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-presentation"></i> uil-presentation
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-previous"></i> uil-previous
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-pricetag-alt"></i> uil-pricetag-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-print-slash"></i> uil-print-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-print"></i> uil-print
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-process"></i> uil-process
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-processor"></i> uil-processor
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-pump"></i> uil-pump
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-puzzle-piece"></i> uil-puzzle-piece
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-question-circle"></i> uil-question-circle
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-rainbow"></i> uil-rainbow
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-raindrops-alt"></i> uil-raindrops-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-raindrops"></i> uil-raindrops
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-react"></i> uil-react
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-receipt-alt"></i> uil-receipt-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-receipt"></i> uil-receipt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-record-audio"></i> uil-record-audio
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-reddit-alien-alt"></i> uil-reddit-alien-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-redo"></i> uil-redo
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-refresh"></i> uil-refresh
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-registered"></i> uil-registered
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-repeat"></i> uil-repeat
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-restaurant"></i> uil-restaurant
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-right-indent-alt"></i> uil-right-indent-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-right-to-left-text-direction"></i>
                uil-right-to-left-text-direction
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-robot"></i> uil-robot
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-rope-way"></i> uil-rope-way
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-rotate-360"></i> uil-rotate-360
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-rss-alt"></i> uil-rss-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-rss-interface"></i> uil-rss-interface
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-rss"></i> uil-rss
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-ruler-combined"></i> uil-ruler-combined
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-ruler"></i> uil-ruler
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-sad-cry"></i> uil-sad-cry
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-sad-crying"></i> uil-sad-crying
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-sad-dizzy"></i> uil-sad-dizzy
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-sad"></i> uil-sad
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-scaling-left"></i> uil-scaling-left
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-scaling-right"></i> uil-scaling-right
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-scenery"></i> uil-scenery
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-schedule"></i> uil-schedule
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-scroll-h"></i> uil-scroll-h
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-scroll"></i> uil-scroll
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-search-alt"></i> uil-search-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-search-minus"></i> uil-search-minus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-search-plus"></i> uil-search-plus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-search"></i> uil-search
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-selfie"></i> uil-selfie
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-server-alt"></i> uil-server-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-server-connection"></i> uil-server-connection
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-server-network-alt"></i> uil-server-network-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-server-network"></i> uil-server-network
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-server"></i> uil-server
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-servicemark"></i> uil-servicemark
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-share-alt"></i> uil-share-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-shield-check"></i> uil-shield-check
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-shield-exclamation"></i> uil-shield-exclamation
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-shield-question"></i> uil-shield-question
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-shield-slash"></i> uil-shield-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-shield"></i> uil-shield
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-ship"></i> uil-ship
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-shop"></i> uil-shop
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-shopping-basket"></i> uil-shopping-basket
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-shopping-cart-alt"></i> uil-shopping-cart-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-shovel"></i> uil-shovel
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-shrink"></i> uil-shrink
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-shuffle"></i> uil-shuffle
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-shutter-alt"></i> uil-shutter-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-shutter"></i> uil-shutter
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-sick"></i> uil-sick
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-sigma"></i> uil-sigma
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-sign-alt"></i> uil-sign-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-sign-in-alt"></i> uil-sign-in-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-sign-left"></i> uil-sign-left
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-sign-out-alt"></i> uil-sign-out-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-sign-right"></i> uil-sign-right
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-signal-alt-3"></i> uil-signal-alt-3
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-signal-alt"></i> uil-signal-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-signal"></i> uil-signal
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-silence"></i> uil-silence
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-silent-squint"></i> uil-silent-squint
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-sim-card"></i> uil-sim-card
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-sitemap"></i> uil-sitemap
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-skip-forward-alt"></i> uil-skip-forward-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-skip-forward-circle"></i> uil-skip-forward-circle
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-skip-forward"></i> uil-skip-forward
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-skype-alt"></i> uil-skype-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-skype"></i> uil-skype
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-slack-alt"></i> uil-slack-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-slack"></i> uil-slack
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-sliders-v-alt"></i> uil-sliders-v-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-sliders-v"></i> uil-sliders-v
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-smile-beam"></i> uil-smile-beam
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-smile-dizzy"></i> uil-smile-dizzy
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-smile-squint-wink-alt"></i>
                uil-smile-squint-wink-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-smile-squint-wink"></i> uil-smile-squint-wink
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-smile-wink-alt"></i> uil-smile-wink-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-smile-wink"></i> uil-smile-wink
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-smile"></i> uil-smile
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-snapchat-alt"></i> uil-snapchat-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-snapchat-ghost"></i> uil-snapchat-ghost
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-snapchat-square"></i> uil-snapchat-square
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-snow-flake"></i> uil-snow-flake
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-snowflake-alt"></i> uil-snowflake-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-snowflake"></i> uil-snowflake
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-sort-amount-down"></i> uil-sort-amount-down
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-sort-amount-up"></i> uil-sort-amount-up
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-sort"></i> uil-sort
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-sorting"></i> uil-sorting
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-space-key"></i> uil-space-key
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-spade"></i> uil-spade
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-sperms"></i> uil-sperms
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-spin"></i> uil-spin
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-square-full"></i> uil-square-full
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-square-shape"></i> uil-square-shape
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-squint"></i> uil-squint
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-star-half-alt"></i> uil-star-half-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-star"></i> uil-star
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-step-backward-alt"></i> uil-step-backward-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-step-backward-circle"></i>
                uil-step-backward-circle
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-step-backward"></i> uil-step-backward
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-step-forward"></i> uil-step-forward
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-stop-circle"></i> uil-stop-circle
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-stopwatch-slash"></i> uil-stopwatch-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-stopwatch"></i> uil-stopwatch
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-store-alt"></i> uil-store-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-store"></i> uil-store
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-streering"></i> uil-streering
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-stretcher"></i> uil-stretcher
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-subject"></i> uil-subject
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-subway-alt"></i> uil-subway-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-subway"></i> uil-subway
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-suitcase-alt"></i> uil-suitcase-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-suitcase"></i> uil-suitcase
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-sun"></i> uil-sun
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-sunset"></i> uil-sunset
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-surprise"></i> uil-surprise
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-swatchbook"></i> uil-swatchbook
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-swiggy"></i> uil-swiggy
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-swimmer"></i> uil-swimmer
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-sync-exclamation"></i> uil-sync-exclamation
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-sync-slash"></i> uil-sync-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-sync"></i> uil-sync
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-syringe"></i> uil-syringe
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-table"></i> uil-table
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-tablet"></i> uil-tablet
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-tablets"></i> uil-tablets
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-tachometer-fast"></i> uil-tachometer-fast
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-tag-alt"></i> uil-tag-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-tag"></i> uil-tag
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-tape"></i> uil-tape
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-taxi"></i> uil-taxi
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-tear"></i> uil-tear
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-telegram-alt"></i> uil-telegram-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-telegram"></i> uil-telegram
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-telescope"></i> uil-telescope
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-temperature-empty"></i> uil-temperature-empty
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-temperature-half"></i> uil-temperature-half
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-temperature-minus"></i> uil-temperature-minus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-temperature-plus"></i> uil-temperature-plus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-temperature-quarter"></i> uil-temperature-quarter
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-temperature-three-quarter"></i>
                uil-temperature-three-quarter
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-temperature"></i> uil-temperature
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-text-fields"></i> uil-text-fields
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-text-size"></i> uil-text-size
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-text-strike-through"></i> uil-text-strike-through
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-text"></i> uil-text
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-th-large"></i> uil-th-large
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-th-slash"></i> uil-th-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-th"></i> uil-th
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-thermometer"></i> uil-thermometer
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-thumbs-down"></i> uil-thumbs-down
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-thumbs-up"></i> uil-thumbs-up
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-thunderstorm-moon"></i> uil-thunderstorm-moon
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-thunderstorm-sun"></i> uil-thunderstorm-sun
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-thunderstorm"></i> uil-thunderstorm
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-ticket"></i> uil-ticket
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-times-circle"></i> uil-times-circle
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-times-square"></i> uil-times-square
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-times"></i> uil-times
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-toggle-off"></i> uil-toggle-off
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-toggle-on"></i> uil-toggle-on
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-top-arrow-from-top"></i> uil-top-arrow-from-top
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-top-arrow-to-top"></i> uil-top-arrow-to-top
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-tornado"></i> uil-tornado
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-trademark-circle"></i> uil-trademark-circle
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-trademark"></i> uil-trademark
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-traffic-barrier"></i> uil-traffic-barrier
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-trash-alt"></i> uil-trash-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-trash"></i> uil-trash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-trees"></i> uil-trees
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-triangle"></i> uil-triangle
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-trophy"></i> uil-trophy
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-truck-loading"></i> uil-truck-loading
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-truck"></i> uil-truck
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-tumblr-alt"></i> uil-tumblr-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-tumblr-square"></i> uil-tumblr-square
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-tumblr"></i> uil-tumblr
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-tv-retro-slash"></i> uil-tv-retro-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-tv-retro"></i> uil-tv-retro
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-twitter-alt"></i> uil-twitter-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-twitter"></i> uil-twitter
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-umbrella"></i> uil-umbrella
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-unamused"></i> uil-unamused
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-underline"></i> uil-underline
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-university"></i> uil-university
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-unlock-alt"></i> uil-unlock-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-unlock"></i> uil-unlock
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-upload-alt"></i> uil-upload-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-upload"></i> uil-upload
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-usd-circle"></i> uil-usd-circle
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-usd-square"></i> uil-usd-square
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-user-check"></i> uil-user-check
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-user-circle"></i> uil-user-circle
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-user-exclamation"></i> uil-user-exclamation
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-user-minus"></i> uil-user-minus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-user-plus"></i> uil-user-plus
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-user-square"></i> uil-user-square
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-user-times"></i> uil-user-times
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-user"></i> uil-user
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-users-alt"></i> uil-users-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-utensils-alt"></i> uil-utensils-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-utensils"></i> uil-utensils
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-vector-square-alt"></i> uil-vector-square-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-vector-square"></i> uil-vector-square
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-vertical-align-bottom"></i>
                uil-vertical-align-bottom
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-vertical-align-center"></i>
                uil-vertical-align-center
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-vertical-align-top"></i> uil-vertical-align-top
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-vertical-distribute-bottom"></i>
                uil-vertical-distribute-bottom
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-vertical-distribution-center"></i>
                uil-vertical-distribution-center
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-vertical-distribution-top"></i>
                uil-vertical-distribution-top
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-video-slash"></i> uil-video-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-video"></i> uil-video
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-visual-studio"></i> uil-visual-studio
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-vk-alt"></i> uil-vk-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-vk"></i> uil-vk
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-voicemail-rectangle"></i> uil-voicemail-rectangle
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-voicemail"></i> uil-voicemail
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-volleyball"></i> uil-volleyball
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-volume-down"></i> uil-volume-down
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-volume-mute"></i> uil-volume-mute
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-volume-off"></i> uil-volume-off
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-volume-up"></i> uil-volume-up
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-volume"></i> uil-volume
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-vuejs-alt"></i> uil-vuejs-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-vuejs"></i> uil-vuejs
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-wall"></i> uil-wall
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-wallet"></i> uil-wallet
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-watch-alt"></i> uil-watch-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-square"></i> uil-square
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-watch"></i> uil-watch
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-water-drop-slash"></i> uil-water-drop-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-water-glass"></i> uil-water-glass
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-water"></i> uil-water
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-web-grid-alt"></i> uil-web-grid-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-web-grid"></i> uil-web-grid
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-web-section-alt"></i> uil-web-section-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-web-section"></i> uil-web-section
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-webcam"></i> uil-webcam
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-weight"></i> uil-weight
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-whatsapp"></i> uil-whatsapp
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-wheel-barrow"></i> uil-wheel-barrow
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-wheelchair-alt"></i> uil-wheelchair-alt
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-wheelchair"></i> uil-wheelchair
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-wifi-router"></i> uil-wifi-router
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-wifi-slash"></i> uil-wifi-slash
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-wifi"></i> uil-wifi
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-wind-moon"></i> uil-wind-moon
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-wind-sun"></i> uil-wind-sun
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-wind"></i> uil-wind
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-window-grid"></i> uil-window-grid
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-window-maximize"></i> uil-window-maximize
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-window-section"></i> uil-window-section
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-window"></i> uil-window
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-windsock"></i> uil-windsock
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-wrap-text"></i> uil-wrap-text
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-wrench"></i> uuil-wrench
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-square"></i> uil-square
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-yen-circle"></i> uil-yen-circle
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-yen"></i> uil-yen
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-yin-yang"></i> uil-yin-yang
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3">
                <i class="uil-youtube"></i> uil-youtube
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
