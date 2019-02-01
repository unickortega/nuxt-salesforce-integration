<template>
  <div class="text-danger" v-if="form.errors.has(field)" v-html="form.errors.get(field)"/>
</template>

<script>
export default {
  name: 'HasError',

  props: {
    form: {
      type: Object,
      required: true
    },

    field: {
      type: String,
      required: true
    }
  }
}
</script>