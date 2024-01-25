<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Profile component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Profile",
      items: [
        {
          text: "Contacts"
        },
        {
          text: "Profile"
          // active: true,
        }
      ]
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <BRow rows="mb-4">
      <BCol cols="xl-4">
        <BCard no-body class="h-100">
          <BCardBody>
            <div class="text-center">
              <BDropdown
                class="float-end"
                variant="white"
                right
                menu-class="dropdown-menu-end"
                toggle-class="font-size-16 text-body p-0"
              >
                <template v-slot:button-content>
                  <i class="uil uil-ellipsis-v"></i>
                </template>
                <BDropdownItem href="#">Edit</BDropdownItem>
                <BDropdownItem href="#">Action</BDropdownItem>
                <BDropdownItem href="#">Remove</BDropdownItem>
              </BDropdown>
              <div class="clearfix"></div>
              <div>
                <img
                  src="@/assets/images/users/avatar-4.jpg"
                  alt
                  class="avatar-lg rounded-circle img-thumbnail"
                />
              </div>
              <h5 class="mt-3 mb-1">Marcus</h5>
              <p class="text-muted">UI/UX Designer</p>

              <div class="mt-4">
                <BButton type="button" variant="light btn-sm">
                  <i class="uil uil-envelope-alt me-2"></i> Message
                </BButton>
              </div>
            </div>

            <hr class="my-4" />

            <div class="text-muted">
              <h5 class="font-size-16">About</h5>
              <p>
                Hi I'm Marcus,has been the industry's standard dummy text To an
                English person, it will seem like simplified English, as a
                skeptical Cambridge.
              </p>
              <div class="table-responsive mt-4 mb-0">
                <div>
                  <p class="mb-1">Name :</p>
                  <h5 class="font-size-16">Marcus</h5>
                </div>
                <div class="mt-4">
                  <p class="mb-1">Mobile :</p>
                  <h5 class="font-size-16">012-234-5678</h5>
                </div>
                <div class="mt-4">
                  <p class="mb-1">E-mail :</p>
                  <h5 class="font-size-16">marcus@minible.com</h5>
                </div>
                <div class="mt-4">
                  <p class="mb-1">Location :</p>
                  <h5 class="font-size-16">California, United States</h5>
                </div>
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol cols="xl-8">
        <BCard no-body class="mb-0">
          <b-tabs content-class="p-4" justified class="nav-tabs-custom">
            <b-tab>
              <template #title>
                <i class="uil uil-user-circle font-size-20"></i>
                <span class="d-none d-sm-block">About</span>
              </template>
              <div>
                <div>
                  <h5 class="font-size-16 mb-4">Experience</h5>

                  <ul class="activity-feed mb-0 ps-2">
                    <li class="feed-item">
                      <div class="feed-item-list">
                        <p class="text-muted mb-1">2019 - 2020</p>
                        <h5 class="font-size-16">UI/UX Designer</h5>
                        <p>Abc Company</p>
                        <p class="text-muted">
                          To achieve this, it would be necessary to have uniform
                          grammar, pronunciation and more common words. If
                          several languages coalesce, the grammar of the
                          resulting language is more simple and regular than
                          that of the individual
                        </p>
                      </div>
                    </li>
                    <li class="feed-item">
                      <div class="feed-item-list">
                        <p class="text-muted mb-1">2017 - 2019</p>
                        <h5 class="font-size-16">Graphic Designer</h5>
                        <p>xyz Company</p>
                        <p class="text-muted">
                          It will be as simple as occidental in fact, it will be
                          Occidental. To an English person, it will seem like
                          simplified English, as a skeptical Cambridge friend of
                          mine told me what Occidental
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 class="font-size-16 mb-4">Projects</h5>

                  <div class="table-responsive">
                    <table class="table table-nowrap table-hover mb-0">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Projects</th>
                          <th scope="col">Date</th>
                          <th scope="col">Status</th>
                          <th scope="col" style="width: 120px">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">01</th>
                          <td>
                            <a href="#" class="nav-link">Brand Logo Design</a>
                          </td>
                          <td>18 Jun, 2020</td>
                          <td>
                            <span class="badge bg-primary-subtle font-size-12"
                              >Open</span
                            >
                          </td>
                          <td>
                            <BDropdown
                              right
                              toggle-class="text-muted font-size-18 px-2 p-0"
                              variant="white"
                              menu-class="dropdown-menu-end"
                            >
                              <template v-slot:button-content>
                                <i class="uil uil-ellipsis-v"></i>
                              </template>

                              <BDropdownItem href="#">Action</BDropdownItem>
                              <BDropdownItem href="#"
                                >Another action</BDropdownItem
                              >
                              <BDropdownItem href="#"
                                >Something else here</BDropdownItem
                              >
                            </BDropdown>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">02</th>
                          <td>
                            <a href="#" class="nav-link">Minible Admin</a>
                          </td>
                          <td>06 Jun, 2020</td>
                          <td>
                            <span class="badge bg-primary-subtle font-size-12"
                              >Open</span
                            >
                          </td>
                          <td>
                            <BDropdown
                              right
                              toggle-class="text-muted font-size-18 px-2 p-0"
                              variant="white"
                              menu-class="dropdown-menu-end"
                            >
                              <template v-slot:button-content>
                                <i class="uil uil-ellipsis-v"></i>
                              </template>

                              <BDropdownItem href="#">Action</BDropdownItem>
                              <BDropdownItem href="#"
                                >Another action</BDropdownItem
                              >
                              <BDropdownItem href="#"
                                >Something else here</BDropdownItem
                              >
                            </BDropdown>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">03</th>
                          <td>
                            <a href="#" class="nav-link">Chat app Design</a>
                          </td>
                          <td>28 May, 2020</td>
                          <td>
                            <span class="badge bg-success-subtle font-size-12"
                              >Complete</span
                            >
                          </td>
                          <td>
                            <BDropdown
                              right
                              toggle-class="text-muted font-size-18 px-2 p-0"
                              variant="white"
                              menu-class="dropdown-menu-end"
                            >
                              <template v-slot:button-content>
                                <i class="uil uil-ellipsis-v"></i>
                              </template>

                              <BDropdownItem href="#">Action</BDropdownItem>
                              <BDropdownItem href="#"
                                >Another action</BDropdownItem
                              >
                              <BDropdownItem href="#"
                                >Something else here</BDropdownItem
                              >
                            </BDropdown>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">04</th>
                          <td>
                            <a href="#" class="nav-link">Minible Landing</a>
                          </td>
                          <td>13 May, 2020</td>
                          <td>
                            <span class="badge bg-success-subtle font-size-12"
                              >Complete</span
                            >
                          </td>
                          <td>
                            <BDropdown
                              right
                              toggle-class="text-muted font-size-18 px-2 p-0"
                              variant="white"
                              menu-class="dropdown-menu-end"
                            >
                              <template v-slot:button-content>
                                <i class="uil uil-ellipsis-v"></i>
                              </template>

                              <BDropdownItem href="#">Action</BDropdownItem>
                              <BDropdownItem href="#"
                                >Another action</BDropdownItem
                              >
                              <BDropdownItem href="#"
                                >Something else here</BDropdownItem
                              >
                            </BDropdown>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">05</th>
                          <td>
                            <a href="#" class="nav-link"
                              >Authentication Pages</a
                            >
                          </td>
                          <td>06 May, 2020</td>
                          <td>
                            <span class="badge bg-success-subtle font-size-12"
                              >Complete</span
                            >
                          </td>
                          <td>
                            <BDropdown
                              right
                              toggle-class="text-muted font-size-18 px-2 p-0"
                              variant="white"
                              menu-class="dropdown-menu-end"
                            >
                              <template v-slot:button-content>
                                <i class="uil uil-ellipsis-v"></i>
                              </template>

                              <BDropdownItem href="#">Action</BDropdownItem>
                              <BDropdownItem href="#"
                                >Another action</BDropdownItem
                              >
                              <BDropdownItem href="#"
                                >Something else here</BDropdownItem
                              >
                            </BDropdown>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="uil uil-clipboard-notes font-size-20"></i>
                <span class="d-none d-sm-block">Tasks</span>
              </template>
              <div>
                <h5 class="font-size-16 mb-3">Active</h5>

                <div class="table-responsive">
                  <table class="table table-nowrap table-centered">
                    <tbody>
                      <tr>
                        <td style="width: 60px">
                          <div
                            class="custom-control custom-checkbox text-center"
                          >
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="tasks-activeCheck2"
                            />
                            <label
                              class="custom-control-label"
                              for="tasks-activeCheck2"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" class="fw-bold nav-link"
                            >Ecommerce Product Detail</a
                          >
                        </td>

                        <td>27 May, 2020</td>
                        <td style="width: 160px">
                          <span class="badge bg-soft-primary font-size-12"
                            >Active</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div
                            class="custom-control custom-checkbox text-center"
                          >
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="tasks-activeCheck1"
                            />
                            <label
                              class="custom-control-label"
                              for="tasks-activeCheck1"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" class="fw-bold nav-link"
                            >Ecommerce Product</a
                          >
                        </td>

                        <td>26 May, 2020</td>
                        <td>
                          <span class="badge bg-soft-primary font-size-12"
                            >Active</span
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h5 class="font-size-16 my-3">Upcoming</h5>

                <div class="table-responsive">
                  <table class="table table-nowrap table-centered">
                    <tbody>
                      <tr>
                        <td style="width: 60px">
                          <div
                            class="custom-control custom-checkbox text-center"
                          >
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="tasks-upcomingCheck3"
                            />
                            <label
                              class="custom-control-label"
                              for="tasks-upcomingCheck3"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" class="fw-bold nav-link">Chat app Page</a>
                        </td>

                        <td>-</td>
                        <td style="width: 160px">
                          <span class="badge bg-soft-secondary font-size-12"
                            >Waiting</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div
                            class="custom-control custom-checkbox text-center"
                          >
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="tasks-upcomingCheck2"
                            />
                            <label
                              class="custom-control-label"
                              for="tasks-upcomingCheck2"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" class="fw-bold nav-link">Email Pages</a>
                        </td>

                        <td>04 June, 2020</td>
                        <td>
                          <span class="badge bg-soft-primary font-size-12"
                            >Approved</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div
                            class="custom-control custom-checkbox text-center"
                          >
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="tasks-upcomingCheck1"
                            />
                            <label
                              class="custom-control-label"
                              for="tasks-upcomingCheck1"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" class="fw-bold nav-link"
                            >Contacts Profile Page</a
                          >
                        </td>

                        <td>-</td>
                        <td>
                          <span class="badge bg-soft-secondary font-size-12"
                            >Waiting</span
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h5 class="font-size-16 my-3">Complete</h5>

                <div class="table-responsive">
                  <table class="table table-nowrap table-centered">
                    <tbody>
                      <tr>
                        <td style="width: 60px">
                          <div
                            class="custom-control custom-checkbox text-center"
                          >
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="tasks-completeCheck3"
                            />
                            <label
                              class="custom-control-label"
                              for="tasks-completeCheck3"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" class="fw-bold nav-link">UI Elements</a>
                        </td>

                        <td>27 May, 2020</td>
                        <td style="width: 160px">
                          <span class="badge bg-soft-success font-size-12"
                            >Complete</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div
                            class="custom-control custom-checkbox text-center"
                          >
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="tasks-completeCheck2"
                            />
                            <label
                              class="custom-control-label"
                              for="tasks-completeCheck2"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" class="fw-bold nav-link"
                            >Authentication Pages</a
                          >
                        </td>

                        <td>27 May, 2020</td>
                        <td>
                          <span class="badge bg-soft-success font-size-12"
                            >Complete</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div
                            class="custom-control custom-checkbox text-center"
                          >
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="tasks-completeCheck1"
                            />
                            <label
                              class="custom-control-label"
                              for="tasks-completeCheck1"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" class="fw-bold nav-link">Admin Layout</a>
                        </td>

                        <td>26 May, 2020</td>
                        <td>
                          <span class="badge bg-soft-success font-size-12"
                            >Complete</span
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="uil uil-envelope-alt font-size-20"></i>
                <span class="d-none d-sm-block">Messages</span>
              </template>
              <div>
                <div data-simplebar style="max-height: 430px">
                  <div
                    class="media d-flex align-items-start border-bottom py-4"
                  >
                    <img
                      class="me-2 rounded-circle avatar-xs"
                      src="@/assets/images/users/avatar-3.jpg"
                      alt
                    />
                    <div class="media-body flex-grow-1">
                      <h5 class="font-size-15 mt-0 mb-1">
                        Marion Walker
                        <small class="text-muted float-end">1 hr ago</small>
                      </h5>
                      <p class="text-muted">
                        If several languages coalesce, the grammar of the
                        resulting .
                      </p>

                      <a
                        href="javascript: void(0);"
                        class="text-muted font-13 d-inline-block"
                      >
                        <i class="mdi mdi-reply"></i> Reply
                      </a>

                      <div class="media mt-4">
                        <img
                          class="me-2 rounded-circle avatar-xs"
                          src="@/assets/images/users/avatar-4.jpg"
                          alt
                        />
                        <div class="media-body">
                          <h5 class="font-size-15 mt-0 mb-1">
                            Shanon Marvin
                            <small class="text-muted float-end">1 hr ago</small>
                          </h5>
                          <p class="text-muted">
                            It will be as simple as in fact, it will be
                            Occidental. To it will seem like simplified .
                          </p>

                          <a
                            href="javascript: void(0);"
                            class="text-muted font-13 d-inline-block"
                          >
                            <i class="mdi mdi-reply"></i> Reply
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="media d-flex align-items-start border-bottom py-4"
                  >
                    <img
                      class="me-2 rounded-circle avatar-xs"
                      src="@/assets/images/users/avatar-5.jpg"
                      alt
                    />
                    <div class="media-body flex-grow-1">
                      <h5 class="font-size-15 mt-0 mb-1">
                        Janice Morgan
                        <small class="text-muted float-end">2 hrs ago</small>
                      </h5>
                      <p class="text-muted">
                        To achieve this, it would be necessary to have uniform
                        pronunciation.
                      </p>

                      <a
                        href="javascript: void(0);"
                        class="text-muted font-13 d-inline-block"
                      >
                        <i class="mdi mdi-reply"></i> Reply
                      </a>
                    </div>
                  </div>

                  <div
                    class="media d-flex align-items-start border-bottom py-4"
                  >
                    <img
                      class="me-2 rounded-circle avatar-xs"
                      src="@/assets/images/users/avatar-7.jpg"
                      alt
                    />
                    <div class="media-body flex-grow-1">
                      <h5 class="font-size-15 mt-0 mb-1">
                        Patrick Petty
                        <small class="text-muted float-end">3 hrs ago</small>
                      </h5>
                      <p class="text-muted">
                        Sed ut perspiciatis unde omnis iste natus error sit
                      </p>

                      <a
                        href="javascript: void(0);"
                        class="text-muted font-13 d-inline-block"
                      >
                        <i class="mdi mdi-reply"></i> Reply
                      </a>
                    </div>
                  </div>
                </div>

                <div class="border rounded mt-4">
                  <form action="#">
                    <div class="px-2 py-1 bg-light">
                      <div class="btn-group" role="group">
                        <BButton
                          type="button"
                          variant=""
                          class="btn-sm btn-link text-dark text-decoration-none"
                        >
                          <i class="uil uil-link"></i>
                        </BButton>
                        <BButton
                          type="button"
                          variant=""
                          class="btn-sm btn-link text-dark text-decoration-none"
                        >
                          <i class="uil uil-smile"></i>
                        </BButton>
                        <BButton
                          type="button"
                          variant=""
                          class="btn-sm btn-link text-dark text-decoration-none"
                        >
                          <i class="uil uil-at"></i>
                        </BButton>
                      </div>
                    </div>
                    <textarea
                      rows="3"
                      class="form-control border-0 resize-none"
                      placeholder="Your Message..."
                    ></textarea>
                  </form>
                </div>
                <!-- end .border-->
              </div>
            </b-tab>
          </b-tabs>
          <!-- Nav tabs -->
          <!-- Tab content -->
        </BCard>
      </BCol>
    </BRow>
    <!-- end row -->
  </Layout>
</template>
