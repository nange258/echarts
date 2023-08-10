// 点击故障和异常 tab切换
(function () {
    var choseTab = document.querySelectorAll('.choseTab');
    var showTab = document.querySelectorAll('.showTab');
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


