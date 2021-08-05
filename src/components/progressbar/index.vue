<template>
	<div ref="echarts" />
</template>

<script>
export default {
	props: {
		getmyd: { type: Array, default: () => [], required: true },
		// name: { type: String, default: '' },
		// title: { type: String, default: '2019年\n消费结构' }
	},
	// data() {
	// 	return {
	// 		color: ['#E7FFFC','red']
	// 	};
	// },
	computed: {
		option() {
			let backgroundColor = ''; //图表整个背景色
			let chartdata = [[97,86,80], ['石油', '煤矿', '汽油']];

			var getmydmc = chartdata[1]; //数据点名称
			// var getmyd = chartdata[0]; //收入金额
			
			var getmydzd = [];

			let big = 0;
			this.getmyd.forEach(el => {
				if (!(el === undefined || el === '')) {
					if (big < Number(el)) {
						big = Number(el);
					}
				}
			});
			for (let i = 0; i < this.getmyd.length; i++) {
				getmydzd.push(big * 4);
			}
			var max = Math.ceil(this.calMax([this.getmyd]) / 10) * 10;
			const option = {
				backgroundColor: backgroundColor,
				grid: {
					left: '3%',
					right: '9%',
					bottom: '10%',
					top: '10%',
					containLabel: true
				},
				tooltip: {
					show:false,
					formatter: params => {
						if (params.name !== '') {
							return params.name + ' : ' + this.getmyd[params.dataIndex];
						}
					},
					textStyle: {
						align: 'left'
					}
				},
				xAxis: [
					{
						show:false,  //显示底部x轴
						type: 'value',
						axisLabel: {
							margin: 5,
							color: '#fff',
							formatter: function(val) {
								return val + '';
							},
							textStyle: {
								fontSize: '13'
							}
						},
						min: 0,
						max: max, // 计算最大值
						interval: max / 5, //  平均分为5份
						splitNumber: 5,
						splitLine: {
							show: false,
							lineStyle: {
								color: '#fff'
							}
						},
						axisLine: {
							show: true,
							lineStyle: {
								color: '#fff',
								width: 1,
								opacity: 0.3
							}
						},
						axisTick: {
							show: false
						}
					},
					{
						type: 'value',
						axisLabel: {
							show: false
						},
						min: 0,
						max: max, // 计算最大值
						interval: max / 10, //  平均分为5份
						splitNumber: 10,
						splitLine: {
							show: false,
							lineStyle: {
								type: 'dashed',
								color: '#D8D8D8'
							}
						},
						axisLine: {
							show: false,
							lineStyle: {
								color: '#fff'
							}
						},
						axisTick: {
							show: false
						}
					}
				],
				yAxis: [
					{
						show:false,
						type: 'category',
						inverse: true,
						// itemStyle:{
						// 	normal:{
						// 		color:function(params){
						// 			var colorlist=['#3BEA8E','#FAD961','#0FFFEA'];
						// 			return colorlist[params.dataIndex]
						// 			
						// 		}
						// 	}
						// },
						//  boundaryGap:true,
						axisLabel: {
							show:false,  //左侧y轴参数
							formatter: (value, index) => {
								if (value.length >= 12) {
									value = value.slice(0, 12) + `\n` + value.slice(12);
								}
								if (value.length >= 26) {
									value = value.slice(0, 26) + `\n` + value.slice(26);
								}
								return value;
							},
							textStyle: {
								color: 'rgba(255,255,255,0.8)',
								fontSize: '12',
								align: 'right',
								lineHeight: 18
							}
						},
						splitLine: {
							show: false
						},
						axisTick: {
							show: false
						},
						axisLine: {
							lineStyle: {
								color: '#fff',
								width: 1,
								opacity: 0.3
							}
						},
						data: getmydmc
					}
				],
				dataZoom: [
					{
						type: 'inside',
						show: true,
						height: 15,
						start: 1,
						end: 100,
						orient: 'vertical',
						zlevel: 66
					}
				],
				series: [
					{
						name: '值',
						type: 'bar',
						// zlevel: 1,
						xAxisIndex: 0,
							itemStyle:{
							normal:{
								color:function(params){
									var colorlist=['#3BEA8E','#FAD961','#0FFFEA'];
									return colorlist[params.dataIndex]
									
								}
							}
						},
						// itemStyle: {
						// 	normal: {
						// 		// barBorderRadius: [0, 5, 5, 0],
						// 		color: {
						// 			colorStops: [
						// 				{
						// 					offset: 0,
						// 					color: '#3BEA8E' // 0% 处的颜色
						// 				},
						// 				{
						// 					offset: 1,
						// 					color: '#3BEA8E' // 100% 处的颜色
						// 				}
						// 			]
						// 		}
						// 	}
						// },
						barWidth: 22,
						data: this.getmyd,
						z: 0
					},
					{
						// 分隔
						type: 'pictorialBar',
						itemStyle: {
							normal: {
								color: '#031D54'
							}
						},
						symbolRepeat: 'fixed',
						symbolMargin: 3,
						symbol: 'rect',
						symbolClip: true,
						symbolSize: [6, 22],
						symbolPosition: 'start',
						symbolOffset: [-6, 0],//偏移
						data: getmydzd,
						z: 66,
						animationEasing: 'elasticOut'
					},
					{
						name: '背景',
						type: 'bar',
						barWidth: 22,
						barGap: '-100%',
						xAxisIndex: 1,
						data: getmydzd,
						itemStyle: {
							normal: {
								color: {
									colorStops: [
										{
											offset: 0,
											color: 'rgba(24,144,255,0.3)' // 0% 处的颜色
										},
										{
											offset: 1,
											color: 'rgba(99,180,255,0.3)' // 100% 处的颜色
										}
									]
								}
							}
						},
						z: 0
					},
				]
			};
			return option;
		}
	},
	watch: {
		value() {
			this.init();
		}
	},
	mounted() {
		this.init();
	},
	methods: {
		calMax(arr) {
			let max = 0;
			arr.forEach(el => {
				el.forEach(el1 => {
					if (!(el1 === undefined || el1 === '')) {
						if (max < Number(el1)) {
							max = Number(el1);
						}
					}
				});
			});
			let maxint = Math.ceil(max / 9.5);
			//不让最高的值超过最上面的刻度
			let maxval = maxint * 10;
			//让显示的刻度是整数
			return maxval;
		},
		init() {
			let curveCharts = this.$echarts.init(this.$refs.echarts);
			curveCharts.setOption(this.option);
		}
	}
};
</script>
