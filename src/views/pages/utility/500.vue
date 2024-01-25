<script>
/**
 * 500-component
 */
export default {
  layout: "auth",
  data() {
    return {
      title: "Error-500"
    };
  },
  middleware: "authentication",
  mounted() {
    document.body.classList.add("authentication-bg");
  }
};
</script>

<template>
  <div class="my-5 pt-sm-5">
    <BContainer>
      <BRow>
        <BCol md="12">
          <div class="text-center">
            <div>
              <BRow class="justify-content-center">
                <BCol sm="4">
                  <div class="error-img">
                    <img
                      src="@/assets/images/500-error.png"
                      alt
                      class="img-fluid mx-auto d-block"
                    />
                  </div>
                </BCol>
              </BRow>
            </div>
            <h4 class="text-uppercase mt-4">Internal Server Error</h4>
            <p class="text-muted">
              It will be as simple as Occidental in fact, it will be Occidental
            </p>
            <div class="mt-5">
              <router-link to="/" class="btn btn-primary"
                >Back to Dashboard</router-link
              >
            </div>
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </div>
</template>
