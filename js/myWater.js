var myChart = echarts.init(document.querySelector('.water'));


const series = [
    {
        type: 'liquidFill',
        shape: 'circle',
        radius: '95%',
        center: ['50%', '50%'],
        data: [0.6, 0.5, 0.4],
        // 球体配置
        outline: {
            borderDistance: 5,
            itemStyle: {
                borderWidth: 2,
                borderColor: '#3dfff6',
                shadowBlur: 20,
                shadowColor: '#12786f'
            }
        },
        color: ['rgba(50, 255, 238, .6)', 'rgba(154, 255, 247, .6)'],
        // color: ['red', 'green'],
        backgroundStyle: {
            color: 'transparent',
            // color: 'red',
        },

        label: {
            show: true,
            textStyle: {
                color: '#12786f',
                insideColor: '#12786f',
                fontSize: 40
            },
            formatter: params => {
                return `${(params.value * 100).toFixed(0)}%`
            },
            rich: {
                a: {
                    fontSize: 24,
                }
            }
        }
    },
]

var option = { series }



myChart.setOption(option);

window.addEventListener('load', function () {
    myChart.resize();
})

window.addEventListener('resize', function () {
    myChart.resize();
})