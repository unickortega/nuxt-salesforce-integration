<template>
  <div>
    dashboard
    {{user}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    layout: 'default',
    middleware: 'authenticated',
    computed: mapGetters({
        user: 'user'
    }),
}
</script>