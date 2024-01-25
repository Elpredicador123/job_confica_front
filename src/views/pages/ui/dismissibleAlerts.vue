<script>
export default {
    props: ["classes", "variant"],
    data() {
        return {
            dismissibleAlert: true
        };
    },
};
</script>
<template>
    <BAlert v-model="dismissibleAlert" show dismissible :variant="variant" :class="classes">
        <slot />
    </BAlert>
</template>