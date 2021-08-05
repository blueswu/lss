<template>
	<div style="width:100%;height:100%">
		<div class="right-block-title flex-row align-i justify-c-between borderbox" style="margin-top: 176px;">
			<div class="flex-row align-i">
				<img src="../../../assets/images/oneOneN/ic_title_gongce.png" alt="" />
				<span>智慧公厕</span>
			</div>
			<img src="../../../assets/images/oneOneN/ic_arrow.png" alt="" />
		</div>
		<div class="sjztone bordertransparent">
			<div class="flex-row align-i justify-c-evenly" style="margin-top: 55px;">
				<div class="zhhb-tqzs flex-column align-i justify-c-evenly">
					<div>455</div>
					<div>公厕总数</div>
				</div>
				<div style="text-align: center;">
					<div style="color:#fff;font-size:44px">69</div>
					<div style="font-size:22px">已提升数</div>
				</div>
				<div style="text-align: center;">
					<div style="color:#fff;font-size:44px">277</div>
					<div style="font-size:22px">客流量总数</div>
				</div>
			</div>
		</div>
		<div class="right-block-title flex-row align-i justify-c-between borderbox">
			<div class="flex-row align-i">
				<img src="../../../assets/images/oneOneN/ic_title_tingche.png" alt="" />
				<span>智慧停车</span>
			</div>
			<img src="../../../assets/images/oneOneN/ic_arrow.png" alt="" />
		</div>
		<div class="zhhbtwo bordertransparent" style="padding: 20px 30px 40px 30px">
			<div class="flex-row align-i justify-c-between">
				<div class="qj-content flex-row align-i">
					<span style="margin-right: 6px;">停车场总数</span>
					<span class="text-26">69</span>
				</div>
				<div class="qj-content flex-row align-i">
					<span style="margin-right: 6px;">空余车位数量</span>
					<span class="text-26">277</span>
				</div>
			</div>
			<div class="zhtc-cont">
				<img src="../../../assets/images/oneOneN/ic_tingche_zhouzhuanlv.png" alt="">
			<span>停车场周转率TOP3</span>
			</div>
			<div class="flex-row">
				<com-progressbar style="width:230px;height:200px" :getmyd="getmyd"></com-progressbar>
				<div class="flex-column bordertransparent text-22" style="padding-top:26px">
					<div style="margin-bottom:21px" class="flex-row align-i"><div style="margin-right:10px;width:140px;" class="text-ellipsis">某某停车场...</div><span style="color:#3BEA8E">97%</span></div>
					<div style="margin-bottom:21px" class="flex-row align-i"><div style="margin-right:10px;width:140px;" class="text-ellipsis">某某停车场...</div><span style="color:#FAD961">86%</span></div>
					<div  class="flex-row align-i"><div style="margin-right:10px;width:140px;" class="text-ellipsis">某某停车场...</div><span style="color:#0FFFEA">80%</span></div>
				</div>
			</div>
			
		</div>
		<div class="right-block-title flex-row align-i justify-c-between borderbox">
			<div class="flex-row align-i">
				<img src="../../../assets/images/oneOneN/ic_title_5G.png" alt="" />
				<span>5G创新应用</span>
			</div>
			<img src="../../../assets/images/oneOneN/ic_arrow.png" alt="" />
		</div>
		<div class="zhhwthree bordertransparent" style="padding: 20px 30px 40px 60px">
			<div class="flex-row align-i justify-c-between" style="flex-wrap: wrap;">
				<div class="flex-row align-i" style="width:200px;margin-bottom: 18px;">
					<div class="elliptic-point"></div>
					<div class="text-22" style="margin-right: 10px;">5G无人驾驶</div>
				</div>
				<div class="flex-row align-i" style="width:200px;margin-bottom: 18px;">
					<div class="elliptic-point"></div>
					<div class="text-22" style="margin-right: 10px;">5G无人环卫车</div>
				</div>
				<div class="flex-row align-i" style="width:200px;margin-bottom: 18px;">
					<div class="elliptic-point"></div>
					<div class="text-22" style="margin-right: 10px;">5G机器人</div>
				</div>
				<div class="flex-row align-i" style="width:200px">
					<div class="elliptic-point"></div>
					<div class="text-22" style="margin-right: 10px;">5G无人机巡航</div>
				</div>
					<div class="flex-row align-i" style="width:200px">
					<div class="elliptic-point"></div>
					<div class="text-22" style="margin-right: 10px;">5G无人船</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				getmyd:[97,86,80], //智慧停车
				
			}
		}
	}
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
.zhhb-tqzs {
	width: 100px;
	height: 105px;
	background: linear-gradient(180deg, rgba(89, 168, 255, 0.36) 0%, rgba(9, 61, 120, 0.36) 22.92%, rgba(9, 61, 120, 0.36) 84.9%, rgba(89, 168, 255, 0.36) 100%);
	border-radius: 8px;
	div:nth-child(1) {
		font-weight: 500;
		font-size: 34px;
		line-height: 51px;
		color: #ffc85d;
	}
}
.qj-content {
	height: 59px;
	line-height: 38px;
	// padding:13px;
	border-radius: 60px;
	border: 2px solid #50b5ff;
	box-sizing: border-box;
	font-size: 22px;
	position: relative;
	display: inline-block;
	white-space: nowrap;
	padding: 8px 16px;
	background: linear-gradient(180deg, rgba(80, 181, 255, 0.24) 0%, rgba(0, 117, 255, 0.24) 100%);
}
.zhtc-cont{
	font-size: 22px;
	color:#0FFFEA;
margin-top: 35px;
	img{
		width: 24px;
		height: 24px;
		margin-right: 10px;
		vertical-align: middle;
	}
}
</style>
