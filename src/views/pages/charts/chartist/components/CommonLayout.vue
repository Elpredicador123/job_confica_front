<template>
  <BCard no-body>
    <BCardBody dir="ltr">
      <BCardTitle class="mb-4">
        <slot name="title" />
      </BCardTitle>
      <slot />
    </BCardBody>
  </BCard>
</template>
