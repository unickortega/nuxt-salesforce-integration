<template>
  <div class="main-container">
    <div class="sidebar">
      <ul class="sidebar-options" id="sidebarContainer">
        <li class="option-item" id="item1" v-on:click="userFunction">
          <img :src="'/img/user.svg'" alt="">
        </li>
        <li class="option-item" id="item2"  v-on:click="pageFunction">
          <img :src="'/img/papers.svg'" alt="">
        </li>
        <li class="option-item" id="item3"  v-on:click="resumeFunction">
          <img :src="'/img/certificate.svg'" alt="">
        </li>
        <li class="option-item" id="item4"  v-on:click="notifFunction">
          <img :src="'/img/bell.svg'" alt="">
        </li>
      </ul>
    </div>
     <div id="sidebarInfoContainer">
        <div class="sidebar-content hidden" id="sidebarContent">
            <div class="sidebar-content-info" style="padding: 15px;">
              <table class="table table-sm">
                <tr>06759878</tr>
                <tr>Job Id</tr>
                <tr>NexSeed</tr>
                <tr>Company Name</tr>
                <tr>Cebu Business Park FLB, Cebu City</tr>
                <tr><a href="#">Details</a></tr>
                <tr></tr>
                <tr></tr>
                <tr style="text-align: center;">Didn't answer the questionnaire yet?</tr>
                <tr style="float: right;"><a href="">Answer</a></tr>
                <tr></tr>
                <tr></tr>
                <tr style="text-align: right;"><a href="">Edit Information</a></tr>
              </table>
              <!-- <span id="info">06759878</span><br>
              <span id="info">Job Id</span><br>
              <span id="info">NexSeed</span><br>
              <span id="info">Company Name</span><br>
              <span id="info">Cebu Business Park FLB, Cebu City</span><br>
              <a href="#" id="info">Details</a>
              <br>
              <span style="text-align: center">Didn't answer the questionnaire yet?</span><br>
              <span style="float: right">Answer</span><br>
              <span style="float: right">Edit Information</span> -->
            </div>
        </div>
        <div class="sidebar-content hidden" id="sidebarContent2">
            <div class="sidebar-content-info" style="padding:15px;">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th colspan="2" style="border:none;">自動販売機自動販売機</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="border:none;">自動車自動車</td>
                    <td style="border:none;">動物</td>
                  </tr>
                  <tr>
                    <td style="border:none;">自動車自動車</td>
                    <td style="border:none;">動物</td>
                  </tr>
                  <tr>
                    <td style="border:none;">自動車自動車</td>
                    <td style="border:none;">動物</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
        <div class="sidebar-content hidden" id="sidebarContent3">
            <div class="sidebar-content-info" style="padding:15px;">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th colspan="2" style="border:none;">動物園</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="2" style="border:none;">どうぶつえん : 2018/12/13</td>
                  </tr>
                  <tr>
                    <td style="border:none;">研究者-1.1</td>
                    <td style="border:none;">
                      <!-- <b-btn v-b-modal.modal1 class="btn btn-sm btn-outline-dark" style="border:none;">地図</b-btn>
                      <b-modal id="modal1" title="Some Document">
                        <p class="my-4">Some Document goes here!</p>
                      </b-modal> -->
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" style="border:none; padding-top: 5px;">
                      <button class="btn btn-sm btn-primary float-right px-4" type="button" name="button" style="border-radius: 0.4rem; line-height: 1.2;">としょかん</button>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" style="border:none; padding-top: 5px;">
                      <p class="float-right">ようふくとうきょう</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
        <div class="sidebar-content hidden" id="sidebarContent4">
            <div class="sidebar-content-info"><p>This is side bar notifications section.</p></div>
        </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
  .sidebar{
    .sidebar-options{
      list-style: none;
      padding: 0px;

      .option-item{
        padding: 15px;
        text-align: center;
        img{
          height: 40px;
        }
      }
    }
  }

  .sidebar-content{
    position: absolute;
    /* right:0px; */
    right: 70px;
    top: 0px;
    // bottom: 0px;
    background: #eff3f4;
    height: 100%;
    width: 250px;
    display: none;
    border: none;
    // border-bottom: none;
}
.sidebar-content-info{
    position: absolute;;
    /* right:100px; if fixed*/
    /* top: 90px; */
    right: 0px;
    top: 0px;
    background: white;
    height: 282px;
    width: 240px;
    /* display: none; */
    border: 1px solid;
    border-color: #d1d4d4;
    border-right: none;

}
.active{
    background-color: white;
    border: 1px solid;
    border-color: #d1d4d4 !important;
    border-left: none;
}
.sidebar-options .option-item{
    cursor: pointer;
}
tr{
  margin-bottom: 0px;
  padding: 0px;
  font-size: 15px;
}
</style>

<script>
import $ from 'jquery'
export default {
  name: 'Navbar',
  data: () => ({
    //
  }),
  methods:{
        userFunction: function(){
            var x = document.getElementById("sidebarContent");
            if (x.style.display !== "block") {
                $('#sidebarInfoContainer .sidebar-content').hide()
                x.style.display = "block";
                $('.option-item').css({'border':'1px solid','border-top': 'none', 'border-right': 'none', 'border-bottom': 'none', 'background-color': '#eff3f4', 'border-color': '#d1d4d4'});
                $('#item1').css({'border':'1px solid', 'border-left': 'none', 'background-color': 'white', 'border-color': '#d1d4d4'});
                $('body').css({'margin-right':'250px'});
            } else {
                x.style.display = "none";
                $('.option-item').css({'border': 'none', 'background-color': '#eff3f4'});
                $('body').css({'margin-right':'0px'});
            }
        },
        pageFunction: function(){
            var x = document.getElementById("sidebarContent2");
            if (x.style.display !== "block") {
                $('#sidebarInfoContainer .sidebar-content').hide()
                x.style.display = "block";
                $('.option-item').css({'border':'1px solid','border-top': 'none', 'border-right': 'none', 'border-bottom': 'none', 'background-color': '#eff3f4', 'border-color': '#d1d4d4'});
                $('#item2').css({'border':'1px solid', 'border-left': 'none', 'background-color': 'white', 'border-color': '#d1d4d4'});
                $('body').css({'margin-right':'250px'});
            } else {
                x.style.display = "none";
                $('.option-item').css({'border': 'none', 'background-color': '#eff3f4'});
                $('body').css({'margin-right':'0px'});
            }
        },
        resumeFunction: function(){
            var x = document.getElementById("sidebarContent3");
            if (x.style.display !== "block") {
                $('#sidebarInfoContainer .sidebar-content').hide()
                x.style.display = "block";
                $('.option-item').css({'border':'1px solid','border-top': 'none', 'border-right': 'none', 'border-bottom': 'none', 'background-color': '#eff3f4', 'border-color': '#d1d4d4'});
                $('#item3').css({'border':'1px solid', 'border-left': 'none', 'background-color': 'white', 'border-color': '#d1d4d4'});
                $('body').css({'margin-right':'250px'});
            } else {
                x.style.display = "none";
                $('.option-item').css({'border': 'none', 'background-color': '#eff3f4'});
                $('body').css({'margin-right':'0px'});
            }
        },
        notifFunction: function(){
            var x = document.getElementById("sidebarContent4");
            if (x.style.display !== "block") {
                $('#sidebarInfoContainer .sidebar-content').hide()
                x.style.display = "block";
                $('.option-item').css({'border':'1px solid','border-top': 'none', 'border-right': 'none', 'border-bottom': 'none', 'background-color': '#eff3f4', 'border-color': '#d1d4d4'});
                $('#item4').css({'border':'1px solid', 'border-left': 'none', 'background-color': 'white', 'border-color': '#d1d4d4'});
                $('body').css({'margin-right':'250px'});
            } else {
                x.style.display = "none";
                $('.option-item').css({'border': 'none', 'background-color': '#eff3f4'});
                $('body').css({'margin-right':'0px'});
            }
        }
    },
  mounted(){
  },
}

</script>
