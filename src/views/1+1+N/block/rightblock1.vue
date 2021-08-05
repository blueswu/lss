<template>
  <div style="width:100%;height:100%">
    <div
      class="block-title-big flex-row align-i"
      style="margin-top:116px;margin-bottom: 20px;"
    >
      <div class="v-line"></div>
      <div class="block-title-txt">专题应用</div>
    </div>

    <div
      class="right-block-title flex-row align-i justify-c-between borderbox cursor-pointer"
      @click="toEventsProject"
    >
      <div class="flex-row align-i">
        <img
          src="../../../assets/images/oneOneN/ic_title_shijianzhuanti.png"
          alt=""
        />
        <span>事件专题</span>
      </div>
      <img src="../../../assets/images/oneOneN/ic_arrow.png" alt="" />
    </div>
    <div class="sjztone flex-row align-i">
      <com-pie
        :datapie="datapie"
        :completionRate="completionRate"
        :completionName="completionName"
        style="width:304px;height:225px"
      ></com-pie>
      <div>
        <div class="shzt-r">
          <span>全年累计案件数</span>
          <span>3,372</span>
        </div>
        <div class="shzt-r">
          <span>当日累计案件数</span>
          <span>3,372</span>
        </div>
        <div class="shzt-r">
          <span>全年累计办结数</span>
          <span>3,372</span>
        </div>
      </div>
    </div>
    <div class="right-block-title flex-row align-i justify-c-between borderbox">
      <div class="flex-row align-i">
        <img src="../../../assets/images/oneOneN/ic_title_huanbao.png" alt="" />
        <span>智慧环保</span>
      </div>
      <img src="../../../assets/images/oneOneN/ic_arrow.png" alt="" />
    </div>
    <div class="zhhbtwo bordertransparent">
      <div class="flex-row align-i justify-c-evenly" style="margin-top: 30px;">
        <div class="zhhb-tqzs flex-column align-i justify-c-evenly">
          <div>优</div>
          <div>天气指数</div>
        </div>
        <div style="text-align: center;">
          <div style="color:#fff;font-size:44px">69</div>
          <div style="font-size:22px">剩余优秀天数</div>
        </div>
        <div style="text-align: center;">
          <div style="color:#fff;font-size:44px">277</div>
          <div style="font-size:22px">本年目标优良天数</div>
        </div>
      </div>
      <div class="flex-row" style="padding:0 30px 40px 30px">
        <com-progressbar
          style="width:360px;height:200px"
          :getmyd="getmyd"
        ></com-progressbar>
        <div
          class="flex-column bordertransparent text-22"
          style="padding-top:26px"
        >
          <div style="margin-bottom:21px" class="flex-row align-i">
            <div style="margin-right:10px;width:140px;" class="text-ellipsis">
              某某停车场...
            </div>
            <span style="color:#3BEA8E">97%</span>
          </div>
        </div>
      </div>
    </div>
    <div class="right-block-title flex-row align-i justify-c-between borderbox">
      <div class="flex-row align-i">
        <img src="../../../assets/images/oneOneN/ic_title_huanwei.png" alt="" />
        <span>智慧环卫</span>
      </div>
      <img src="../../../assets/images/oneOneN/ic_arrow.png" alt="" />
    </div>
    <div class="zhhwthree flex-row align-i">
      <com-pie
        :datapie="datapie2"
        :completionRate="completionRate2"
        :completionName="completionName2"
        style="width:244px;height:225px"
      ></com-pie>
      <div>
        <div class="shzt-r">
          <span>车辆总数</span>
          <span>947</span>
        </div>
        <div class="shzt-r">
          <span>全年作业里程(公里)</span>
          <span>3,872.90.37</span>
        </div>
        <div class="shzt-r">
          <span>每日作业里程(公里)</span>
          <span>3,872</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datapie: [
        { value: 97.2, name: "" },
        { value: 2.8, name: "" },
      ],
      datapie2: [
        { value: 83.7, name: "" },
        { value: 16.3, name: "" },
      ],
      completionRate: "97.2%",
      completionName: "全年累计办结率",
      completionRate2: "83.7%",
      completionName2: "车辆在线率",
      getmyd: [85], //智慧环保
    };
  },
  methods: {
    toEventsProject() {
      this.$router.push({
        name: "EventsProject",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.right-block-title {
  width: 100%;
  height: 38px;
  padding: 0 10px 0 20px;
  box-sizing: border-box;
  font-size: 26px;
  font-weight: 500;
  border-top: 2px solid #0fffea;
  border-bottom: 2px solid #0fffea;
  div img {
    width: 30px;
    height: 24px;
    margin-right: 10px;
    box-sizing: border-box;
  }
  img {
    width: 60px;
    height: 24px;
  }
}
.sjztone {
  width: 100%;
  height: 225px;
}
.zhhbtwo {
  width: 100%;
  height: 345px;
}
.shzt-r {
  font-size: 20px;
  line-height: 44px;
  span:nth-child(1) {
    opacity: 0.88;
    margin-right: 10px;
  }
  span:nth-child(2) {
    font-size: 30px;
    font-weight: 500l;
  }
}
.zhhb-tqzs {
  width: 100px;
  height: 105px;
  background: linear-gradient(
    180deg,
    rgba(89, 168, 255, 0.36) 0%,
    rgba(9, 61, 120, 0.36) 22.92%,
    rgba(9, 61, 120, 0.36) 84.9%,
    rgba(89, 168, 255, 0.36) 100%
  );
  border-radius: 8px;
  div:nth-child(1) {
    font-weight: 500;
    font-size: 34px;
    line-height: 51px;
    color: #ffc85d;
  }
}
</style>
