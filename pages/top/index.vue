<template>
  <div class="chart-container-fluid">
    <h4>User / Project</h4>
    <canvas id="data_graph" height="70%"></canvas>
    <hr>
    <div class="container-fluid">
      <div class="table-responsive" ref="scrollable" style="height:180px;">
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Information</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th style="width: 15%">2018/10/1</th>
            <td style="width: 70%">Some dumb text</td>
            <td style="width: 15%">Checked</td>
          </tr>
          <tr>
            <th style="width: 15%">2018/10/2</th>
            <td style="width: 70%">Some dumb text 2</td>
            <td style="width: 15%">Checked</td>
          </tr>
          <tr>
            <th style="width: 15%">2018/10/3  </th>
            <td style="width: 70%">Some dumb text 3</td>
            <td style="width: 15%">Checked</td>
          </tr>
        </tbody>
        </table>
      </div>
    </div>
    <br>
    <div class="d-flex flex-row-reverse">
      <div class="p-2" id="flexItem">
        <table class="table table-bordered">
          <tbody class="text-right">
            <tr>
              <td>time</td>
              <td>10:00:00</td>
              <td rowspan="2" id="fontSize">Otto</td>
              <td rowspan="2" id="fontSize">@mdo</td>
            </tr>
            <tr>
              <td>time</td>
              <td>5:00:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

</template>

<script>
import Chart from 'chart.js';
import geechsChartData from './data_of_chart.js';

export default {
  middleware: 'authenticated',
  data(){
    return {
      geechsChartData,
    }
  },
  methods: {
    createChart(chartID, chartData){
      const ctx = document.getElementById(chartID).getContext("2d");
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
    }
  },
  mounted(){
    this.createChart('data_graph', this.geechsChartData);
    var $this = this;

    jQuery(function() {
        //The passed argument has to be at least a empty object or a object with your desired options
        jQuery($this.$refs['scrollable']).overlayScrollbars({ 
          className       : "os-theme-dark",
          scrollbars: {
            autoHide : "leave"
          }
        });
    });
  }
}
</script>

<style scoped>
#flexItem{
  width: 70%;
}
#fontSize{
  font-size: 2.5rem;
}
</style>
