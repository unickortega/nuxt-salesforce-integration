<template>
  <div class="nav-bar">
    <div class="icon-container"> 
      <nuxt-link to="/">
          <img :src="'/img/geechsjob_logo.png'">
      </nuxt-link>
    </div>
    <div class="user-options">
      <div class="main-options" :style="'transform:translateX('+(hiddenOption ? '0':'-'+hiddenOptionWidth+'px')+')'">
        <nuxt-link :to="'/auth/login'" @click.native="hiddenOption = true">
          <button type="button" class="add-button green-button btn btn-primary">＋　作業開始</button>
        </nuxt-link>
        <div class="avatar" @click="hiddenOption = !hiddenOption">
          <img :src="'/img/avartar-default.jpg'" ref="engineer-photo" data-toggle="tooltip" data-placement="bottom" :title="salesforceEngineer ? (salesforceEngineer.FirstName+' '+salesforceEngineer.LastName) : ''">
        </div>
      </div>
      <div class="hidden-options" ref="hidden-options" :style="'right:'+(hiddenOption ? '-100%':'0')">
        <button type="button" class="btn btn-secondary btn-sm" @click="logout">Logout</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .nav-bar{
    position: relative;
    height: 60px;
    
    .icon-container{
      position: relative;
      overflow: hidden;
      img{
        margin-left: -50px;
        margin-top: 20px;
        height: 120px;

      }
    }
  }
  .user-options{
    position: absolute;
    right: 0px;
    top: 0px;
    padding: 15px;
    overflow: hidden;

    & *{
      transition: 200ms ease all;
    }

    .add-button{
      font-size: 10px;
      margin-right: 20px;
      width: 150px;
    }

    .hidden-options{
      position: absolute;
      right: -100%;
      top: 0px;
      padding: 15px;
      border-left: 1px solid #cecece;
    }
  }
  .avatar{
    display: inline-block;
    img{
      height: 35px;
      width: 35px;
      border-radius: 50%;
      border: 1px solid gray;
    }
  }
</style>


<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  name: 'Navbar',
  data: () => ({
    hiddenOption: true,
    hiddenOptionWidth: 0,
    salesforceEngineer: {
      FirstName: 'Sample',
      LastName: 'Engineer'
    },
  }),
  // computed: mapGetters({
  //   salesforceEngineer: 'salesforceEngineer'
  // }),
  methods: {
    async logout(){
      await this.$store.dispatch('logout')

      this.$router.push('/auth/login' )
    },
    async fetchContractTest(){
      const {data} = await axios({
        method: 'get',
        url: '/api/user/contract'
      })
    }
  },
  mounted(){
    this.hiddenOptionWidth = jQuery(this.$refs['hidden-options']).outerWidth()
    this.fetchContractTest()

    jQuery(() => {
      jQuery(this.$refs['engineer-photo']).tooltip() 
    })
  }
}
</script>