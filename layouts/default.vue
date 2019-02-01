<template>
  <div>
    <navbar class="navbar"/>
    <div class="main-content">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item">
            <nuxt-link class="nav-link" active-class="active" :to="'/top'">Top</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" active-class="active" :to="'time-management'">Time Management</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" active-class="active" :to="'project-management'">Project Management</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" active-class="active" :to="'allowance-details-management'" >Allowance Details Management</nuxt-link>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <nuxt />
        </div>
    </div>
    <Sidebar class="sidebar"/>
  </div>
</template>

<style lang="scss" scoped>
  .navbar{
    position: absolute;
    width: 100%;
    top: 0px;
  }
  .main-content{
    padding: 15px;
    padding-right: 70px;
    margin-top: 60px;
    position: relative;
    .nav-tabs{
      border-color: #adadad;
      .nav-link{
        border-top-left-radius: 0.9rem;
        border-top-right-radius: 0.9rem;
        color: #8c8c8c;
        font-size: 14px;
        &:hover{
          border-color: #b8bfc1;
        }
        &.active{
          border-color: #adadad #adadad #fff;
          color: inherit;
          background: white;
        }
      }
    }
    .tab-content{
      border: 1px solid #adadad;
      border-top: none;
      padding: 15px;
      background: white;
    }
  }

  .sidebar{
    position: absolute;
    right: 0px;
    top: 115px;
    bottom: 0px;
    width: 70px;
    z-index: 1005;
  }
</style>


<script>
import Child from '@/components/Child'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
export default {
  name: 'default',

  components: {
    Child,
    Navbar,
    Sidebar
  },
  beforeDestroy(){
    $('body').css({'margin-right':'0px'});
  }
}
</script>
