/**
 * 外贸企业市场效益情况
 * @author ml
 * @date 2017-07-21
 */
var dataz = null;
var cityNames = ['广州市','深圳市','珠海市','东莞市','佛山市','中山市','惠州市','汕头市','江门市','茂名市','肇庆市','湛江市','梅州市','汕尾市','河源市','清远市','韶关市','揭阳市','阳江市','潮州市','云浮市'];
var years = ['2007','2008','2009','2010','2011','2012','2013','2014','2015','2016'];
var cityName = '';
var lineDatas = [[],[],[]];//折线图数据集
var gaugeChart1,gaugeChart2,barChart,lineChart;
window.onload = function() {
	dataz = corporData[0];
	cityName = '广州市';
	citySelectedPanel.init();
	pageLoad();
};
function pageLoad() {
	upCorPanel.init();
	downCorPanel.init();
	window.onresize = function() {
		gaugeChart1.resize();
		gaugeChart2.resize();
		barChart.resize();
		lineChart.resize();
	}
};
var citySelectedPanel = {
		init : function(){
			$.each(cityNames,function(i,n){
				if(i == 0){
					$('#selectCity').append('<option value="'+ i +'" selected="selected">'+ n +'</option>');
				}else{
					$('#selectCity').append('<option value="'+ i +'">'+ n +'</option>');
				}
			});
			$('#selectCity').change(function(){
				cityName = cityNames[this.value];
				dataz = corporData[this.value];
				pageLoad();
			});
		}
};
var upCorPanel = {
	init : function() {
		gauge1 = this.gauge1();
		gauge2 = this.gauge2();
		bar = this.bar();
	},
	gauge1 : function(){
		gaugeChart1 = gaugeChartMaker(dataz,"gaugeChart1",0);
		gaugeChart1.setOption({
			title : {
				text :  cityName + "平均资产负债率对比",
			},
		});
		gaugeChart1.setOption({
			timeline : {
				show : true
			}
		});
		gaugeChart1.on('click', function(params){
			showDetails(params);
		});
		gaugeChart1.on('timelinechanged', function(params){
//			console.log(params)
			letTimeLineChanged([gaugeChart2,barChart],params.currentIndex);
			//高亮
			lineChart.dispatchAction({
			    type: 'highlight',
			    // 使用 seriesId 或 seriesIndex 或 seriesName 来定位 series.
			    seriesIndex: 0,
			    // 使用 dataIndex 来定位节点。
			    dataIndex: params.currentIndex
			});
			//显示提示框
			lineChart.dispatchAction({
			    type: 'showTip',
			    // 使用 seriesId 或 seriesIndex 或 seriesName 来定位 series.
			    seriesIndex: 0,
			    // 使用 dataIndex 来定位节点。
			    dataIndex: params.currentIndex
			});
		});
		gaugeChart1.on('timelineplaychanged', function(params){
			letTimeLinePlayChanged([gaugeChart2,barChart],params.playState);
		});
	},
	gauge2 : function(){
		gaugeChart2 = gaugeChartMaker(dataz,"gaugeChart2",1);
		gaugeChart2.setOption({
			title : {
				text :  cityName + "平均利润率对比",
			},
		});
		gaugeChart2.on('click', function(params){
			showDetails(params);
		});
	},
	bar : function(){
		var option = {
				baseOption : {
					timeline : {
						show : false,
						axisType : 'category',
						orient : 'horizontal',
						left: 'center',
				        top : 'bottom',
			            inverse : false,
						autoPlay : true,
						realtime : true,
						playInterval : 5000,
						controlPosition : 'right',
						data : years,
						lineStyle : {
							show : false
						},
						label : {
							position : 'right',
							normal : {
								show : false,
								textStyle : {
									color : '#c2d6ef'
								}
							},
						},
						controlStyle: {
			                showNextBtn: false,
			                showPrevBtn: false,
				        },
				        tooltip : {
							show : false
						}
					},
					title : {
						text :  cityName + "平均毛收入对比",
						left : 'center',
						textStyle : {
							fontSize : 15,
							color : "#000000",
							fontWeight : "normal",
							fontFamily : "Microsoft YaHei"
						}
					},
					animationDuration: 5000,
					tooltip: {
						confine : true,
						formatter : cityName + '{b}'+ '平均毛收入:' +'{c}' +'亿元'
					},
					grid : {
						left : "5%",
						right : "5%",
						bottom : "10%",
						top : "15%",
						containLabel : true,
					},
					calculable : true,
					xAxis : [ {
						type : "category",
						boundaryGap : true,
						data : ["外贸行业","龙头企业"],
						axisTick : {
							show : false
						},
						axisLine : {
							lineStyle : {
								color : "#A1B9D3",
								width : 1.5,
							}
						},
						axisLabel : {
							textStyle : {
								color : "#A1B9D3"
							},
						},
						splitLine : {
							show : false,
						}
					} ],
					yAxis : [ {
						type : "value",
						min : 0,
						axisLabel : {
							show : true,
							textStyle : {
								color : "#A1B9D3"
							}
						},
						axisLine : {
							lineStyle : {
								color : "#A1B9D3",
								width : 1.5,
							}
						},
						axisTick : {
							show : false
						},
						splitLine : {
							lineStyle : {
								color : "#A1B9D3",
								width : 1,
								opacity : .2
							}
						}
					} ],
					series : [ {
						type : 'bar',
						barWidth : '30%'
					}]
				},
				options : dataFormatter(dataz,2)
		};
		barChart = echarts.init(document.getElementById("barChart"));
		barChart.setOption(option);
		
		barChart.on('click', function(params){
			showDetails(params);
		});
	},
}, downCorPanel = {
	init : function() {
		lineChart = this.lineChart();
	},
	lineChart : function(){
		
		$.each(lineDatas,function(i,lineData){
			lineDatas[i] = [[],[]],
			$.each(dataz,function(j,n){
				lineDatas[i][0].push(n.data[0][i]);
				lineDatas[i][1].push(n.data[1][i])
			});
		});
		var option = {
			title : {
				text : cityName + "平均资产负债率",
				textStyle : {
					fontSize : 15,
					color : "#000000",
					fontWeight : "normal",
					fontFamily : "Microsoft YaHei"
				}
			},
			animationDuration : 5000,
			tooltip : {
				trigger : 'axis',
				confine : true,
				formatter : '{b}年'+ cityName+ '\x3cbr/\x3e' + '平均资产负债率:' +'{c}' +'%'
			},
			grid : {
				left : "1%",
				right : "2%",
				top : "13%",
				bottom : "5%",
				containLabel : true
			},
			legend : {
				show : true
			},
			calculable : true,
			xAxis : [ {
				type : 'category',
				boundaryGap : true,
				data : years,
				axisTick : {
					show : false
				},
				axisLine : {
					lineStyle : {
						color : "#A1B9D3",
						width : 1.5,
					}
				},
				axisLabel : {
					textStyle : {
						color : "#A1B9D3"
					},
				},
				splitLine : {
					show : false,
				}
			} ],
			yAxis : [ {
//				name : "信息资源数量",
				type : 'value',
				splitNumber : 5,
				scale : true,
				axisLabel : {
					show : true,
					textStyle : {
						color : "#A1B9D3"
					},
				},
				splitLine : {
					show : false
				},
				axisLine : {
					lineStyle : {
						color : "#A1B9D3",
						width : 1.5,
					}
				},
				axisTick : {
					show : false
				}
			} ],
			series : [
			{
				name : cityName + '外贸行业平均值',
				type : 'line',
				smooth : true,
				itemStyle : {
					normal : {
						color : '#96C2EF',
					}
				},
				lineStyle : {
					normal : {
						color : '#96C2EF',
						width : 3.5
					}
				},
				data : lineDatas[0][0]
			}, {
				name : cityName + '龙头企业平均值',
				type : 'line',
				smooth : true,
				itemStyle : {
					normal : {
						color : '#76808C',
					}
				},
				lineStyle : {
					normal : {
						color : '#76808C',
						width : 3.5
					}
				},
				data : lineDatas[0][1]
			}]
		};
		lineChart = echarts.init(document.getElementById("lineChart"));
		lineChart.setOption(option);
		return lineChart;
	}
	
};

//{time : 2008, data : [[均资产负债率,均利润率,均毛收入],[龙头资产负债率,龙头利润率,龙头毛收入]]}
function dataFormatter(obj,idx){
	var options=[];
	var names = [];
	if(idx == 0){
		names = ["外贸行业平均资产负债率","龙头企业的平均资产负债率"];
	}else if(idx == 1){
		names = ["外贸行业平均利润率","龙头企业的平均利润率"];
	}
	if(idx == 2){
		names = ["外贸行业平均毛收入","龙头企业的平均毛收入"];
	};
	$.each(obj,function(i,n){
		var datas = [];
		datas.push({
			name : names[0],
			index : idx,
			value : n.data[0][idx],
			itemStyle: {
				normal: {
					color: '#96C2EF'
				}
			},
		},{	
			name : names[1],
			index : idx,
			value : n.data[1][idx],
			itemStyle: {
				normal: {
					color: '#76808C'
				}
			},
		});
		options.push({
			series : {
				data : datas
			}
		});
	});
//	console.log(options);
	return options;
};

/**
 * 生成仪表盘的方法
 * @param datas 数据
 * @param id 页面div的id
 * @param idx 图表索引
 * @returns
 */
function gaugeChartMaker(datas,id,idx){

	var option = {
			baseOption : {
				timeline : {
					show : false,
					axisType : 'category',
					orient : 'vertical',
					left: 'left',
					top: 20,
		            bottom: 20,
					inverse : true,
					autoPlay : true,
					realtime : true,
					symbol : 'circle',
					playInterval : 5000,
					controlPosition : 'bottom',
					data : years,
					lineStyle : {
						color : '#9FB9DA',
						width : 10
					},
					label : {
						normal : {
							show : false,
							textStyle : {
								color : '#c2d6ef'
							}
						},
					},
					itemStyle : {
						normal : {
							color : 'rgba(0,0,0,0)'
						}
					},
					controlStyle: {
		                showNextBtn: false,
		                showPrevBtn: false,
		                itemSize : 18,
		                normal : {
		                	color : '#9FB9DA',
		                	borderColor : '#9FB9DA'
		                }
			        },
			        tooltip : {
			        	confine : true,
			        	formatter : function(params){
			        		return params.name + '年'
			        	}
					}
				},
				title : {
					left : 'center',
					textStyle : {
						fontSize : 15,
						color : "#000000",
						fontWeight : "normal",
						fontFamily : "Microsoft YaHei"
					}
				},
				animationDuration: 5000,
				tooltip: {
					confine : true,
					formatter: cityName + '{b}:{c}' + '%'
				},
				grid : {
					left : '2%',
					right : '2%',
				},
				series: [{
					type: 'gauge',
					startAngle: 180,
					endAngle: 0,
					splitNumber: 5,
					radius: '100%',
					center: ['53%', '75%'],
					axisLine: {
						lineStyle: {
							color: [
								[1, new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
									offset: 0,
									color: '#FF4F0C'
								}, {
									offset: 0.7,
									color: '#fee235'
								}, {
									offset: 1,
									color: 'lime'
								}])]
							],
							width: 18,
							shadowColor: 'rgba(0,0,0,0)',
						}
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						show: true,
						distance: -7,
						color: 'auto'
					},
					splitLine: {
						show: !1,
					},
					pointer: {
						length: '55%',
						width : 5
					},
					title: {
						show : false,
						offsetCenter: ['-80%', '45%'],
						textStyle: {
							fontWeight: 'bolder',
							fontSize: 12,
							fontStyle: 'italic',
							color: '#A9BDD6',
							shadowColor: '#fff',
							shadowBlur: 10
						}
					},
					detail: {
						show: false,
//						backgroundColor: 'rgba(0,0,0,0)',
//						borderWidth: 0,
//						borderColor: '#ccc',
//						width: 100,
//						height: 40,
//						offsetCenter: ['-70%', '15%'],
						formatter: '{value}%',
//						textStyle: {
//							color: getColor(percent1[0]),
//							fontSize: 27
//						}
					}
				}]
			},
			options : dataFormatter(datas,idx)
	}
	gaugeChart = echarts.init(document.getElementById(id));
	gaugeChart.setOption(option);
	return gaugeChart;
};

/**
 * 点击更新折线图数据的方法
 * @param params 
 * @returns
 */
function showDetails(params){
	var text = ['平均资产负债率','平均利润率','平均毛收入'];
	tooltips = [
		{
			confine : true,
			formatter : '{b}年'+ cityName+ '\x3cbr/\x3e' + '平均资产负债率:' +'{c}' +'%'
		},{
			confine : true,
			formatter : '{b}年'+ cityName+ '\x3cbr/\x3e' + '平均利润率:' +'{c}' +'%'
		},{
			confine : true,
			formatter : '{b}年'+ cityName+ '\x3cbr/\x3e' + '平均毛收入:' +'{c}' +'亿元'
		}
	];
	lineChart.setOption({
		title : {
			text : cityName + text[params.data.index],
		},
		tooltip : tooltips[params.data.index],
		series : [
			{
				data : lineDatas[params.data.index][0]
			},{
				data : lineDatas[params.data.index][1]
			}
		]
	});
};

/**
 * 时间轴播放切换联动
 * @returns
 */
function letTimeLinePlayChanged(charts,boolean){
	$.each(charts,function(i,chart){
		chart.dispatchAction({
		    type: 'timelinePlayChange',
		 // 播放状态，true 为自动播放
		    playState: boolean
		})
	});
}
/**
 * 时间轴切换联动
 * @returns
 */
function letTimeLineChanged(charts,number){
	$.each(charts,function(i,chart){
		chart.dispatchAction({
		    type: 'timelineChange',
		    // 时间点的 index
		    currentIndex: number
		})
	});
}