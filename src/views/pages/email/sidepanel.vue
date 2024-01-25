<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

/**
 * Side-panel component
 */
export default {
    components: {
        ckeditor: CKEditor.component
    },
    data() {
        return {
            showModal: false,
            editor: ClassicEditor,
            editorData: "<p>Content of the editor.</p>"
        };
    }
};
</script>

<template>
    <div class="email-leftbar card">
        <BButton variant="danger" @click="showModal = true">Compose</BButton>
        <div class="mail-list mt-4">
            <router-link tag="a" to="/email/inbox" class="active">
                <i class="mdi mdi-email-outline font-size-16 align-middle me-2"></i> Inbox
                <span class="ms-1 float-end">(18)</span>
            </router-link>
            <router-link tag="a" to="/email/inbox">
                <i class="mdi mdi-star-outline font-size-16 align-middle me-2"></i>Starred
            </router-link>
            <router-link tag="a" to="/email/inbox">
                <i class="mdi mdi-diamond-stone font-size-16 align-middle me-2"></i>Important
            </router-link>
            <router-link tag="a" to="/email/inbox">
                <i class="mdi mdi-file-outline font-size-16 align-middle me-2"></i>Draft
            </router-link>
            <router-link tag="a" to="/email/inbox">
                <i class="mdi mdi-email-check-outline font-size-16 align-middle me-2"></i>Sent Mail
            </router-link>
            <router-link tag="a" to="/email/inbox">
                <i class="mdi mdi-trash-can-outline font-size-16 align-middle me-2"></i>Trash
            </router-link>
        </div>

        <h6 class="mt-4">Labels</h6>

        <div class="mail-list mt-1">
            <a href="javascript: void(0);">
                <span class="mdi mdi-circle-outline text-info float-end"></span>Theme Support
            </a>
            <a href="javascript: void(0);">
                <span class="mdi mdi-circle-outline text-warning float-end"></span>Freelance
            </a>
            <a href="javascript: void(0);">
                <span class="mdi mdi-circle-outline text-primary float-end"></span>Social
            </a>
            <a href="javascript: void(0);">
                <span class="mdi mdi-circle-outline text-danger float-end"></span>Friends
            </a>
            <a href="javascript: void(0);">
                <span class="mdi mdi-circle-outline text-success float-end"></span>Family
            </a>
        </div>

        <h6 class="mt-4">Chat</h6>

        <div class="mt-2">
            <a href="javascript: void(0);" class="media d-flex align-items-start">
                <img class="d-flex me-3 rounded-circle" src="@/assets/images/users/avatar-2.jpg"
                    alt="Generic placeholder image" height="36" />
                <div class="media-body chat-user-box">
                    <p class="user-title m-0">Scott Median</p>
                    <p class="text-muted">Hello</p>
                </div>
            </a>

            <a href="javascript: void(0);" class="media d-flex align-items-start">
                <img class="d-flex me-3 rounded-circle" src="@/assets/images/users/avatar-3.jpg"
                    alt="Generic placeholder image" height="36" />
                <div class="media-body chat-user-box">
                    <p class="user-title m-0">Julian Rosa</p>
                    <p class="text-muted">What about our next..</p>
                </div>
            </a>

            <a href="javascript: void(0);" class="media d-flex align-items-start">
                <img class="d-flex me-3 rounded-circle" src="@/assets/images/users/avatar-4.jpg"
                    alt="Generic placeholder image" height="36" />
                <div class="media-body chat-user-box">
                    <p class="user-title m-0">David Medina</p>
                    <p class="text-muted">Yeah everything is fine</p>
                </div>
            </a>

            <a href="javascript: void(0);" class="media d-flex align-items-start">
                <img class="d-flex me-3 rounded-circle" src="@/assets/images/users/avatar-6.jpg"
                    alt="Generic placeholder image" height="36" />
                <div class="media-body chat-user-box">
                    <p class="user-title m-0">Jay Baker</p>
                    <p class="text-muted">Wow that's great</p>
                </div>
            </a>
        </div>

        <BModal v-model="showModal" title="New Message" centered>
            <BForm>
                <BFormGroup>
                    <input type="email" class="form-control" placeholder="To" />
                </BFormGroup>

                <BFormGroup>
                    <input type="text" class="form-control" placeholder="Subject" />
                </BFormGroup>
                <BFormGroup>
                    <ckeditor v-model="editorData" :editor="editor"></ckeditor>
                </BFormGroup>
            </BForm>
            <template v-slot:modal-footer>
                <BButton variant="secondary" @click="showModal = false">Close</BButton>
                <BButton variant="primary">
                    Send
                    <i class="fab fa-telegram-plane ms-1"></i>
                </BButton>
            </template>
        </BModal>
    </div>
</template>
