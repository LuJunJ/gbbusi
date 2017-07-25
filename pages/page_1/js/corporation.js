/**
 * 经济体系占比分析
 * @author ml
 * @date 2017-07-20
 */
var dataz = null;
var lineDatas = null;//折线图所有的数据集
var years = ['2007','2008','2009','2010','2011','2012','2013','2014','2015','2016'];
var totalDatas = [];//四个指标的总数
var totalClasified = [[],[],[],[]];
var pieChart1,pieChart2,pieChart3,pieChart4,lineChart;
window.onload = function() {
	dataz = corporData;
	lineDatas = dataFomatterForLine(dataz);
	pageLoad();
};
function pageLoad() {
	upCorPanel.init();
	downCorPanel.init();
//	echarts.connect("group1");
	window.onresize = function() {
		
	}
};
var upCorPanel = {
	init : function() {
		pie1 = this.pie1();
		pie2 = this.pie2();
		pie3 = this.pie3();
		pie4 = this.pie4();
	},
	pie1 : function(){
		pieChart1 = pieChartMaker(dataz.pieChart1,"pieChart1",["商贸企业数量分析","商贸企业数量","商贸企业数量"],0);
		pieChart1.setOption({
			timeline : {
				show : true
			},
		});
		pieChart1.setOption({
			tooltip : {
				formatter : "{a} \x3cbr/\x3e{b}: {c} 个 "
			},
		});
		pieChart1.on('timelinechanged',function(params){
			letTimeLineChanged([pieChart2,pieChart3,pieChart4],params.currentIndex);
		});
		pieChart1.on('timelineplaychanged',function(params){
			console.log(params)
			letTimeLinePlayChanged([pieChart2,pieChart3,pieChart4],params.playState);
		});
		//联动无法去除中间饼状图的联动,通过给圆环绑定悬浮事件,然后通过API使其他圆环对应地市高亮
		pieChart1.on('mouseover', function(params){
			if(params.data.flag){//通过标记位判断是否需要联动
				showHighlight([pieChart2,pieChart3,pieChart4],params.dataIndex);
			}
		});
		pieChart1.on('mouseout', function(params){
			if(params.data.flag){//通过标记位判断是否需要联动
				showDownplay([pieChart2,pieChart3,pieChart4],params.dataIndex);
			}
		});
		pieChart1.on('click', function(params){
			if(params.data.flag){//通过标记位判断是否需要切换折线图数据
				showDetails(params);
			}
		});
	},
	pie2 : function(){
		pieChart2 = pieChartMaker(dataz.pieChart2,"pieChart2",["商贸从业人数分析","商贸从业人数","商贸从业人数"],1);
		pieChart2.setOption({
			tooltip : {
				formatter : "{a} \x3cbr/\x3e{b}: {c} 人 "
			}
		});
		//联动无法去除中间饼状图的联动,通过给圆环绑定悬浮事件,然后通过API使其他圆环对应地市高亮
		pieChart2.on('mouseover', function(params){
			if(params.data.flag){//通过标记位判断是否需要联动
				showHighlight([pieChart1,pieChart3,pieChart4],params.dataIndex);
			}
		});
		pieChart2.on('mouseout', function(params){
			if(params.data.flag){//通过标记位判断是否需要联动
				showDownplay([pieChart1,pieChart3,pieChart4],params.dataIndex);
			}
		});
		pieChart2.on('click', function(params){
			if(params.data.flag){//通过标记位判断是否需要切换折线图数据
				showDetails(params);
			}
		});
	},
	pie3 : function(){
		pieChart3 = pieChartMaker(dataz.pieChart3,"pieChart3",["商贸企业产值分析","商贸产值","商贸产值"],2);
		pieChart3.setOption({
			tooltip : {
				formatter : "{a} \x3cbr/\x3e{b}: {c} 亿元 "
			}
		});
		//联动无法去除中间饼状图的联动,通过给圆环绑定悬浮事件,然后通过API使其他圆环对应地市高亮
		pieChart3.on('mouseover', function(params){
			if(params.data.flag){//通过标记位判断是否需要联动
				showHighlight([pieChart1,pieChart2,pieChart4],params.dataIndex);
			}
		});
		pieChart3.on('mouseout', function(params){
			if(params.data.flag){//通过标记位判断是否需要联动
				showDownplay([pieChart1,pieChart2,pieChart4],params.dataIndex);
			}
		});
		pieChart3.on('click', function(params){
			if(params.data.flag){//通过标记位判断是否需要切换折线图数据
				showDetails(params);
			}
		});
	},
	pie4 : function(){
		pieChart4 = pieChartMaker(dataz.pieChart4,"pieChart4",["商贸行业利润数分析","商贸行业利润数","商贸行业利润数"],3);
		pieChart4.setOption({
			tooltip : {
				formatter : "{a} \x3cbr/\x3e{b}: {c} 亿元"
			}
		});
		//联动无法去除中间饼状图的联动,通过给圆环绑定悬浮事件,然后通过API使其他圆环对应地市高亮
		pieChart4.on('mouseover', function(params){
			if(params.data.flag){//通过标记位判断是否需要联动
				showHighlight([pieChart1,pieChart2,pieChart3],params.dataIndex);
			}
		});
		pieChart4.on('mouseout', function(params){
			if(params.data.flag){//通过标记位判断是否需要联动
				showDownplay([pieChart1,pieChart2,pieChart3],params.dataIndex);
			}
		});
		pieChart4.on('click', function(params){
			if(params.data.flag){//通过标记位判断是否需要切换折线图数据
				showDetails(params);
			}
		});
	},
	
}, downCorPanel = {
	init : function() {
		lineChart = this.lineChart();
	},
	lineChart : function(){
		$.each(totalDatas,function(i,n){
			if(i < 10){
				totalClasified[0].push(totalDatas[i]);
			}else if(i < 20){
				totalClasified[1].push(totalDatas[i]);
			}else if(i < 30){
				totalClasified[2].push(totalDatas[i]);
			}else{
				totalClasified[3].push(totalDatas[i]);
			}
		});
		var option = {
			title : {
				text : '广州商贸企业数量分析',
				left : '1%',
				textStyle : {
					fontSize : 15,
					color : "#000000",
					fontWeight : "normal",
					fontFamily : "Microsoft YaHei"
				}
			},
			animationDuration : 5000,
			tooltip : {
				trigger : 'axis'
			},
			grid : {
				left : "1%",
				right : "2%",
				top : "13%",
				bottom : "5%",
				containLabel : true
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
				axisLabel : {
					show : true,
					textStyle : {
						color : "#A1B9D3"
					}
				},
				splitLine : {
					show : false,
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
				name : '总数',
				type : 'line',
				smooth : true,
				itemStyle : {
					normal : {
						color : '#7FD153',
					}
				},
				lineStyle : {
					normal : {
						color : '#7FD153',
						width : 3.5
					}
				},
				data : totalClasified[0]
			}, {
				name : '区域统计',
				type : 'line',
				smooth : true,
				itemStyle : {
					normal : {
						color : '#63A5E2',
					}
				},
				lineStyle : {
					normal : {
						color : '#63A5E2',
						width : 3.5
					}
				},
				data : lineDatas[0].value[0]
			}]
		};
		lineChart = echarts.init(document.getElementById("lineChart"));
		lineChart.setOption(option);
		return lineChart;
	}
	
};

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
	showHighlight([lineChart],number);
}
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
 * 鼠标悬浮时联动高亮的方法
 * @param charts 数组,为其他三个双环图表对象
 * @param dataIndex 当前数据项的索引值
 * @returns
 */
function showHighlight(charts,dataIndex){
	$.each(charts,function(idx,chart){
		//高亮
		chart.dispatchAction({
		    type: 'highlight',
		    // 使用 seriesId 或 seriesIndex 或 seriesName 来定位 series.
		    seriesIndex: 0,
		    // 使用 dataIndex 来定位节点。
		    dataIndex: dataIndex
		});
		//显示提示框
		chart.dispatchAction({
		    type: 'showTip',
		    // 使用 seriesId 或 seriesIndex 或 seriesName 来定位 series.
		    seriesIndex: 0,
		    // 使用 dataIndex 来定位节点。
		    dataIndex: dataIndex
		});
	});
};

/**
 * 鼠标移除时取消高亮的方法
 * @param charts 数组,为其他三个双环图表对象
 * @param dataIndex 当前数据项的索引值
 * @returns
 */
function showDownplay(charts,dataIndex){
	$.each(charts,function(idx,chart){
		//取消高亮
		chart.dispatchAction({
		    type: 'downplay',
		    // 使用 seriesId 或 seriesIndex 或 seriesName 来定位 series.
		    seriesIndex: 0,
		    // 使用 dataIndex 来定位节点。
		    dataIndex: dataIndex
		});
		//隐藏提示框
		chart.dispatchAction({
		    type: 'hideTip',
		});
	});
};
/**
 * 点击地市时更新折线图数据的方法
 * @returns
 */
function showDetails(params){
	var text = ['商贸企业数量分析','商贸从业人数分析','商贸企业产值分析','商贸行业利润数分析'];
	$.each(lineDatas,function(i,n){
		if(params.name == n.name){
			lineChart.setOption({
				title : {
					text : n.name + text[params.data.index],
				},
				series : [
					{
						data : totalClasified[params.data.index]
					},{
						data : n.value[params.data.index]
					}
				]
			});
//			console.log(n.name)
		}
	});
};
/**
 * 双环图数据格式化方法
 * @param obj
 * @param index 双环图的索引
 * @returns
 */
// obj = {year:[{name:"商贸企业",value:[21市商贸企业数量}],{name:"企业总数",value:[企业数量]}],year:[],...}
function dataFormatter(obj,index) {
    var pList = ['广州','深圳','珠海','东莞','佛山','中山','惠州','汕头','江门','茂名','肇庆','湛江','梅州','汕尾','河源','清远','韶关','揭阳','阳江','潮州','云浮'];
    var temp,sum = 0,options = [];
    var quatoNames = ['其他企业数量','其他企业从业人数','其他企业产值','其他企业利润数'];
    for (var year = 2007; year <= 2016; year++) {
        temp = obj[year];
        sum = 0;
        var datas = [{data:[]},{data:[]}];
        for(var i = 0; i < 21; i ++){
        	sum += temp[0].value[i];//商贸企业总数,遍历过程中追加计算得出
        	datas[0].data.push({
        		name : pList[i],
        		flag : true,//标明是否联动的标记位
        		index : index,
        		value : temp[0].value[i]
        	});
        };
        totalDatas.push(sum);//全局变量收集各项的总数
        datas[1].data.push({
        	name : temp[0].name,
        	flag : false,
        	value : sum
        },{
        	name : quatoNames[index],
        	flag : false,
        	value : temp[1].value[0] - sum
        });
        options.push({
        	series : datas
        });
    }
    return options;
};

/**
 * 折线图格式化数据的方法
 * @param obj
 * @returns
 */
function dataFomatterForLine(obj){
	 var pList = ['广州','深圳','珠海','东莞','佛山','中山','惠州','汕头','江门','茂名','肇庆','湛江','梅州','汕尾','河源','清远','韶关','揭阳','阳江','潮州','云浮'];
	    var temp,sum = 0;
	    var datas = new Array(21);
	    for(var i = 0;i < 21;i ++){
	    	var values = [[],[],[],[]];
	    	for(var j = 0;j < 4;j ++){
	    		for(var year = 2007; year <= 2016; year++){
		    		if(j == 0){
		    			temp = obj.pieChart1[year];
		    		}else if(j == 1){
		    			temp = obj.pieChart2[year];
		    		}else if(j ==2){
		    			temp = obj.pieChart3[year];
		    		}else{
		    			temp = obj.pieChart4[year];
		    		}
//		    		console.log(temp);
		    		values[j].push(temp[0].value[i]);
		    	}
	    	};
	    	datas[i] = {
		    		name : pList[i],
		    		value : values
		    	};
	    };
	    return datas;
};
/**
 * 生成双环图的方法
 * @param datas 数据
 * @param id 页面div的id
 * @param titles 数组[图表名称,外环系列名,内环系列名]
 * @param index 图表的索引值(0,1,2,3)
 * @returns
 */
function pieChartMaker(datas,id,titles,index){
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
			        	formatter : function(params){
			        		return params.name + '年'
			        	}
					}
				},
				color : "#FFAA4D #8EE972 #FECD8A #00AADB #6CD5C4 #AA92E0 #FE9BCA #FFBBA4 #9E9E9E"
						.split(" "),
				title : {
					text : titles[0],
					left : 'center',
					textStyle : {
						fontSize : 15,
						color : "#000000",
						fontWeight : "normal",
						fontFamily : "Microsoft YaHei"
					}
				},
				tooltip : {
					trigger : "item",
					confine : true
				},
				grid : {
					left : '2%',
					right : '2%',
					top : '2%',
					bottom : '2%'
				},
				animationDuration : 5000,
				series : [ {
					name : titles[1],
					type : "pie",
					radius : [ "50%", "75%" ],
					clockwise : true,
					startAngle : 90,
					minAngle : 5,
					center : [ '50%', '50%' ],
					label : {
						normal : {
							show : false
						}
					},
					labelLine : {
						show : false
					},
					itemStyle : {
						normal : {
							borderWidth : 4,
							borderColor : '#FFFFFF',
						},
					}
				},{
					name : titles[2],
					type : "pie",
					selectedMode : "single",
					radius : [ 0, "40%" ],
					clockwise : true,
					startAngle : 90,
					center : [ '50%', '50%' ],
					label : {
						normal : {
							show : !1,
							position : "inner"
						}
					},
					labelLine : {
						normal : {
							show : !1
						}
					},
				}]
			},
			options : dataFormatter(datas,index)
		}, 
		pieChart = echarts.init(document.getElementById(id));
		pieChart.setOption(option);
		return pieChart;
};