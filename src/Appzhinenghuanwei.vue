<template>
  <div id="app">
    <div class="title">
      <p>郑东新区智慧城市管理中心</p>
      <p>ZHENGDONG NEW AREA SMART CITY MANAGEMENT CENTER</p>
    </div>
    <div id="container" class="container"></div>
    <div class="left">
      <div class="leftCon"></div>
    </div>
    <!-- <div class="center" id="center"></div> -->
    <div class="gps">
         <div class="gpsTop">
             <div class="elBtn">
                  <el-badge :value="12" class="item">
                    <span>GPS报警</span>
                  </el-badge>
             </div>
             <div class="elBtn">
                  <el-badge :value="12" type="primary" class="item">
                    <span>偏离导航</span>
                  </el-badge>
             </div>
            <el-input  placeholder="输入车牌号查询历史轨迹" style="width:520px;height:86px;line-height:86px;"></el-input>
         </div>
         <div class="gpsBottom">

         </div>
    </div>
    <div class="right">
      <div class="rightCon"></div>
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
    return {};
  },
  components: {},
  mounted: function() {
    this.init();
    // this.setCharts(); 
  },
  methods: {
    init: function() {
      const map = new window.AMap.Map("container", {
        resizeEnable: true,
        // showLabel: false, //不显示地图文字标记
        mapStyle: "amap://styles/blue",
        // mapStyle: "amap://styles/grey",
        center: [113.726813, 34.772352], //基点位置
        zoom: 17,
        pitch: 90, // 地图俯仰角度，
        rotation: -65,
        viewMode: "3D", //开启3D视图,默认为关闭
        buildingAnimation: true, //楼块出现是否带动画
        expandZoomRange: true,
        zooms: [3, 20],
      });
      // var trafficLayer = new window.AMap.TileLayer.Traffic({
      //   zIndex: 11,
      // });

      // var roadNetLayer = new window.AMap.TileLayer.RoadNet({
      //   zIndex: 10,
      // });
      // var layerGroup = new window.AMap.LayerGroup([trafficLayer, roadNetLayer]);
      // layerGroup.setMap(map);
      let lnglats = [
        [113.810777, 34.818096],
        [113.822707, 34.810768],
        [113.784598, 34.80816],
        [113.796185, 34.801606],
      ];
      let infoWindow = new window.AMap.InfoWindow({
        offset: new window.AMap.Pixel(0, -30),
      });
      for (let i = 0, marker; i < lnglats.length; i++) {
        let marker = new window.AMap.Marker({
          position: lnglats[i],
          map: map,
        });
        marker.content = "我是第" + (i + 1) + "个Marker";
        marker.on("click", markerClick);
        marker.emit("click", { target: marker });
      }
      function markerClick(e) {
        infoWindow.setContent(e.target.content);
        infoWindow.open(map, e.target.getPosition());
      }
      // map.setFitView();

      var object3Dlayer = new window.AMap.Object3DLayer({
        zIndex: 110,
        opacity: 1,
      });
      map.add(object3Dlayer);

      function lnglatToG20(lnglat) {
        lnglat = map.lngLatToGeodeticCoord(lnglat);
        lnglat.x = window.AMap.Util.format(lnglat.x, 3);
        lnglat.y = window.AMap.Util.format(lnglat.y, 3);
        return lnglat;
      }

      var lines = new window.AMap.Object3D.Line();
      var lineGeo = lines.geometry;

      new window.AMap.DistrictSearch({
        subdistrict: 1, //返回下一级行政区
        extensions: "base",
      }).search("郑州", function(status, result) {
        var provinces = result.districtList[0].districtList;
        var points3D = new window.AMap.Object3D.RoundPoints();
        points3D.transparent = true;
        var pointsGeo = points3D.geometry;
        for (var p = 0; p < provinces.length; p += 1) {
          var center = lnglatToG20(provinces[p].center);
          var size = Math.max(10, Math.round(Math.random() * 40));
          var height = -size * 1000;

          // 连线
          lineGeo.vertices.push(center.x, center.y, 0);
          lineGeo.vertexColors.push(0, 1, 1, 1);
          lineGeo.vertices.push(center.x, center.y, height);
          lineGeo.vertexColors.push(0, 1, 1, 1);

          pointsGeo.vertices.push(center.x, center.y, 0); // 尾部小点
          pointsGeo.pointSizes.push(5);
          pointsGeo.vertexColors.push(0, 0, 1, 1);

          pointsGeo.vertices.push(center.x, center.y, height); // 空中点
          pointsGeo.pointSizes.push(size);
          pointsGeo.vertexColors.push(p * 0.029, p * 0.015, p * 0.01, 1);
        }

        points3D.borderColor = [0.4, 0.8, 1, 1];
        points3D.borderWeight = 3;
        object3Dlayer.add(lines);
        object3Dlayer.add(points3D);
      });
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
  .container {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
  }
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
  .left {
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 1;
    // width: 2384px;
    width: 20%;
    height: 100%;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0)
    );
    .leftCon {
      width: 100%;
      height: 100%;
      background: url(./assets/left.png) no-repeat left top;
      background-size: 100% 100%;
    }
  }
  .gps{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 1;
    width: 844px;
    height: 641px;
    border:2px solid #000;
    color:#fff;
    .gpsTop{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      background: linear-gradient(180deg, #50B5FF 0%, #0075FF 100%);
      opacity: 0.6;
      font-size:24px;
      .elBtn{
        width: 159px;
        height: 86px;
        text-align: center;
        line-height: 86px;
        border-radius: 20px 0px 0px 20px;
      }
      .item {
        margin-top: 0px;
        margin-right: 0px;
        /deep/.is-fixed{
          top:24px !important;
        }
      }
      /deep/.el-input__inner{
        border:none;
        background: transparent !important;
        font-size:24px;
      }
    }
    .gpsBottom{
       width:100%;
       height:525px;
       margin-top:30px;
       background: #000;
    }
  }
  .center {
    position: absolute;
    left: 50%;
    top: 0px;
    z-index: 1;
    width: 300px;
    height: 300px;
  }
  .right {
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 1;
    width: 35%;
    height: 100%;
    background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0)
    );
    .rightCon {
      width: 100%;
      height: 100%;
      background: url(./assets/right.png) no-repeat left top;
      background-size: 100% 100%;
    }
  }
}
</style>
