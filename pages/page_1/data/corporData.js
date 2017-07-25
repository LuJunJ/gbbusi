﻿var corporData = {
		//['广州','深圳','珠海','东莞','佛山','中山','惠州','汕头','江门','茂名','肇庆','湛江','梅州','汕尾','河源','清远','韶关','揭阳','阳江','潮州','云浮'];
		pieChart1 : {
			2007 : [{name:"商贸企业数量",value:[289507 ,212873 ,106436 ,189456 ,195843 ,123381 ,160395 ,104256 ,86613 ,69290 ,58030 ,64093 ,47637 ,67558 ,47291 ,43913 ,32496 ,18848 ,27297 ,15598 ,26972 ]},{name:"企业总数",value:[5963399]}],
			2008 : [{name:"商贸企业数量",value:[286862 ,210928 ,105464 ,187725 ,194053 ,122253 ,158928 ,103303 ,85821 ,68656 ,57500 ,63507 ,47201 ,66940 ,46858 ,43511 ,32198 ,18675 ,27046 ,15455 ,26724 ]},{name:"企业总数",value:[5965389]}],
			2009 : [{name:"商贸企业数量",value:[313386 ,230431 ,125111 ,205083 ,211996 ,133557 ,173624 ,112855 ,93756 ,75004 ,62816 ,69379 ,41565 ,73130 ,51191 ,47535 ,35176 ,20402 ,29548 ,16884 ,29196 ]},{name:"企业总数",value:[6365389]}],
			2010 : [{name:"商贸企业数量",value:[325881 ,313148 ,156634 ,278701 ,288096 ,181500 ,235950 ,133367 ,127413 ,101930 ,85366 ,94285 ,70077 ,99382 ,69567 ,44598 ,47803 ,24726 ,40155 ,22945 ,39676 ]},{name:"企业总数",value:[6565389]}],
			2011 : [{name:"商贸企业数量",value:[368130 ,270684 ,135743 ,240908 ,249029 ,156888 ,203954 ,132570 ,110135 ,88108 ,73790 ,81499 ,60574 ,85905 ,60134 ,45838 ,41320 ,23966 ,34709 ,19834 ,34296 ]},{name:"企业总数",value:[6365389]}],
			2012 : [{name:"商贸企业数量",value:[490650 ,360772 ,150032 ,321087 ,331910 ,208103 ,271833 ,176691 ,146789 ,107431 ,98348 ,108623 ,80733 ,114495 ,80147 ,44422 ,55072 ,21942 ,54709 ,26435 ,45710 ]},{name:"企业总数",value:[7065389]}],
			2013 : [{name:"商贸企业数量",value:[542661 ,472545 ,236272 ,420565 ,434741 ,273886 ,356051 ,231433 ,132267 ,153813 ,128818 ,142277 ,105746 ,149968 ,104978 ,57479 ,52134 ,41838 ,44709 ,34624 ,59871 ]},{name:"企业总数",value:[7165389]}],
			2014 : [{name:"商贸企业数量",value:[660856 ,632982 ,316432 ,563353 ,582343 ,366876 ,476938 ,310009 ,187546 ,206036 ,172555 ,190584 ,141650 ,200886 ,130620 ,50576 ,66626 ,56043 ,71166 ,46380 ,50200 ]},{name:"企业总数",value:[7965389]}],
			2015 : [{name:"商贸企业数量",value:[856631 ,850464 ,325232 ,756912 ,782426 ,492928 ,640806 ,416523 ,196035 ,276828 ,231843 ,256065 ,190319 ,269907 ,188935 ,55440 ,89826 ,55299 ,89054 ,62316 ,77756 ]},{name:"企业总数",value:[8065389]}],
			2016 : [{name:"商贸企业数量",value:[1180488 ,1088594 ,544297 ,968847 ,1001505 ,630948 ,820232 ,533149 ,342925 ,354340 ,296759 ,327763 ,243608 ,345481 ,241837 ,124563 ,86177 ,56383 ,99589 ,79764 ,87928 ]},{name:"企业总数",value:[9865389]}]
		},
		pieChart2 : {
			2007 : [{name:"商贸企业从业人数",value:[2895070 ,2128730 ,1064360 ,1894560 ,1958430 ,1233810 ,1603950 ,1042560 ,866130 ,692900 ,580300 ,640930 ,476370 ,675580 ,472910 ,439130 ,324960 ,188480 ,272970 ,155980 ,269720 ]},{name:"企业从业人数",value:[79511309]}],
			2008 : [{name:"商贸企业从业人数",value:[2322620 ,2109280 ,1054640 ,1877250 ,1840530 ,1222530 ,1589280 ,1013030 ,858210 ,686560 ,575000 ,635070 ,472010 ,669400 ,468580 ,435110 ,321980 ,186750 ,270460 ,154550 ,267240 ]},{name:"企业从业人数",value:[76532178]}],
			2009 : [{name:"商贸企业从业人数",value:[3133860 ,2304310 ,1251110 ,2050830 ,2119960 ,1335570 ,1736240 ,1128550 ,937560 ,750040 ,628160 ,693790 ,415650 ,731300 ,511910 ,475350 ,351760 ,204020 ,295480 ,168840 ,291960 ]},{name:"企业从业人数",value:[83050023]}],
			2010 : [{name:"商贸企业从业人数",value:[3258810 ,3131480 ,1566340 ,2787010 ,2880960 ,1815000 ,2359500 ,1333670 ,1174130 ,1009300 ,853660 ,942850 ,700770 ,993820 ,695670 ,445980 ,478030 ,247260 ,401550 ,229450 ,396760 ]},{name:"企业从业人数",value:[109865432]}],
			2011 : [{name:"商贸企业从业人数",value:[3681300 ,2706840 ,1357430 ,2409080 ,2490290 ,1468880 ,2039540 ,1325700 ,1301350 ,881080 ,737900 ,814990 ,605740 ,859050 ,601340 ,458380 ,413200 ,239660 ,347090 ,198340 ,342960 ]},{name:"企业从业人数",value:[98345782]}],
			2012 : [{name:"商贸企业从业人数",value:[4906500 ,3607720 ,1500320 ,3210870 ,3319100 ,2081030 ,2718330 ,1566910 ,1467890 ,1074310 ,983480 ,1086230 ,807330 ,1044950 ,801470 ,444220 ,550720 ,219420 ,547090 ,264350 ,457100 ]},{name:"企业从业人数",value:[123456935]}],
			2013 : [{name:"商贸企业从业人数",value:[5426610 ,4725450 ,2362720 ,4205650 ,4347410 ,2738860 ,3420510 ,2314330 ,1322670 ,1538130 ,1288180 ,1422770 ,1057460 ,1499680 ,1049780 ,574790 ,521340 ,418380 ,447090 ,346240 ,498710 ]},{name:"企业从业人数",value:[153241520]}],
			2014 : [{name:"商贸企业从业人数",value:[6608560 ,6329820 ,3164320 ,5633530 ,5823430 ,3668760 ,4269380 ,3100090 ,1875460 ,2060360 ,1725550 ,1905840 ,1416500 ,2008860 ,1306200 ,505760 ,666260 ,560430 ,711660 ,463800 ,502000 ]},{name:"企业从业人数",value:[207432456]}],
			2015 : [{name:"商贸企业从业人数",value:[8566310 ,8904640 ,3252320 ,7569120 ,7524260 ,4929280 ,6408060 ,4165230 ,1960350 ,2768280 ,2318430 ,2560650 ,1903190 ,2699070 ,1889350 ,554400 ,898260 ,552990 ,890540 ,623160 ,577560 ]},{name:"企业从业人数",value:[268745326]}],
			2016 : [{name:"商贸企业从业人数",value:[10804880 ,14885940 ,3442970 ,9688470 ,8015050 ,6309480 ,8202320 ,5331490 ,2529250 ,3543400 ,2567590 ,3277630 ,2436080 ,2454810 ,2418370 ,1245630 ,861770 ,563830 ,995890 ,797640 ,579280 ]},{name:"企业从业人数",value:[303456210]}]
		},
		pieChart3 : {
			2007 : [{name:"商贸企业产值",value:[5790,4560,2129,3789,3917,2468,3208,2085,1732,1386,1161,1282,953,1351,946,878,650,377,546,312,539]},{name:"GDP",value:[96432]}],
			2008 : [{name:"商贸企业产值",value:[5737,4980,2109,3555,3881,2445,3179,2066,1716,1373,1150,1270,944,1339,937,870,644,374,541,309,534]},{name:"GDP",value:[98763]}],
			2009 : [{name:"商贸企业产值",value:[6268,4320,2502,3402,4240,2671,3472,2257,1875,1500,1256,1388,831,1463,1024,951,704,408,591,338,584]},{name:"GDP",value:[105104]}],
			2010 : [{name:"商贸企业产值",value:[6518,5170,3133,4574,5762,3630,4719,2667,2548,2039,1707,1886,1402,1988,1391,892,956,495,803,459,794]},{name:"GDP",value:[133256]}],
			2011 : [{name:"商贸企业产值",value:[7363,5630,2715,4818,4981,3138,4079,2651,2203,1762,1476,1630,1211,1718,1203,917,826,479,694,397,686]},{name:"GDP",value:[156298]}],
			2012 : [{name:"商贸企业产值",value:[9813,6000,3001,6422,6638,4162,5437,3534,2636,2149,1967,2172,1315,2290,1603,888,1101,439,1094,529,914]},{name:"GDP",value:[160342]}],
			2013 : [{name:"商贸企业产值",value:[10853,6420,4725,8411,8695,5478,7121,4629,2645,3076,2576,2846,2115,2999,2100,1150,1043,837,894,692,1197]},{name:"GDP",value:[192384]}],
			2014 : [{name:"商贸企业产值",value:[13217,8940,6329,11267,11647,7338,9539,6200,3751,4121,3451,3812,2833,4018,2612,1012,1333,1121,1423,928,1004]},{name:"GDP",value:[269437]}],
			2015 : [{name:"商贸企业产值",value:[17133,10000,6505,15138,15649,9859,12816,8330,3921,5537,4637,5121,3806,5398,3779,1109,1797,1106,1781,1246,1555]},{name:"GDP",value:[300558]}],
			2016 : [{name:"商贸企业产值",value:[23610,12400,10886,19377,20030,12619,16405,10663,6859,7087,5935,6555,4872,6910,4837,2491,1724,1128,1992,1595,1759]},{name:"GDP",value:[382345]}]
		},
		pieChart4 : {
			2007 : [{name:"商贸企业利润数",value:[640,684,319,568,588,370,481,313,260,208,174,192,143,203,142,132,98,57,82,47,81]},{name:"国民收入",value:[21690]}],
			2008 : [{name:"商贸企业利润数",value:[882,747,316,563,582,367,477,310,257,206,173,191,142,201,141,131,97,56,81,46,80]},{name:"国民收入",value:[22942]}],
			2009 : [{name:"商贸企业利润数",value:[940,648,375,615,636,401,521,339,281,225,148,208,125,219,154,143,106,61,89,51,88]},{name:"国民收入",value:[23435]}],
			2010 : [{name:"商贸企业利润数",value:[978,776,470,836,864,545,708,400,382,256,194,283,210,298,209,134,143,74,120,69,119]},{name:"国民收入",value:[25800]}],
			2011 : [{name:"商贸企业利润数",value:[1104,845,407,723,747,471,612,398,300,264,221,245,182,258,180,138,124,72,104,60,103]},{name:"国民收入",value:[28232]}],
			2012 : [{name:"商贸企业利润数",value:[1472,900,450,963,996,624,816,530,440,322,295,326,192,344,240,133,165,66,164,79,137]},{name:"国民收入",value:[35616]}],
			2013 : [{name:"商贸企业利润数",value:[1628,963,709,1262,1304,722,1068,694,397,461,386,427,317,450,315,163,156,126,134,104,180]},{name:"国民收入",value:[42717]}],
			2014 : [{name:"商贸企业利润数",value:[1983,1341,949,1690,1747,901,1431,930,563,518,488,572,425,603,392,122,200,168,213,139,151]},{name:"国民收入",value:[54326]}],
			2015 : [{name:"商贸企业利润数",value:[2570,1500,976,2271,2347,1479,1922,1250,588,831,696,768,571,810,567,166,270,166,267,187,233]},{name:"国民收入",value:[70023]}],
			2016 : [{name:"商贸企业利润数",value:[3542,1860,1233,2707,3005,1693,2461,1599,1029,1063,790,883,731,737,726,374,259,169,299,239,264]},{name:"国民收入",value:[82039]}]
		}
};
