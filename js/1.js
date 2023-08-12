(function () {
    var myChart = echarts.init(document.querySelector('.water'));


    const value = 0.40
    option = {

        title: [
            {

                top: '25%',
                left: '44%',
                textStyle: {
                    fontSize: '25',
                    fontWeight: '400',
                    color: '#fff'
                }
            },
            {
                top: '31%',
                left: '40.8%',
                textStyle: {
                    fontSize: '25',
                    fontWeight: '400',
                    color: '#fff'
                }
            },
            {
                text: '40%',
                top: '29%',
                left: '36%',
                textStyle: {
                    fontSize: '30',
                    fontWeight: '500',
                    color: '#fff'
                }
            }
        ],
        series: [
            {
                name: '最外层-虚线',
                type: 'gauge',
                radius: '94%',
                startAngle: 0,
                endAngle: 360,
                axisLine: {
                    show: false
                },
                axisTick: {
                    distance: -6,
                    length: 2,
                    lineStyle: {
                        color: '#2AECFF',
                        width: 5,
                        type: [20],
                        dashOffset: 19,
                        opacity: 0.8
                    },
                    splitNumber: 6
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                pointer: {
                    show: false
                }
            },
            {
                type: 'liquidFill',
                radius: '80%',
                z: 5,
                center: ['50%', '50%'],
                amplitude: 14,
                backgroundStyle: {
                    color: 'transparent'
                },
                color: [
                    {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 1,
                                color: '#0061A2'
                            },
                            {
                                offset: 0,
                                color: '#00FFE5'
                            }
                        ],
                        globalCoord: false
                    },
                    {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 1,
                                color: '#0061A2'
                            },
                            {
                                offset: 0,
                                color: '#00FFE5'
                            }
                        ],
                        globalCoord: false
                    },
                    {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 1,
                                color: '#0061A2'
                            },
                            {
                                offset: 0,
                                color: '#00FFE5'
                            }
                        ],
                        globalCoord: false
                    }
                ],
                data: [
                    value + 0.02,
                    {
                        value: value - 0.01,
                        direction: 'left'
                    },
                    value - 0.01
                ],
                label: {
                    normal: {
                        formatter: ''
                    }
                },
                outline: {
                    show: true,
                    borderDistance: 0,
                    itemStyle: {
                        borderWidth: 2,
                        borderColor: '#2AECFF'
                    }
                }
            }
        ]
    };


    // var option = { value }
    myChart.setOption(option);

    window.addEventListener('load', function () {
        myChart.resize();
    })

    window.addEventListener('resize', function () {
        myChart.resize();
    })
})()
