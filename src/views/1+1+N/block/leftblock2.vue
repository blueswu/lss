<template>
	<div style="width:100%;height:100%;">
		<div class="block-liuzhuan" style="margin-top:172px">
			<div class="block-title flex-row align-i">
				<img src="../../../assets/images/oneOneN/ic_title_yewuliuzhuan.png" alt="" />
				<span>中心定位</span>
			</div>
			<div class="flex-row align-i justify-c" style="margin-top: 14px;">
				<div class="block-lz-bg flex-row borderbox align-i" style="padding:20px">
					<div class="flex-column  justify-c-between">
						<div class="lz-greenbox" style="margin-bottom:24px">市级流转</div>
						<div class="lz-greenbox" style="margin-bottom:24px">物联上报</div>
						<div class="lz-greenbox">人员采集</div>
					</div>
					<img src="../../../assets/images/oneOneN/img_yewuliucheng_E1.png" alt="" />
					<img src="../../../assets/images/oneOneN/gif_yewuliucheng_arrow.gif" alt="" />

					<div class="flex-row align-i justify-c">
						<div class="lz-bluebox align-i borderbox"><div>中心调度</div></div>
					</div>
					<img src="../../../assets/images/oneOneN/img_yewuliucheng_E2.png" alt="" />

					<div class="flex-column justify-c-between">
						<div class="lz-greenbox" style="margin-bottom:24px">街道</div>
						<div class="lz-greenbox" style="margin-bottom:24px">局办</div>
						<div class="lz-greenbox">国有公司</div>
					</div>
					<img src="../../../assets/images/oneOneN/img_yewuliucheng_E1.png" alt="" />
					<img src="../../../assets/images/oneOneN/gif_yewuliucheng_arrow.gif" alt="" />
					<div class="flex-row align-i justify-c">
						<div class="lz-bluebox align-i borderbox"><div>一线处置</div></div>
					</div>
				</div>
			</div>
		</div>
		<div class="block-jiagou">
			<div class="block-title flex-row align-i" style="margin-top: 60px;">
				<img src="../../../assets/images/oneOneN/ic_title_yewujiagou.png" alt="" />
				<span>业务架构</span>
			</div>
			<div class="flex-row align-i justify-c" style="margin-top: 14px;">
				<div class="block-jg-bg flex-row align-i">
					<div class="jg-left">
						<ul>
							<li>
								<div></div>
								市政公用
							</li>
							<li>
								<div></div>
								市容环卫
							</li>
							<li>
								<div></div>
								园林绿化
							</li>
							<li>
								<div></div>
								综合执法
							</li>
							<li>
								<div></div>
								... ...
							</li>
						</ul>
					</div>
					<div class="jg-right">
						<ul>
							<li>
								<div></div>
								123热线
							</li>
							<li>
								<div></div>
								12319热线
							</li>
							<li>
								<div></div>
								市民appp
							</li>
							<li>
								<div></div>
								公众号
							</li>
							<li>
								<div></div>
								... ...
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {};
	}
};
</script>
<style lang="less" scoped>
.block-jg-bg {
	width: 780px;
	height: 450px;
	background: url(../../../assets/images/oneOneN/img_yewujiagou.png) no-repeat left top;
	background-size: 100% 100%;
	justify-content: space-between;
	padding: 0 20px;
}
.jg-left {
	width: 126px;
}
.jg-right {
	width: 144px;
}
.jg-left,
.jg-right {
	height: 246px;
	background: linear-gradient(180deg, rgba(89, 168, 255, 0.36) 0%, rgba(9, 61, 120, 0.36) 22.92%, rgba(9, 61, 120, 0.36) 84.9%, rgba(89, 168, 255, 0.36) 100%);
	border-radius: 4px;
	ul {
		padding: 0;
		margin: 0;
		position: relative;
	}
	ul li {
		width: 100%;
		font-size: 20px;
		line-height: 50px;
		list-style: none;
		display: flex;
		align-items: center;
	}
	ul li div {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background-color: #fff;
		margin: 0 10px;
	}
}
.block-lz-bg {
	width: 780px;
	height: 220px;
	background: url(../../../assets/images/oneOneN/img_diwen.png) no-repeat left top;
	background-size: 100% 100%;
	justify-content: space-between;
	padding: 0 20px;
	img {
		width: 30px;
		height: 106px;
	}
	img:nth-child(3),img:nth-child(8) {
		width: 40px;
		height: 16px;
	}
}
.block-jiagou {
	height: calc(100% - 168px);
}
.lz-greenbox {
	width: 140px;
	height: 52px;
	line-height: 52px;
	text-align: center;
	border: 2px solid #0fffea;
	box-sizing: border-box;
	border-radius: 4px;
	
}
.lz-bluebox {
	width: 90px;
	height: 204px;
	background: linear-gradient(180deg, rgba(89, 168, 255, 0.36) 0%, rgba(9, 61, 120, 0.36) 22.92%, rgba(9, 61, 120, 0.36) 84.9%, rgba(89, 168, 255, 0.36) 100%);
	border-radius: 4px;
	padding: 25px;
	text-align: center;
	border: 2px solid #1399ff;
	div {
		margin-top: 60px;
	}
}
</style>
