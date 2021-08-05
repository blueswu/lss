<template>
	<div ref="echarts" />
</template>

<script>
export default {
	props: {
		datapie: { type: Array, default: () => [], required: true },
		completionRate: { type: String, default: '' },
		completionName: { type: String, default: '' }
	},
	data() {
		return {
			color: ['#E7FFFC']
		};
	},
	computed: {
		option() {
			const option = {
				color:['#1399FF','#B5D9F3'],
				title: {
					text: this.completionRate,
					subtext: this.completionName,
					x: 'center',
					y: '34%',
					textStyle: {
						fontWeight: 'normal',
						color: '#FFE28E',
						fontSize: '34'
					},
					subtextStyle: {
						fontWeight: 'normal',
						color: '#CEE8FF',
						fontSize: '16'
					}
				},
				tooltip: {
					trigger: 'item'
				},
				legend: {
					show: false,
					top: '5%',
					left: 'center'
				},
				series: [
					{
						name: '',
						type: 'pie',
						radius: ['54%', '70%'],  //圆环宽度
						avoidLabelOverlap: false,
						label: {
							show: false,
							position: 'center'
						},
						emphasis: {
							label: {
								show: true,
								fontSize: '40',
								fontWeight: 'bold'
							}
						},
						labelLine: {
							show: false
						},
						data: this.datapie
					}
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
		init() {
			let curveCharts = this.$echarts.init(this.$refs.echarts);
			curveCharts.setOption(this.option);
		}
	}
};
</script>
