<script>
import { filteredMenuItems } from "./horizontal-menu";

import { layoutComputed, authFackMethods } from "@/state/helpers";

/**
 * Horizontal-topbar component
 */
export default {
  
  props: {
    type: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      menuItems: filteredMenuItems ,
      languages: [
        {
          flag: require("@/assets/images/flags/us.jpg"),
          language: "en",
          title: "English",
        },
        {
          flag: require("@/assets/images/flags/french.jpg"),
          language: "fr",
          title: "French",
        },
        {
          flag: require("@/assets/images/flags/spain.jpg"),
          language: "es",
          title: "spanish",
        },
        // {
        //   flag: require("@/assets/images/flags/china.png"),
        //   language: "zh",
        //   title: "Chinese",
        // },
        // {
        //   flag: require("@/assets/images/flags/arabic.png"),
        //   language: "ar",
        //   title: "Arabic",
        // },
      ],
      current_language: this.$i18n.locale,
      text: null,
      flag: null,
      value: null,
    };
  },
  computed: {
    ...layoutComputed,
  },
  mounted() {
    this.value = this.languages.find((x) => x.language === this.$i18n.locale);
    this.text = this.value.title;
    this.flag = this.value.flag;
    this.activateParentDropdown();

    this.$router.afterEach(() => {
      this.activateParentDropdown();
    });
  },
  methods: {
    ...authFackMethods,
    /**
     * remove active and mm-active class
     */
    _removeAllClass(className) {
      const els = document.getElementsByClassName(className);
      while (els[0]) {
        els[0].classList.remove(className);
      }
    },

    activateParentDropdown() {
      const resetParent = (el) => {
        const parent = el.parentElement;
        this._removeAllClass("mm-active");
        this._removeAllClass("mm-show");
        if (parent) {
          parent.classList.remove("active");
          const parent2 = parent.parentElement;
          if (parent2) {
            parent2.classList.remove("active");
            const parent3 = parent2.parentElement;
            if (parent3) {
              parent3.classList.remove("active");
              const parent4 = parent3.parentElement;
              if (parent4) {
                parent4.classList.remove("active");
                const parent5 = parent4.parentElement;
                if (parent5) {
                  parent5.classList.remove("active");
                  const menuelement = document.getElementById(
                    "topnav-menu-content"
                  );
                  if (menuelement !== null)
                    if (menuelement.classList.contains("show"))
                      document
                        .getElementById("topnav-menu-content")
                        .classList.remove("show");
                }
              }
            }
          }
        }
      };
      var links = document.getElementsByClassName("side-nav-link-ref");
      var matchingMenuItem = null;
      for (let i = 0; i < links.length; i++) {
        // reset menu
        resetParent(links[i]);
      }
      for (var i = 0; i < links.length; i++) {
        if (window.location.pathname === links[i].pathname) {
          matchingMenuItem = links[i];
          break;
        }
      }
      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");
        var parent = matchingMenuItem.parentElement;
        if (parent) {
          parent.classList.add("active");
          const parent2 = parent.parentElement;
          if (parent2) {
            parent2.classList.add("active");
          }
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.add("active");
            var childAnchor = parent3.querySelector(".has-dropdown");
            if (childAnchor) childAnchor.classList.add("active");
          }

          const parent4 = parent3.parentElement;
          if (parent4) parent4.classList.add("active");
          const parent5 = parent4.parentElement;
          if (parent5) parent5.classList.add("active");
        }
      }
    },
    /**
     * Full-screen
     */
    initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (
        !document.fullscreenElement &&
        /* alternative standard method */
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
    /**
     * Toggle right-sidebar
     */
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    },
    /**
     * Menu clicked show the submenu
     */
    onMenuClick(event) {
      event.preventDefault();
      const nextEl = event.target.nextElementSibling;
      if (nextEl) {
        const parentEl = event.target.parentNode;
        if (parentEl) {
          parentEl.classList.remove("show");
        }
        nextEl.classList.toggle("show");
      }
      return false;
    },

    /**
     * Returns true or false if given menu item has child or not
     * @param item menuItem
     */
    hasItems(item) {
      return item.subItems !== undefined ? item.subItems.length > 0 : false;
    },
    /**
     * Language set
     */
    setLanguage(locale, country, flag) {
      this.$i18n.locale = locale;
      this.current_language = locale;
      this.text = country;
      this.flag = flag;
    },
    toggleMenu() {
      let element = document.getElementById("topnav-menu-content");
      element.classList.toggle("show");
    },
    logoutUser() {
      this.logout();
      this.$router.push({
        path: "/account/login",
      });
    },
  },
  watch: {
    type: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "dark":
              document.body.setAttribute("data-topbar", "dark");
              break;
            case "light":
              document.body.setAttribute("data-topbar", "light");
              document.body.removeAttribute("data-layout-size", "boxed");
              break;
            case "colored":
              document.body.setAttribute("data-topbar", "colored");
              document.body.removeAttribute("data-layout-size", "boxed");
              break;
            default:
              document.body.setAttribute("data-topbar", "dark");
              break;
          }
        }
      },
    },
    width: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "boxed":
              document.body.setAttribute("data-layout-size", "boxed");
              break;
            case "fluid":
              document.body.setAttribute("data-layout-mode", "fluid");
              document.body.removeAttribute("data-layout-size");
              break;
            default:
              document.body.setAttribute("data-layout-mode", "fluid");
              break;
          }
        }
      },
    },
  },
};
</script>

<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <router-link to="/" class="logo logo-dark">
            <span class="logo-sm">
              <img src="@/assets/images/logo-sm.png" alt height="22" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/logo-dark.png" alt height="20" />
            </span>
          </router-link>

          <router-link to="/" class="logo logo-light">
            <span class="logo-sm">
              <img src="@/assets/images/logo-sm.png" alt height="22" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/logo-light.png" alt height="20" />
            </span>
          </router-link>
        </div>

        <BButton type="button" class="btn-sm px-3 font-size-16 d-lg-none header-item" data-toggle="collapse"
          data-target="#topnav-menu-content" @click="toggleMenu">
          <i class="fa fa-fw fa-bars"></i>
        </BButton>

        <!-- App Search-->
        <BForm class="app-search d-none d-lg-block">
          <div class="position-relative">
            <input type="text" class="form-control" :placeholder="$t('navbar.search.text')" />
            <span class="uil-search"></span>
          </div>
        </BForm>
      </div>

      <div class="d-flex">
        <BDropdown variant="white" class="d-inline-block d-lg-none ms-2" toggle-class="header-item noti-icon" right
          menu-class="dropdown-menu-lg p-0 dropdown-menu-end">
          <template v-slot:button-content>
            <i class="uil-search"></i>
          </template>
          <BForm class="p-3">
            <div class="form-group m-0">
              <div class="input-group">
                <input type="text" class="form-control" :placeholder="$t('navbar.search.text')"
                  aria-label="Recipient's username" />
                <div class="input-group-append">
                  <BButton class="btn btn-primary" type="submit">
                    <i class="mdi mdi-magnify"></i>
                  </BButton>
                </div>
              </div>
            </div>
          </BForm>
        </BDropdown>

        <BDropdown variant="white" right toggle-class="header-item">
          <template v-slot:button-content>
            <img class :src="flag" alt="Header Language" height="16" />
            {{ text }}
          </template>
          <BDropdownItem class="notify-item" v-for="(entry, i) in languages" :key="`Lang${i}`" :value="entry"
            @click="setLanguage(entry.language, entry.title, entry.flag)"
            :link-class="{ active: entry.language === current_language }">
            <img :src="`${entry.flag}`" alt="user-image" class="me-1" height="12" />
            <span class="align-middle">{{ entry.title }}</span>
          </BDropdownItem>
        </BDropdown>

        <BDropdown variant="white" class="d-none d-lg-inline-block ms-1" toggle-class="header-item noti-icon" right
          menu-class="dropdown-menu-lg dropdown-menu-end">
          <template v-slot:button-content>
            <i class="uil-apps"></i>
          </template>
          <div class="px-lg-2">
            <BRow class="no-gutters">
              <BCol>
                <a class="dropdown-icon-item" href="#">
                  <img src="@/assets/images/brands/github.png" alt="Github" />
                  <span>{{ $t("navbar.dropdown.site.list.github") }}</span>
                </a>
              </BCol>
              <BCol>
                <a class="dropdown-icon-item" href="#">
                  <img src="@/assets/images/brands/bitbucket.png" alt="bitbucket" />
                  <span>{{ $t("navbar.dropdown.site.list.bitbucket") }}</span>
                </a>
              </BCol>
              <BCol>
                <a class="dropdown-icon-item" href="#">
                  <img src="@/assets/images/brands/dribbble.png" alt="dribbble" />
                  <span>{{ $t("navbar.dropdown.site.list.dribbble") }}</span>
                </a>
              </BCol>
            </BRow>

            <BRow class="no-gutters">
              <BCol>
                <a class="dropdown-icon-item" href="#">
                  <img src="@/assets/images/brands/dropbox.png" alt="dropbox" />
                  <span>{{ $t("navbar.dropdown.site.list.dropbox") }}</span>
                </a>
              </BCol>
              <BCol>
                <a class="dropdown-icon-item" href="#">
                  <img src="@/assets/images/brands/mail_chimp.png" alt="mail_chimp" />
                  <span>{{ $t("navbar.dropdown.site.list.mailchimp") }}</span>
                </a>
              </BCol>
              <BCol>
                <a class="dropdown-icon-item" href="#">
                  <img src="@/assets/images/brands/slack.png" alt="slack" />
                  <span>{{ $t("navbar.dropdown.site.list.slack") }}</span>
                </a>
              </BCol>
            </BRow>
          </div>
        </BDropdown>

        <div class="dropdown d-none d-lg-inline-block ms-1">
          <BButton variant="button" class="header-item noti-icon waves-effect" data-toggle="fullscreen"
            @click="initFullScreen">
            <i class="uil-minus-path"></i>
          </BButton>
        </div>
        <BDropdown variant="white" class="dropdown d-inline-block" toggle-class="header-item noti-icon" right
          menu-class="dropdown-menu-lg p-0 dropdown-menu-end">
          <template v-slot:button-content>
            <i class="uil-bell"></i>
            <span class="badge bg-danger rounded-pill">3</span>
          </template>

          <div class="p-3">
            <BRow class="align-items-center">
              <BCol>
                <h5 class="m-0 font-size-16">
                  {{ $t("navbar.dropdown.notification.text") }}
                </h5>
              </BCol>
              <BCol class="col-auto">
                <a href="#!" class="small">{{
                  $t("navbar.dropdown.notification.subtext")
                }}</a>
              </BCol>
            </BRow>
          </div>
          <SimpleBar style="max-height: 230px" data-simplebar>
            <a href class="text-reset notification-item">
              <div class="media">
                <div class="avatar-xs me-3">
                  <span class="avatar-title bg-primary rounded-circle font-size-16">
                    <i class="uil-shopping-basket"></i>
                  </span>
                </div>
                <div class="media-body">
                  <h6 class="mt-0 mb-1">
                    {{ $t("navbar.dropdown.notification.order.title") }}
                  </h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">
                      {{ $t("navbar.dropdown.notification.order.text") }}
                    </p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline"></i>
                      {{ $t("navbar.dropdown.notification.order.time") }}
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a href class="text-reset notification-item">
              <div class="media">
                <img src="@/assets/images/users/avatar-3.jpg" class="me-3 rounded-circle avatar-xs" alt="user-pic" />
                <div class="media-body">
                  <h6 class="mt-0 mb-1">
                    {{ $t("navbar.dropdown.notification.james.title") }}
                  </h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">
                      {{ $t("navbar.dropdown.notification.james.text") }}
                    </p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline"></i>
                      {{ $t("navbar.dropdown.notification.james.time") }}
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a href class="text-reset notification-item">
              <div class="media">
                <div class="avatar-xs me-3">
                  <span class="avatar-title bg-success rounded-circle font-size-16">
                    <i class="uil-truck"></i>
                  </span>
                </div>
                <div class="media-body">
                  <h6 class="mt-0 mb-1">
                    {{ $t("navbar.dropdown.notification.item.title") }}
                  </h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">
                      {{ $t("navbar.dropdown.notification.item.text") }}
                    </p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline"></i>
                      {{ $t("navbar.dropdown.notification.item.time") }}
                    </p>
                  </div>
                </div>
              </div>
            </a>

            <a href class="text-reset notification-item">
              <div class="media">
                <img src="@/assets/images/users/avatar-4.jpg" class="me-3 rounded-circle avatar-xs" alt="user-pic" />
                <div class="media-body">
                  <h6 class="mt-0 mb-1">
                    {{ $t("navbar.dropdown.notification.salena.title") }}
                  </h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">
                      {{ $t("navbar.dropdown.notification.salena.text") }}
                    </p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline"></i>
                      {{ $t("navbar.dropdown.notification.salena.time") }}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </SimpleBar>
          <div class="p-2 border-top">
            <div class="d-grid">
              <a class="btn btn-sm btn-link font-size-14 text-center" href="javascript:void(0)">
                <i class="uil-arrow-circle-right me-1"></i>
                {{ $t("navbar.dropdown.notification.button") }}
              </a>
            </div>
          </div>
        </BDropdown>

        <BDropdown class="d-inline-block" toggle-class="header-item" right variant="white">
          <template v-slot:button-content>
            <img class="rounded-circle header-profile-user" src="@/assets/images/users/avatar-4.jpg"
              alt="Header Avatar" />
            <span class="d-none d-xl-inline-block ms-1 fw-medium font-size-15">{{ $t("navbar.dropdown.marcus.text")
            }}</span>
            <i class="uil-angle-down d-none d-xl-inline-block font-size-15"></i>
          </template>

          <!-- item-->
          <a class="dropdown-item" href="#">
            <i class="uil uil-user-circle font-size-18 align-middle text-muted me-1"></i>
            <span class="align-middle">{{
              $t("navbar.dropdown.marcus.list.profile")
            }}</span>
          </a>
          <a class="dropdown-item" href="#">
            <i class="uil uil-wallet font-size-18 align-middle me-1 text-muted"></i>
            <span class="align-middle">{{
              $t("navbar.dropdown.marcus.list.mywallet")
            }}</span>
          </a>
          <a class="dropdown-item d-block" href="#">
            <i class="uil uil-cog font-size-18 align-middle me-1 text-muted"></i>
            <span class="align-middle">{{
              $t("navbar.dropdown.marcus.list.settings")
            }}</span>
            <span class="badge bg-soft-success rounded-pill mt-1 ms-2">03</span>
          </a>
          <a class="dropdown-item" href="#">
            <i class="uil uil-lock-alt font-size-18 align-middle me-1 text-muted"></i>
            <span class="align-middle">{{
              $t("navbar.dropdown.marcus.list.lockscreen")
            }}</span>
          </a>
          <a class="dropdown-item" href="javascript: void(0);" @click="logoutUser">
            <i class="uil uil-sign-out-alt font-size-18 align-middle me-1 text-muted"></i>
            <span class="align-middle">{{
              $t("navbar.dropdown.marcus.list.logout")
            }}</span>
          </a>
        </BDropdown>


      </div>
    </div>

    <BContainer fluid>
      <div class="topnav">
        <BNav class="navbar navbar-light navbar-expand-lg topnav-menu">
          <div class="collapse navbar-collapse" id="topnav-menu-content">
            <ul class="navbar-nav">
              <li class="nav-item dropdown" v-for="(item, index) of menuItems" :key="index">
                <router-link v-if="!item.subItems" :to="item.link"
                  class="nav-link dropdown-toggle arrow-none side-nav-link-ref">
                  <i :class="`${item.icon} me-2`"></i>
                  {{ $t(item.label) }}
                </router-link>

                <a v-if="item.subItems" class="nav-link dropdown-toggle arrow-none" @click="onMenuClick"
                  href="javascript: void(0);" id="topnav-components" role="button">
                  <i :class="`${item.icon} me-2`"></i>
                  {{ $t(item.label) }}
                  <div class="arrow-down"></div>
                </a>
                <div class="dropdown-menu" aria-labelledby="topnav-dashboard" v-if="hasItems(item)" :class="{
                  'dropdown-mega-menu-xl px-2': item.subItems.length > 11,
                }">
                  <template v-for="(subitem, index) of item.subItems">
                    <router-link :key="index" class="col dropdown-item side-nav-link-ref"
                      v-if="item.subItems.length < 11 && !hasItems(subitem)" :to="subitem.link">{{ $t(subitem.label)
                      }}</router-link>
                    <div v-if="item.subItems.length > 11" :key="index">
                      <div v-if="index % 3 == 0" class="row">
                        <div class="col-lg-4">
                          <router-link class="dropdown-item side-nav-link-ref" :to="subitem.link">{{
                            $t(item.subItems[index].label) }}</router-link>
                        </div>
                        <div class="col-lg-4" v-if="item.subItems[index + 1]">
                          <router-link class="dropdown-item side-nav-link-ref" :to="item.subItems[index + 1].link">{{
                            $t(item.subItems[index + 1].label)
                          }}</router-link>
                        </div>
                        <div class="col-lg-4" v-if="item.subItems[index + 2]">
                          <router-link class="dropdown-item side-nav-link-ref" :to="item.subItems[index + 2].link">{{
                            $t(item.subItems[index + 2].label)
                          }}</router-link>
                        </div>
                      </div>
                    </div>
                    <div class="dropdown" v-if="hasItems(subitem)" :key="index">
                      <a class="dropdown-item" href="javascript: void(0);" @click="onMenuClick">
                        {{ $t(subitem.label) }}
                        <div class="arrow-down"></div>
                      </a>
                      <div class="dropdown-menu">
                        <router-link v-for="(subSubitem, index) of subitem.subItems" :key="index" :to="subSubitem.link"
                          class="dropdown-item side-nav-link-ref">{{ $t(subSubitem.label) }}</router-link>
                      </div>
                    </div>
                  </template>
                </div>
              </li>
            </ul>
          </div>
        </BNav>
      </div>
    </BContainer>
  </header>
</template>
