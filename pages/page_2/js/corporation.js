/**
 * 外贸企业区域分布
 * @author ml
 * @date 2017-07-20
 */
var dataz = null;
var cityNames = ['广州市','深圳市','珠海市','东莞市','佛山市','中山市','惠州市','汕头市','江门市','茂名市','肇庆市','湛江市','梅州市','汕尾市','河源市','清远市','韶关市','揭阳市','阳江市','潮州市','云浮市'];
var quotas = ['外贸企业','外资企业','服务贸易企业','内贸企业'];
var quota = '';//选择的指标
var years = ['2007','2008','2009','2010','2011','2012','2013','2014','2015','2016'];
window.onload = function() {
	dataz = corporData[0];
	quota = quotas[0];
	quotaSelectedPanel.init();
	pageLoad();
};
function pageLoad() {
	chartPanel.init();
	window.onresize = function() {
		mapChart.resize();
	}
};
var quotaSelectedPanel = {
		init : function(){
			$('#selectQuota').change(function(){
				quota = quotas[this.value];
				dataz = corporData[this.value];
				pageLoad();
			});
		}
};
var chartPanel = {
	init : function() {
		map = this.map();
	},
	map : function(){
		
		var option = {
		    baseOption: {
		        animationDurationUpdate: 1000,
		        animationEasingUpdate: 'quinticInOut',
		        timeline: {
		            axisType: 'category',
		            orient: 'vertical',
		            autoPlay: true,
		            inverse: true,
		            playInterval: 5000,
		            left: 'left',
		            top: 40,
		            bottom: 40,
					inverse : true,
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
			        	formatter : function(params){
			        		return params.name + '年'
			        	}
					}
		        },
		        title: {
		            text: '',
		            left: 'center',
		            top: 'top',
		            textStyle: {
		                fontSize: 25,
		                color: '#000000'
		            }
		        },
		        grid: {
		            left: '50%',
		            right: '5%',
		            top: '5%',
		            bottom: '50%'
		        },
		        tooltip: {
		            formatter: quota + '<br/>{b} : {c} 个'
		        },
		        xAxis: {},
		        yAxis: {},
		        series: [{
		            id: 'map',
		            type: 'map',
		            map: 'guangdong',
		            top: '5%',
		            bottom: '5%',
		            left: '5%',
		            //right: '10%',
		            itemStyle: {
//		                normal: {
//		                    areaColor: '#323c48',
//		                    borderColor: '#404a59'
//		                },
		                emphasis: {
		                    label: {
		                        show: true
		                    },
		                    areaColor: '#DA70D6',
		                    borderWidth: 0,
		                    shadowBlur: 15,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.9)'
		                }
		            },
		            data: [],
		        }, {
		            id: 'bar',
		            type: 'bar',
		            tooltip: {
		            },
		            label: {
		                normal: {
		                    show: false,
		                }
		            },
		            itemStyle: {
		                emphasis: {
		                    borderWidth: 0,
		                    shadowBlur: 15,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.9)'
		                }
		            },
		            data: []
		        }, {
		            id: 'pie',
		            type: 'pie',
		            radius: ['25%', '35%'],
		            center: ['75%', '75%'],
		            tooltip: {
		                formatter: '{b} : {d}%'
		            },
		            data: [],
		            label: {
		            	normal: {
		            		show : false
		                },
		                emphasis : {
		            		show : true
		            	}
		            },
		            labelLine: {
		            	normal: {
		            		show : false
		            	}
		            },
		            itemStyle: {
		                normal: {
		                    borderColor: 'rgba(0,0,0,0.3)',
		                    borderSize: 1
		                }
		            }
		        }]
		    },
		    options: []
		}

		for (var i = 0; i < dataz.length; i++) {
		   
			option.options.push({
		        visualMap: [{
		            calculable: true,
		            dimension: 0,
		            right: '47%',
		            bottom: 'bottom',
		            itemWidth: 12,
		            min: dataz[0].data[20].value[0],
		            max: dataz[0].data[0].value[0],
		            textStyle: {
		                color: '#000000'
		            },
		            inRange: {
		                color: ['#89C0F9', '#6CD18D', '#F0DA48', '#FD3D48']
		            }
		        }],
		        xAxis: {
		            type: 'value',
		            inverse : true,
		            boundaryGap: [0, 0.1],
		            axisLabel: {
		                show: false,
		            },
		            axisLine:{
		            	show: false,
		            },
		            axisTick:{
		            	show: false,
		            },
		            splitLine: {
		                show: false
		            }
		        },
		        yAxis: {
		            type: 'category',
		            axisLabel: {
		                show: false,
		            },
		            axisLine:{
		            	show: false,
		            },
		            axisTick:{
		            	show: false,
		            },
		            splitLine: {
		                show: false
		            },
		            data: []
		        },
		        series: [{
		            id: 'map',
		            label : {
		            	emphasis : {
		            		show : true,
		            		position : 'left',
		            		formatter : '{b} : {c} 个'
		            	}
		            },
		            data: dataz[i].data
		        }, {
		            id: 'bar',
		            label : {
		            	emphasis : {
		            		show : true,
		            		position : 'left',
		            		formatter : '{b} : {c} 个'
		            	}
		            },
		            data: dataz[i].data.map(function(ele) {
		            	return {
		                    name: ele.value[1],
		                    value: ele.value[0]
		                }
		            }).sort(function(a,b){
		            	return b.value - a.value
	                }).reverse()
		        }, {
		            id: 'pie',
		            label : {
		            	emphasis : {
		            		show : true,
		            		formatter : function(params){
		            			return  params.name + ' : ' + params.percent + '%';
		            		}
		            	}
		            },
		            data: dataz[i].data.map(function(ele) {
		            	return {
		                    name: ele.value[1],
		                    value: ele.value[0]
		                }
		            }).sort(function(a,b){
		            	return b.value - a.value
	                })
		        }]
		    })
		};
		
		var mapChart = echarts.init(document.getElementById("mapChart"));
		mapChart.setOption(option);
		mapChart.on('mouseover', function(params){
//			console.log(params);
			//遍历三个series
			for(var i = 0;i < 3;i ++){
				if(params.seriesIndex != i){
					//高亮 
					mapChart.dispatchAction({
					    type: 'highlight',
					    // 使用 seriesId 或 seriesIndex 或 seriesName 来定位 series.
					    seriesIndex: i,
					    // 使用 name 来定位节点。
					    name: params.name
					});
					//显示提示框
					mapChart.dispatchAction({
						type: 'showTip',
						// 使用 seriesId 或 seriesIndex 或 seriesName 来定位 series.
						seriesIndex: i,
						// 使用 dataIndex 来定位节点。
						dataIndex: cityNames.indexOf(params.name)
					});
				}
			}
		});
		mapChart.on('mouseout', function(params){
			for(var i = 0;i < 3;i ++){
				//取消高亮
				mapChart.dispatchAction({
				    type: 'downplay',
				    // 使用 seriesId 或 seriesIndex 或 seriesName 来定位 series.
				    seriesIndex: i,
				    // 使用 name 来定位节点。
				    name: params.name
				});
				//隐藏提示框
				mapChart.dispatchAction({
				    type: 'hideTip',
				});
			}
		});
	}
};
