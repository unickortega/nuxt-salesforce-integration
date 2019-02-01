<template>
  <div class="container-fluid">
    <div class="row">
      <div>
        <h4 id="title">Manage Allowances</h4>
      </div>
      <div class="col-md-2">
        <select class="form-control form-control-sm">
            <option>Select Term</option>
        </select>
      </div>
      <div class="col-md-2">
        <div class="input-group input-group-sm mb-3">
            <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" id="btn2">Search</button>
            </div>
        </div>
      </div>
      <div class="totalReward">
        <h4 id="reward">Total Rewards<span style="font-size: 1.7rem; margin-left: 13px;">$1,234,567</span></h4>
        <br><hr>
      </div>
    </div>

    
    <div class="container-fluid">
      <div class="table-responsive">
        <table class="table table-sm">
        <thead>
          <tr>
            <th scope="col">Term</th>
            <th scope="col">Outline</th>
            <th scope="col"></th>
            <th scope="col">Fee</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="col1">2018/10/1-2019/10/2</td>
            <td class="col2">Su go i Project A</td>
            <td class="col3">Pikopoko</td>
            <td class="col4">$150,000</td>
            <td class="col5">
                <!-- Button to Open the Modal -->
                <button type="button" class="btn btn-light btnModal">
                Confirm/Download
                </button>              
            </td>
          </tr>
          <tr>
            <td class="col1">2018/10/1-2019/10/2</td>
            <td class="col2">Su go i Project B</td>
            <td class="col3">Pikopoko</td>
            <td class="col4">$224,453</td>
            <td class="col5">
                <button type="button" class="btn btn-light btnModal">
                Confirm/Download
                </button>
            </td>
          </tr>
          <tr>
            <td class="col1">2018/10/1-2019/10/2</td>
            <td class="col2">Su go i Project C</td>
            <td class="col3">Pikopoko</td>
            <td class="col4">$203,444</td>
            <td class="col5">
                <button type="button" class="btn btn-light btnModal">
                Confirm/Download
                </button>
            </td>
          </tr>
        </tbody>
        </table>
      </div>
    </div>
    <!-- The Modal -->
    <div class="modal fade" id="myModal">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header">
                <h5 class="modal-title">Cash Notifaction</h5>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                File here..
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
                <button type="button" class="btn btn-light btnCancel" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary btnDownload" data-dismiss="modal">Download</button>
            </div>
            </div>
        </div>
    </div>  
    <div class="bd-con"></div>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',
  
  mounted(){
      jQuery('.btnModal').on('click', () => {
        jQuery('#myModal').modal('show')
        jQuery('.modal-backdrop').css
        jQuery('.modal-backdrop').appendTo(jQuery(this.$el));
      })
  }
}
</script>

<style lang="css" scoped>
hr{
    /* width: 53%; */
    float: right !important;
    margin-top: 0px;
    width: 308px;
}
.modal{
    z-index: 9999 !important;
}
#title{
  padding-left: 30px;
}
#reward{
  padding-right: 0px;
  float: right !important;
}
.modal-header{
  background-color: #eff3f4;
  padding: 0px;
}
.modal-title{
  margin: auto;
}
.btnDownload{
  background-color: #269F9A !important;
}
.btnCancel{
  border-color: #d1d4d4;
}
.col1{
  width: 20%;
}
.col2{
  width: 60%;
}
.col3{
  width: 10%;
}
.col4{
  width: 10%;
}
.col5{
  width: 10%;
  text-align: right;
}
.totalReward{
  padding-left: 280px !important;
  position: relative;
}
@media screen and (max-width: 600px) {
  .totalReward {
    /* background: red; */
    padding-left: 15px !important;
  }
}
/* @media screen and (min-width: 600px) {
  .totalReward {
    padding-left: 15px !important;
  }
} */
</style>