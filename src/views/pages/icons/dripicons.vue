<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Dripicons-icons component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Dripicons",
      items: [
        {
          text: "Icons"
        },
        {
          text: "Dripicons",
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
      <BCol cols="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Examples</BCardTitle>
            <p class="card-title-desc mb-2">
              Use <code>&lt;i class="dripicons-alarm"&gt;&lt;/i&gt;</code>
            </p>

            <BRow class="icon-demo-content">
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-alarm"></i> dripicons-alarm
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-align-center"></i> dripicons-align-center
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-align-justify"></i> dripicons-align-justify
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-align-left"></i> dripicons-align-left
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-align-right"></i> dripicons-align-right
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-anchor"></i> dripicons-anchor
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-archive"></i> dripicons-archive
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-arrow-down"></i> dripicons-arrow-down
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-arrow-left"></i> dripicons-arrow-left
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-arrow-right"></i> dripicons-arrow-right
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-arrow-thin-down"></i>
                dripicons-arrow-thin-down
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-arrow-thin-left"></i>
                dripicons-arrow-thin-left
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-arrow-thin-right"></i>
                dripicons-arrow-thin-right
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-arrow-thin-up"></i> dripicons-arrow-thin-up
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-arrow-up"></i> dripicons-arrow-up
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-article"></i> dripicons-article
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-backspace"></i> dripicons-backspace
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-basket"></i> dripicons-basket
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-basketball"></i> dripicons-basketball
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-battery-empty"></i> dripicons-battery-empty
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-battery-full"></i> dripicons-battery-full
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-battery-low"></i> dripicons-battery-low
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-battery-medium"></i>
                dripicons-battery-medium
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-bell"></i> dripicons-bell
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-blog"></i> dripicons-blog
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-bluetooth"></i> dripicons-bluetooth
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-bold"></i> dripicons-bold
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-bookmark"></i> dripicons-bookmark
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-bookmarks"></i> dripicons-bookmarks
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-box"></i> dripicons-box
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-briefcase"></i> dripicons-briefcase
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-brightness-low"></i>
                dripicons-brightness-low
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-brightness-max"></i>
                dripicons-brightness-max
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-brightness-medium"></i>
                dripicons-brightness-medium
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-broadcast"></i> dripicons-broadcast
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-browser"></i> dripicons-browser
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-browser-upload"></i>
                dripicons-browser-upload
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-brush"></i> dripicons-brush
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-calendar"></i> dripicons-calendar
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-camcorder"></i> dripicons-camcorder
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-camera"></i> dripicons-camera
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-card"></i> dripicons-card
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-cart"></i> dripicons-cart
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-checklist"></i> dripicons-checklist
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-checkmark"></i> dripicons-checkmark
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-chevron-down"></i> dripicons-chevron-down
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-chevron-left"></i> dripicons-chevron-left
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-chevron-right"></i> dripicons-chevron-right
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-chevron-up"></i> dripicons-chevron-up
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-clipboard"></i> dripicons-clipboard
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-clock"></i> dripicons-clock
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-clockwise"></i> dripicons-clockwise
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-cloud"></i> dripicons-cloud
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-cloud-download"></i>
                dripicons-cloud-download
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-cloud-upload"></i> dripicons-cloud-upload
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-code"></i> dripicons-code
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-contract"></i> dripicons-contract
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-contract-2"></i> dripicons-contract-2
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-conversation"></i> dripicons-conversation
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-copy"></i> dripicons-copy
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-crop"></i> dripicons-crop
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-cross"></i> dripicons-cross
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-crosshair"></i> dripicons-crosshair
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-cutlery"></i> dripicons-cutlery
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-device-desktop"></i>
                dripicons-device-desktop
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-device-mobile"></i> dripicons-device-mobile
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-device-tablet"></i> dripicons-device-tablet
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-direction"></i> dripicons-direction
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-disc"></i> dripicons-disc
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-document"></i> dripicons-document
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-document-delete"></i>
                dripicons-document-delete
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-document-edit"></i> dripicons-document-edit
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-document-new"></i> dripicons-document-new
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-document-remove"></i>
                dripicons-document-remove
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-dot"></i> dripicons-dot
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-dots-2"></i> dripicons-dots-2
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-dots-3"></i> dripicons-dots-3
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-download"></i> dripicons-download
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-duplicate"></i> dripicons-duplicate
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-enter"></i> dripicons-enter
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-exit"></i> dripicons-exit
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-expand"></i> dripicons-expand
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-expand-2"></i> dripicons-expand-2
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-experiment"></i> dripicons-experiment
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-export"></i> dripicons-export
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-feed"></i> dripicons-feed
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-flag"></i> dripicons-flag
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-flashlight"></i> dripicons-flashlight
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-folder"></i> dripicons-folder
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-folder-open"></i> dripicons-folder-open
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-forward"></i> dripicons-forward
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-gaming"></i> dripicons-gaming
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-gear"></i> dripicons-gear
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-graduation"></i> dripicons-graduation
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-graph-bar"></i> dripicons-graph-bar
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-graph-line"></i> dripicons-graph-line
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-graph-pie"></i> dripicons-graph-pie
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-headset"></i> dripicons-headset
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-heart"></i> dripicons-heart
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-help"></i> dripicons-help
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-home"></i> dripicons-home
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-hourglass"></i> dripicons-hourglass
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-inbox"></i> dripicons-inbox
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-information"></i> dripicons-information
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-italic"></i> dripicons-italic
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-jewel"></i> dripicons-jewel
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-lifting"></i> dripicons-lifting
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-lightbulb"></i> dripicons-lightbulb
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-link"></i> dripicons-link
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-link-broken"></i> dripicons-link-broken
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-list"></i> dripicons-list
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-loading"></i> dripicons-loading
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-location"></i> dripicons-location
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-lock"></i> dripicons-lock
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-lock-open"></i> dripicons-lock-open
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-mail"></i> dripicons-mail
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-map"></i> dripicons-map
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-media-loop"></i> dripicons-media-loop
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-media-next"></i> dripicons-media-next
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-media-pause"></i> dripicons-media-pause
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-media-play"></i> dripicons-media-play
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-media-previous"></i>
                dripicons-media-previous
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-media-record"></i> dripicons-media-record
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-media-shuffle"></i> dripicons-media-shuffle
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-media-stop"></i> dripicons-media-stop
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-medical"></i> dripicons-medical
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-menu"></i> dripicons-menu
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-message"></i> dripicons-message
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-meter"></i> dripicons-meter
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-microphone"></i> dripicons-microphone
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-minus"></i> dripicons-minus
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-monitor"></i> dripicons-monitor
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-move"></i> dripicons-move
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-music"></i> dripicons-music
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-network-1"></i> dripicons-network-1
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-network-2"></i> dripicons-network-2
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-network-3"></i> dripicons-network-3
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-network-4"></i> dripicons-network-4
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-network-5"></i> dripicons-network-5
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-pamphlet"></i> dripicons-pamphlet
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-paperclip"></i> dripicons-paperclip
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-pencil"></i> dripicons-pencil
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-phone"></i> dripicons-phone
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-photo"></i> dripicons-photo
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-photo-group"></i> dripicons-photo-group
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-pill"></i> dripicons-pill
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-pin"></i> dripicons-pin
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-plus"></i> dripicons-plus
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-power"></i> dripicons-power
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-preview"></i> dripicons-preview
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-print"></i> dripicons-print
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-pulse"></i> dripicons-pulse
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-question"></i> dripicons-question
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-reply"></i> dripicons-reply
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-reply-all"></i> dripicons-reply-all
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-return"></i> dripicons-return
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-retweet"></i> dripicons-retweet
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-rocket"></i> dripicons-rocket
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-scale"></i> dripicons-scale
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-search"></i> dripicons-search
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-shopping-bag"></i> dripicons-shopping-bag
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-skip"></i> dripicons-skip
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-stack"></i> dripicons-stack
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-star"></i> dripicons-star
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-stopwatch"></i> dripicons-stopwatch
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-store"></i> dripicons-store
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-suitcase"></i> dripicons-suitcase
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-swap"></i> dripicons-swap
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-tag"></i> dripicons-tag
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-tag-delete"></i> dripicons-tag-delete
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-tags"></i> dripicons-tags
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-thumbs-down"></i> dripicons-thumbs-down
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-thumbs-up"></i> dripicons-thumbs-up
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-ticket"></i> dripicons-ticket
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-time-reverse"></i> dripicons-time-reverse
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-to-do"></i> dripicons-to-do
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-toggles"></i> dripicons-toggles
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-trash"></i> dripicons-trash
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-trophy"></i> dripicons-trophy
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-upload"></i> dripicons-upload
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-user"></i> dripicons-user
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-user-group"></i> dripicons-user-group
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-user-id"></i> dripicons-user-id
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-vibrate"></i> dripicons-vibrate
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-view-apps"></i> dripicons-view-apps
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-view-list"></i> dripicons-view-list
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-view-list-large"></i>
                dripicons-view-list-large
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-view-thumb"></i> dripicons-view-thumb
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-volume-full"></i> dripicons-volume-full
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-volume-low"></i> dripicons-volume-low
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-volume-medium"></i> dripicons-volume-medium
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-volume-off"></i> dripicons-volume-off
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-wallet"></i> dripicons-wallet
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-warning"></i> dripicons-warning
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-web"></i> dripicons-web
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-weight"></i> dripicons-weight
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-wifi"></i> dripicons-wifi
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-wrong"></i> dripicons-wrong
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-zoom-in"></i> dripicons-zoom-in
              </BCol>
              <BCol sm="6" lg="4" cols="xl-3">
                <i class="dripicons-zoom-out"></i> dripicons-zoom-out
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
      <!-- end col -->
    </BRow>
    <!-- end row -->
  </Layout>
</template>
