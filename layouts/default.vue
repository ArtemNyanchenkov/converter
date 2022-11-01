<template style="display: flex;
    justify-content: center">
  <div class="content">
    <Navbar/>
    <div>
      <Nuxt />
    </div>
  </div>
</template>

<script>
import navbar from "~/components/navbar";
import {mapActions} from "vuex";
export default {

  components:{navbar},
  methods:{
    ...mapActions(["getData"])
  },
  mounted() {
    this.getData()
  }
}
</script>

<style lang="scss">
button,
input,
optgroup,
select,
textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

html {
    font-size: 12px;
}

body {
    display: flex;
  justify-content: center;
    margin: 0;
  padding: 0;
}
.content {
  max-width: 1600px;
  width: 100%;
}
@media (max-width: 360px) {
  .content {
    width: 360px!important;
  }
}
@media (max-width: 768px) {
  .content {
    max-width: 768px!important;
  }
}
</style>
