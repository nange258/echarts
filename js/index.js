
// 点击故障和异常 tab切换
(function () {
    var choseTab = document.getElementsByClassName('choseTab');
    var showTab = document.getElementsByClassName('showTab');
    for (var i = 0; i < choseTab.length; i++) {
        choseTab[i].setAttribute('index', i);

        choseTab[i].onclick = function () {
            var ind_ = this.getAttribute('index');
            for (var j = 0; j < choseTab.length; j++) {
                choseTab[j].classList.remove('active');
                choseTab[ind_].classList.add('active');
            }

            // 内容的显示和隐藏

            for (var k = 0; k < showTab.length; k++) {
                showTab[k].style.display = 'none';
                showTab[ind_].style.display = 'block';
            }
        }
    }
})();


// 点位分布图
// 类名是 .pie


(function () {
    var myChart = echarts.init(document.querySelector('.pie'));
    var option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            trigger: 'item',
            /* 
                提示信息的格式：
                a: series中name的值
                b: series中 data的name值
                c: series中 data的 value值
                d: 当前value占全部的比例
            */
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },

        series: [
            {
                name: '老陈学员分布',
                type: 'pie',
                radius: ['8%', '65%'],
                center: ['50%', '50%'],
                roseType: 'radius',
                itemStyle: {
                    borderRadius: 5
                },
                label: {
                    fontSize: '10px'
                },
                labelLine: {
                    length: 6,
                    length2: 8
                },
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '河南' }
                ]
            }
        ]
    };
    myChart.setOption(option);

    window.addEventListener('load', function () {
        myChart.resize();
    })

    window.addEventListener('resize', function () {
        myChart.resize();
    })

})();


// 全国用户总量统计部分
// .bar

(function () {
    var myChart = echarts.init(document.querySelector('.bar'));

    var item = {
        value: 1200,
        itemStyle: {
            color: '#2b3f62'
        },
        tooltip: {
            extraCssText: 'opacity:0'
        },
    }
    var option = {
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#00fffb' // 0% 处的颜色
            }, {
                offset: 1, color: '#0061ce' // 100% 处的颜色
            }],
            global: false // 缺省为 false
        },
        tooltip: {
            trigger: 'item',
            axisPointer: {
                type: 'none'
            }
        },
        grid: {
            left: '0%',
            right: '3%',
            bottom: '3%',
            top: "3%",
            containLabel: true,
            // 显示四条边的网格
            show: true,
            borderColor: 'rgba(0, 240, 255, 0.3)'

        },
        xAxis: [
            {
                type: 'category',
                data: ['郑州', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
                axisTick: {
                    alignWithLabel: false,
                    // 不显示x轴的坐标刻度
                    show: false
                },
                axisLabel: {
                    color: '#71f2fb'
                },
                axisLine: {

                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {
                    // 不显示x轴的坐标刻度
                    show: false
                },
                axisLabel: {
                    color: '#71f2fb'
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)'
                    }
                }
            }
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '60%',
                data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240]

            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('load', function () {
        myChart.resize();
    })

    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();



// 搞 右上角第一列 订单量 销售额

(function () {
    var filter_ = document.querySelector('.filter');
    var filters_ = filter_.children;

    var orderDatas = document.getElementsByClassName('orderData');

    var ind_ = 0;
    for (var i = 0; i < filters_.length; i++) {
        filters_[i].setAttribute('index', i);
        filters_[i].onclick = function () {
            ind_ = this.getAttribute('index');
            for (var j = 0; j < filters_.length; j++) {
                filters_[j].classList.remove('active');
                filters_[ind_].classList.add('active');
            }

            //切换对应数据的显示和隐藏

            for (var k = 0; k < orderDatas.length; k++) {
                orderDatas[k].classList.add('orderDataHidden');
                orderDatas[ind_].classList.remove('orderDataHidden');
            }
        }
    }

    var timer;
    function auto() {
        timer = setInterval(function () {
            ind_++;
            ind_ = ind_ >= filters_.length ? 0 : ind_;
            // console.log(ind_);
            filters_[ind_].onclick();
        }, 1000);
    }
    auto();

    var order = document.getElementsByClassName('order')[0];
    order.onmouseover = function () {
        clearInterval(timer);
    }

    // 鼠标移出的时候 触发 自动点击
    order.onmouseout = function () {
        auto();
    }
})();



// 销售统计曲线图

(function () {
    var myChart = echarts.init(document.querySelector('.sline'));

    // 折线图的数据

    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    }
    var option = {

        tooltip: {
            trigger: 'axis'
        },
        color: ['#00f2f1', '#ed3f35'],
        legend: {
            data: ['Email', 'Union Ads'],
            textStyle: {
                color: '#4c9bfd' // 图例文字颜色
            },
            right: '10%'

        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            show: true,// 显示边框
            borderColor: '#012f4a',// 边框颜色
            // borderColor: 'red',// 边框颜色
        },

        xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd' // 文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            },
            boundaryGap: false  // 去除轴内间距
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false  // 去除刻度
            },
            axisLabel: {
                color: '#4c9bfd' // 文字颜色
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                    // color: 'red' // 分割线颜色
                }
            }
        },
        series: [
            {

                name: '预期销售额',
                // data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                data: data.year[0],
                type: 'line',
                smooth: true,
                stack: 'Total'

            },
            {
                name: '实际销售额',
                // data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79], type: 'line',
                data: data.year[1],
                type: 'line',
                smooth: true,
                stack: 'Total',
            }
        ]
    };
    myChart.setOption(option);

    //点击timeTab切换对应的数据曲线

    var timeTabs = document.getElementsByClassName('timeTab');

    var ind_ = 0;
    for (var i = 0; i < timeTabs.length; i++) {
        timeTabs[i].setAttribute('index', i);
        timeTabs[i].onclick = function () {
            ind_ = this.getAttribute('index');


            // 设置timeTab选中的的样式  active
            for (var j = 0; j < timeTabs.length; j++) {
                timeTabs[j].classList.remove('active');
                timeTabs[ind_].classList.add('active');
            }
            // 获取自定属性的 dataTime的值
            var time = this.getAttribute("data-time");
            // console.log(time);
            // console.log(data[time][0]);
            // console.log(data[time][1]);

            option.series[0].data = data[time][0];
            option.series[1].data = data[time][1];

            myChart.setOption(option);
        }

    }

    var timer;
    function auto() {
        timer = setInterval(function () {
            ind_++;
            ind_ = ind_ >= timeTabs.length ? 0 : ind_;
            timeTabs[ind_].onclick();
        }, 3000);
    }
    auto();

    var sales = document.querySelector('.sales');
    sales.onmouseenter = function () {
        clearInterval(timer);
    }

    sales.onmouseleave = function () {
        auto();
    }




    window.addEventListener('load', function () {
        myChart.resize();
    })
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();


// 雷达图部分

(function () {
    var myChart = echarts.init(document.querySelector('.radar'));


    const lineStyle = {
        width: 1,
        opacity: 0.5
    };

    var option = {

        tooltip: {
            show: true,
            position: ['60%', '10%'],
            backgroundColor: 'rgba(255,255,255,.3)'
        },

        radar: {

            // 控制雷达图最大圆的大小
            radius: '65%',
            center: ['50%', '50%'],
            // 分割线的个数
            splitNumber: 4,
            indicator: [
                { name: '机场', max: 100 },
                { name: '商场', max: 100 },
                { name: '火车站', max: 100 },
                { name: '汽车站', max: 100 },
                { name: '地铁', max: 100 }
            ],
            shape: 'circle',

            axisName: {
                color: '#4c9bfd'
                // color: 'red'
            },
            // 雷达图分割线的颜色  一个个圆圈的颜色
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                    // color: [
                    //     'rgba(238, 197, 102, 0.1)',
                    //     'rgba(238, 197, 102, 0.2)',
                    //     'rgba(238, 197, 102, 0.4)',
                    //     'rgba(238, 197, 102, 0.6)',
                    //     'rgba(238, 197, 102, 0.8)',
                    //     'rgba(238, 197, 102, 1)'
                    // ].reverse()
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            }
        },
        series: [
            {
                name: 'Beijing',

                type: 'radar',
                lineStyle: {
                    normal: {
                        color: '#fff',
                    }
                },
                data: [[90, 100, 56, 11, 34]],
                // 小圆点
                symbol: 'circle',
                // 拐点大小
                symbolSize: 5,
                // 小圆点（拐点）设置为白色
                itemStyle: {
                    color: '#fff'
                },
                // 在圆点上显示相关数据
                label: {
                    show: true,
                    color: '#fff',
                    fontSize: 10
                },
                areaStyle: {
                    color: 'rgba(238, 197, 102, 0.6)',
                    // color: 'red',
                    // opacity: 0.1
                }
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('load', function () {
        myChart.resize();
    })
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();