<template>
	<div class="main">
		<img src="../../assets/images/oneOneN/img_fangkuai_left.png" alt="" class="top-left-img" />
		<img src="../../assets/images/oneOneN/img_logo.png" alt="" class="top-center-img" />
		<img src="../../assets/images/oneOneN/img_fangkuai_right.png" alt="" class="top-right-img" />
		<!-- <div class="left-trans-bg"></div>
		<div class="right-trans-bg"></div> -->
		<!-- <img src="../../assets/images/oneOneN/img_guangdai_right.png" alt="" class="left-trans-bg"> -->
		<!-- <img src="../../assets/images/oneOneN/img_guangdai_right.png" alt="" class="right-trans-bg"> -->
		<!-- 		<div class="title">
			<p>郑东新区智慧城市管理中心</p>
			<p>ZHENGDONG NEW AREA SMART CITY MANAGEMENT CENTER</p>
		</div> -->
		<div class="container-c bordertransparent flex-column align-i"><center-block></center-block></div>
		<div class="left-c">
			<div class="leftCon1 boder">
				<div class="gohome flex-row align-i cursor-pointer" style="margin: 28px 0 0 17px;">
					<img src="../../assets/images/oneOneN/ic_pageback.png" alt="" />
					<span style="margin-left: 16px;font-size: 24px;">返回首页</span>
				</div>
				<div class="block-title-big flex-row align-i">
					<div class="v-line"></div>
					<div class="block-title-txt">郑东新区智慧城市管理中心</div>
				</div>
				<div class="left1-block1">
					<ul>
						<li @click="changeTab('quji')"><div :class="{ 'tab-active': tabchange == 'quji' }">区级</div></li>
						<li @click="changeTab('jiedao')"><div :class="{ 'tab-active': tabchange == 'jiedao' }">街道</div></li>
						<li @click="changeTab('shequ')"><div :class="{ 'tab-active': tabchange == 'shequ' }">社区</div></li>
					</ul>

					<div v-if="tabchange == 'quji'" class="block-quji flex-row align-i justify-c">
						<div class="blick-quji-bg">
							<div class="qj-content flex-row align-i" style="left: 90px;top: 58px;">
								<img src="../../assets/images/oneOneN/ic_quji_zhihuitixi.png" alt="" />
								<span>管委会主任</span>
							</div>
							<div class="qj-content flex-row align-i " style="left:-164px;top: 138px;">
								<img src="../../assets/images/oneOneN/ic_quji_zhihuitixi.png" alt="" />
								<span>管委会副主任</span>
							</div>
							<div class="qj-content flex-row align-i " style="top: 218px;left: -342px">
								<img src="../../assets/images/oneOneN/ic_quji_zhihuitixi.png" alt="" />
								<span>业务负责人</span>
							</div>
							<div class="qj-content flex-row align-i " style="left: -470px;top: 300px;">
								<img src="../../assets/images/oneOneN/ic_quji_zhihuitixi.png" alt="" />
								<span>技术负责人</span>
							</div>
							<div class="qj-content2 flex-row align-i" style="left: 464px;top: -34px">
								<img src="../../assets/images/oneOneN/ic_quji_ruzhubumen.png" alt="" />
								<span>技术负责人</span>
								<span>23席位</span>
							</div>
							<div class="qj-content2 flex-row align-i" style="left:282px;top:44px">
								<img src="../../assets/images/oneOneN/ic_quji_ruzhubumen.png" alt="" />
								<span>市长热线</span>
								<span>5席位</span>
							</div>

							<div class="qj-content2 flex-row align-i" style="left:88px;top:130px">
								<img src="../../assets/images/oneOneN/ic_quji_ruzhubumen.png" alt="" />
								<span>应急中心</span>
								<span>3席位</span>
							</div>

							<div class="qj-content2 flex-row align-i" style="left:550px;top:166px">
								<img src="../../assets/images/oneOneN/ic_quji_ruzhubumen.png" alt="" />
								<span>综治办</span>
								<span>6席位</span>
							</div>

							<div class="qj-content2 flex-row align-i" style="left:266px;top:246px">
								<img src="../../assets/images/oneOneN/ic_quji_ruzhubumen.png" alt="" />
								<span>... ...</span>
								<span>... ...</span>
							</div>
						</div>
					</div>
					<div v-else-if="tabchange == 'jiedao'" class="block-jiedao flex-column align-i justify-c">
						<div class="block-jiedao-bg">
							<div class="shequ-title-bg" style="">
								<span>办事处</span>
								<span>12家</span>
							</div>
							<div style="width: 100%;height: 170px;padding-left: 20px;flex-wrap: wrap;" class="flex-row borderbox">
								<div class="every-shequ flex-row align-i" v-for="(item, index) in jiedaoList1" :key="index">
									<div class="empty-circle"></div>
									<span>{{ item.name }}</span>
								</div>
							</div>
						</div>
						<div class="block-jiedao-bg" style="margin-top: 36px;">
							<div class="shequ-title-bg2" style="">
								<span>责任单位</span>
								<span>19家</span>
							</div>
							<div style="width: 100%;height: 170px;padding-left: 20px;flex-wrap: wrap;" class="flex-row borderbox">
								<div class="every-shequ2 flex-row align-i" v-for="(item, index) in jiedaoList2" :key="index">
									<div class="empty-circle"></div>
									<span>{{ item.name }}</span>
								</div>
							</div>
						</div>
					</div>
					<div v-else-if="tabchange == 'shequ'" class="flex-row align-i justify-c">
						<div class="block-shequ-bg">
							<div class="shequ-title-bg" style="">
								<span>社区</span>
								<span>125个</span>
							</div>
							<!-- <img src="../../assets/images/oneOneN/ic_jiaobiao_banshichu.png" alt="" /> -->
							<div style="width: 100%;height: 450px;padding-left: 20px;flex-wrap: wrap;" class="flex-row borderbox">
								<div class="every-shequ flex-row align-i" v-for="(item, index) in shequList" :key="index">
									<div class="empty-circle"></div>
									<span>{{ item.name }}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="left1-block2">
					<div class="block-title flex-row align-i" style="margin-top: 44px;">
						<img src="../../assets/images/oneOneN/ic_title_zhongxin.png" alt="" />
						<span>中心定位</span>
					</div>
					<div class="center-locaction align-i">
						<div class="center-l-img1"><span>数据融合</span></div>
						<div class="center-l-img2"><span>分析决策</span></div>
						<div class="center-l-img3"><span>指挥调度</span></div>
						<div class="center-l-img4"><span>监督考核</span></div>
						<div class="center-l-img5"><span>展示汇报</span></div>
					</div>
				</div>
			</div>
			<div class="leftCon2 boder"><left-block2></left-block2></div>
		</div>
		<!-- <div class="center-c" id="center"></div> -->
		<div class="right-c">
			<div class="rightCont1 "><right-block1></right-block1></div>
			<div class="rightCont2 "><right-block2></right-block2></div>
			<div class="rightCont3 "><right-block3></right-block3></div>
		</div>
	</div>
</template>

<script>
import leftBlock2 from './block/leftblock2';
import rightBlock1 from './block/rightblock1';
import rightBlock2 from './block/rightblock2';
import rightBlock3 from './block/rightblock3';
import centerBlock from './block/centerblock';
export default {
	components: {
		leftBlock2,
		rightBlock1,
		rightBlock2,
		rightBlock3,
		centerBlock
	},
	data() {
		return {
			tabchange: 'quji',
			jiedaoList1: [
				{ name: '祭城路办事处' },
				{ name: '龙子湖办事处' },
				{ name: '如意湖办事处' },
				{ name: '龙源办事处' },
				{ name: '商都路办事处' },
				{ name: '博学路办事处' },
				{ name: '金光办事处' },
				{ name: '白沙镇' },
				{ name: '豫兴路办事处' },
				{ name: '杨桥办事处' },
				{ name: '龙湖办事处' },
				{ name: '莆田乡' }
			],
			jiedaoList2: [
				{ name: '东站办' },
				{ name: '市政科' },
				{ name: '水务局' },
				{ name: '环保局' },
				{ name: '执法局' },
				{ name: '绿化科' },
				{ name: '环卫科' },
				{ name: '郑汴建投' },
				{ name: '郑东建投' },
				{ name: '物流港' },
				{ name: '郑新建投' },
				{ name: '东龙控股' },
				{ name: '信访办' },
				{ name: '城考办' },
				{ name: '… …' }
			],
			shequList: [
				{ name: '庙张社区' },
				{ name: '心怡路社区' },
				{ name: '中兴路社区' },
				{ name: '陈岗社区' },
				{ name: '姚桥社区' },
				{ name: '金庄社区' },
				{ name: '正光街社区' },
				{ name: '正光街社区' },
				{ name: '正光街社区' },
				{ name: '祥盛街社区' },
				{ name: '心怡路社区' },
				{ name: '庙张社区' },
				{ name: '庙张社区' },
				{ name: '心怡路社区' },
				{ name: '金庄社区' },
				{ name: '陈岗社区' },
				{ name: '庙张社区' },
				{ name: '心怡路社区' },
				{ name: '中兴路社区' },
				{ name: '陈岗社区' },
				{ name: '姚桥社区' },
				{ name: '金庄社区' },
				{ name: '正光街社区' },
				{ name: '正光街社区' },
				{ name: '正光街社区' },
				{ name: '祥盛街社区' },
				{ name: '心怡路社区' },
				{ name: '庙张社区' },
				{ name: '庙张社区' },
				{ name: '心怡路社区' },
				{ name: '金庄社区' },
				{ name: '陈岗社区' }
			]
		};
	},
	methods: {
		changeTab(a) {
			this.tabchange = a;
		}
	}
};
</script>

<style lang="less" scoped>
html,
body {
	// width: 100%;
	// height: 100%;
	width: 5760px;
	height: 1080px;
	padding: 0;
	margin: 0;
	overflow: auto;
}
.main {
	position: relative;
	// width: 100%;
	// height: 100%;
	width: 5760px;
	height: 1080px;
	background: #00155a;
	// background: rgba(0,21,90, 0.8);
	color: #cee8ff;
	// padding: 0 60px 0 49px;
	.container-c {
		// position: absolute;
		// left: 0;
		// top: 0;
		// z-index: 0;
		// width: 100%;
		// height: 100%;
		height: 1080px;
		margin-left: 1779px;
		width: calc(100% - 3558px);
		background: url(../../assets/images/oneOneN/img_city.png) no-repeat bottom center;
		background-size: 1546px 760px;
		background-position: center bottom;
		// margin-right: 1730px;
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
	.left-c {
		position: absolute;
		left: 50px;
		top: 0;
		// width: 2384px;
		// width: 30%;
		width: 1730px;
		height: 100%;
		background: url(../../assets/images/oneOneN/img_xingdain_left.png) no-repeat left top;
		background-size: 100% 100%;
		// background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
		// .leftCon {
		//   width: 100%;
		//   height: 100%;
		//   background: url(./assets/left.png) no-repeat left top;
		//   background-size: 100% 100%;
		// }
		.leftCon1 {
			position: absolute;
			width: 829px;
			height: 1080px;
			top: 0px;
			background-color: rgba(3, 3, 3, 0.2);
			// background: #030303;
			// opacity: 0.2;
		}
		.leftCon2 {
			position: absolute;
			width: 860px;
			height: 1080px;
			left: 871px;
			top: 0px;
			background-color: rgba(3, 3, 3, 0.2);
			overflow: hidden;
			// background: #030303;
			// opacity: 0.2;
		}
	}
	.center-c {
		position: absolute;
		left: 50%;
		top: 0px;
		z-index: 1;
		width: 300px;
		height: 300px;
	}
	.right-c {
		position: absolute;
		right: 50px;
		top: 0px;
		z-index: 1;
		width: 1730px;
		height: 100%;
		background: url(../../assets/images/oneOneN/img_xingdian_right.png) no-repeat left top;
		background-size: 100% 100%;
		// background-image: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
	}
}
.gohome img {
	width: 48px;
	height: 48px;
}
.left1-block1 ul {
	display: flex;
	li {
		list-style: none;
		font-size: 22px;
		cursor: pointer;
		div {
			width: 104px;

			text-align: center;
			line-height: 36px;
		}
		.tab-active {
			border-bottom: 2px solid;
			border-image: -webkit-linear-gradient(180deg, #50b5ff 0%, #0075ff 100%) 1 10 1; /* 控制边框颜色渐变 */
			border-image: -moz-linear-gradient(180deg, #50b5ff 0%, #0075ff 100%) 1 10 1;
			border-image: linear-gradient(180deg, #50b5ff 0%, #0075ff 100%) 1 10 1; /* 标准的必须写在最后 */
			// background: linear-gradient(180deg, #50B5FF 0%, #0075FF 100%);
		}
	}
}
.block-quji {
	width: 777px;
	height: 506px;
	.blick-quji-bg {
		width: 777px;
		height: 400px;
		background: url(../../assets/images/oneOneN/img_qujizuzhi.png) no-repeat left top;
		background-size: 100% 100%;
		.qj-content {
			height: 48px;
			line-height: 28px;
			// padding:13px;
			border-radius: 36px;
			border: 2px solid #50b5ff;
			box-sizing: border-box;
			font-size: 22px;
			position: relative;
			display: inline-block;
			white-space: nowrap;
			padding: 8px 12px;
		}
		.qj-content2 {
			height: 48px;
			line-height: 24px;
			// padding:13px;
			border-radius: 36px;
			border: 4px solid #0fffea;
			box-sizing: border-box;
			font-size: 22px;
			position: relative;
			display: inline-block;
			white-space: nowrap;
			padding: 8px 12px;
		}
		.qj-content2 span:nth-child(2) {
			color: #0fffea !important;
			margin-right: 8px;
		}
		.qj-content2 span:nth-child(3) {
			color: #ffc85d !important;
		}
	}

	.blick-quji-bg img {
		width: 28px;
		height: 28px;
		vertical-align: top;
		margin-right: 8px;
	}
}
.block-shequ-bg {
	width: 775px;
	height: 506px;
	background: linear-gradient(180deg, rgba(89, 168, 255, 0.36) 0%, rgba(9, 61, 120, 0.36) 22.92%, rgba(9, 61, 120, 0.36) 84.9%, rgba(89, 168, 255, 0.36) 100%);
	border-radius: 20px 8px 8px 8px;
}
.shequ-title-bg {
	width: 180px;
	height: 54px;
	background: url(../../assets/images/oneOneN/ic_jiaobiao_banshichu.png) no-repeat left top;
	background-size: 100% 100%;
	span {
		font-size: 22px;
		color: #004e25;
		font-weight: bold;
		line-height: 56px;
		margin-left: 20px;
	}
}
.shequ-title-bg2 {
	width: 200px;
	height: 54px;
	background: url(../../assets/images/oneOneN/ic_jiaobiao_zerendanwei.png) no-repeat left top;
	background-size: 100% 100%;
	span {
		font-size: 22px;
		color: #004e25;
		font-weight: bold;
		line-height: 56px;
		margin-left: 20px;
	}
}
.every-shequ {
	width: 25%;
	font-size: 22px;
	white-space: nowrap;
	.empty-circle {
		width: 15px;
		height: 12px;
		border: 2px solid #3bea8e;
		box-sizing: border-box;
		border-radius: 100px;
		margin-right: 10px;
	}
}
.every-shequ2 {
	width: 20%;
	font-size: 22px;
	white-space: nowrap;
	.empty-circle {
		width: 15px;
		height: 12px;
		border: 2px solid #3bea8e;
		box-sizing: border-box;
		border-radius: 100px;
		margin-right: 10px;
	}
}
.block-jiedao-bg {
	width: 775px;
	height: 235px;
	background: linear-gradient(180deg, rgba(89, 168, 255, 0.36) 0%, rgba(9, 61, 120, 0.36) 22.92%, rgba(9, 61, 120, 0.36) 84.9%, rgba(89, 168, 255, 0.36) 100%);
	border-radius: 20px 8px 8px 8px;
}
.block-title {
	margin-left: 34px;
	img {
		width: 30px;
		height: 24px;
		margin-right: 10px;
	}
	span {
		font-size: 26px;
	}
}
.center-locaction {
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 40px;
	box-sizing: border-box;
	div {
		width: 120px;
		height: 160px;
		text-align: center;
	}
	span {
		position: relative;
		white-space: nowrap;
		top: 125px;
	}
	.center-l-img1 {
		background: url(../../assets/images/oneOneN/ic_zhongxin_shuju.png) no-repeat left top;
		background-size: 100% 100%;
	}
	.center-l-img2 {
		background: url(../../assets/images/oneOneN/ic_zhongxin_fenxi.png) no-repeat left top;
		background-size: 100% 100%;
	}
	.center-l-img3 {
		background: url(../../assets/images/oneOneN/ic_zhongxin_diaodu.png) no-repeat left top;
		background-size: 100% 100%;
	}
	.center-l-img4 {
		background: url(../../assets/images/oneOneN/ic_zhongxin_jiandu.png) no-repeat left top;
		background-size: 100% 100%;
	}
	.center-l-img5 {
		background: url(../../assets/images/oneOneN/ic_zhongxin_zhanshi.png) no-repeat left top;
		background-size: 100% 100%;
	}
}
.rightCont1 {
	position: absolute;
	width: 608px;
	height: 1080px;
	right: 1122px;
	top: 0px;
	background-color: rgba(3, 3, 3, 0.2);
	overflow: hidden;
}
.rightCont2 {
	position: absolute;
	width: 560px;
	height: 1080px;
	right: 532px;
	top: 0px;
	background-color: rgba(3, 3, 3, 0.2);
	overflow: hidden;
}
.rightCont3 {
	position: absolute;
	width: 502px;
	height: 1080px;
	right: 0px;
	top: 0px;
	background-color: rgba(3, 3, 3, 0.2);
	overflow: hidden;
}
.top-left-img {
	width: 2048px;
	height: 315px;
	position: absolute;
	left: 0;
	top: 0;
	mix-blend-mode: overlay;
	opacity: 0.8;
}
.top-center-img {
	width: 3478px;
	height: 94px;
	position: absolute;
	left: 50%;
	top: 0;
	transform: translate(-50%, 0);
}
.top-right-img {
	width: 2048px;
	height: 315px;
	position: absolute;
	right: 0;
	top: 0;
	mix-blend-mode: overlay;
	opacity: 0.8;
}
.bottom-center-img {
	width: 1546px;
	height: 760px;
	left: 50%;
	top: 0;
	transform: translate(-50%, 0);
	mix-blend-mode: normal;
}
.right-trans-bg {
	position: absolute;
	right: -100px;
	top: -397px;
	width: 2553px;
	height: 1436px;
	background: url(../../assets/images/oneOneN/img_guangdai_right.png) no-repeat left top;
	background-size: 100% 100%;
	mix-blend-mode: color-dodge;
	opacity: 0.4;
	opacity: 0.4;
	transform: rotate(-10deg);
}
</style>
