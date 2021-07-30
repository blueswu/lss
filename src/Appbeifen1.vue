<template>
  <div id="app">
    <div class="title">
      <p>郑东新区智慧城市管理中心</p>
      <p>ZHENGDONG NEW AREA SMART CITY MANAGEMENT CENTER</p>
    </div>
    <div class="left1">
      <div class="leftCon">
        <h3>郑东新区智慧城市管理中心</h3>
            <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="区级" name="first">
              <div class="wrapper">
                  1
              </div>
          </el-tab-pane>
          <el-tab-pane label="街道" name="second">
             <div class="wrapper">
                1111111
              </div>
          </el-tab-pane>
          <el-tab-pane label="社区" name="third">
              <div class="wrapper">
                22222
              </div>
          </el-tab-pane>
        </el-tabs>
        <div class="centerPositionContainer">
          <h3>
            中心定位
          </h3>
          <div class="centerPosition">
            <div class="item">
                   
            </div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
          </div>
        </div>
      

      </div>
    </div>
    <div class="left2">
      <div class="left2Con">
        <div class="businessSwich">
          <h3>
             业务流转
          </h3>
          <div>
             222222 
          </div>
        </div>
        <div class="businessSwich">
          <h3>
             业务架构
          </h3>
          <div>
             222222 
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
    <div class="center" id="center"></div>
    <div class="right1">
      <div class="rightCon"></div>
    </div>
    <div class="right2">
      <div class="rightCon"></div>
    </div>
    <div class="right3">
      <div class="rightCon">
        <div>
            专题应用
        </div>
        <div class="top1">
           <div class="title">
             <div>
                <img src="./assets/icon.png"/>
                 事件分析专题
             </div>
             <img src="./assets/icon.png"/>

           </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// echarts相关
let echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/bar');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/toolbox');
require('echarts/lib/component/legend');
require('echarts/lib/component/markLine');
export default {
  name: "App",
  data() {
    return {
      activeName: 'first'
    };
  },
  components: {},
  mounted: function() {
    // this.setCharts(); 
  },
  methods: {
    handleClick(){

    },
    setCharts() {
      // 基于准备好的dom，初始化echarts图表
      let myChart = echarts.init(document.getElementById('center'))
      //  let myChart = this.$echarts.init(document.getElementById('main'));
      let option = {
        title: {
          text: "未来一周气温变化",
          subtext: "纯属虚构",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["最高气温", "最低气温"],
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              formatter: "{value} °C",
            },
          },
        ],
        series: [
          {
            name: "最高气温",
            type: "line",
            data: [11, 11, 15, 13, 12, 13, 10],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" },
              ],
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }],
            },
          },
          {
            name: "最低气温",
            type: "line",
            data: [1, -2, 2, 5, 3, 2, 0],
            markPoint: {
              data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }],
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }],
            },
          },
        ],
      };

      // 为echarts对象加载数据
      myChart.setOption(option);
    },
  },
};
</script>

<style lang="less" scoped>
/deep/.amap-info-content {
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
}
/deep/.amap-info-sharp {
  border-top: 8px solid rgba(0, 0, 0, 0.5);
}
html,
body {
  // width: 100%;
  // height: 100%;
  width:5760px;
  height:1080px;
  padding: 0;
  margin: 0;
  overflow: auto;
}
#app {
  position: relative;
  // width: 100%;
  // height: 100%;
  width:5760px;
  height:1080px;
  .title {
    position: absolute;
    left: 50%;
    top: 10px;
    text-align: center;
    z-index: 1;
    transform: translate(-50%, 0);
    p {
      color: #fff;
    }
    p:nth-child(1) {
      font-size: 36px;
      margin: 0;
    }
    p:nth-child(2) {
      font-size: 14px;
      margin-top: 10px;
    }
  }
  .left1 {
    position: absolute;
    left: 40px;
    top: 0px;
    z-index: 1;
    // width: 2384px;
    width: 834px;
    height: 100%;
    border:2px solid #000;
    .leftCon {
      width: 100%;
      height: 100%;
      .wrapper{
        width:822px;
        height:548px;
      }
      .centerPositionContainer{
        width:100%;
        height:245px;
          .centerPosition{
            width:100%;
            height:245px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            .item{
              width:122px;
              height:156px;
              border:3px solid #2fa9ff;
            }
          }
      }
      
    }
  }
  .left2{
    position: absolute;
    left: 914px;
    top: 0px;
    z-index: 1;
    // width: 2384px;
    width: 834px;
    height: 100%;
    border:2px solid #000;
    .left2Con {
      width: 100%;
      height: 100%;
      padding-top:170px;
      box-sizing: border-box;
      .businessSwich{
        width:100%;
        height:349px;
        border:3px solid #000;
      }

    }
  }

  .center {
    position: absolute;
    left: 50%;
    top: 0px;
    margin-left:-1095px;
    z-index: 1;
    width: 2190px;
    height: 974px;
    border:3px solid #000;
  }
  .right1 {
    position: absolute;
    right: 60px;
    top: 0px;
    z-index: 1;
    width: 497px;
    height: 100%;
    border:2px solid #000;
    .rightCon {
      width: 100%;
      height: 100%;
    }
  }
    .right2 {
    position: absolute;
    right: 591px;
    top: 0px;
    z-index: 1;
    width: 558px;
    height: 100%;
    border:2px solid #000;
    .rightCon {
      width: 100%;
      height: 100%;
    }
  }
    .right3 {
    position: absolute;
    right: 1183px;
    top: 0px;
    z-index: 1;
    width: 597px;
    height: 100%;
    border:2px solid #000;
    .rightCon {
      width: 100%;
      height: 100%;
      position: relative;
      .top1{
        .title{
          overflow: hidden;
          height:37px;
          width:100%;
          border-top:2px solid #000;
          border-bottom:2px solid #000;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          img{
            vertical-align: middle;
          }
        }
      }
    }
  }
}
</style>
