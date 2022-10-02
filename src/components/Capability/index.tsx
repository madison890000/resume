import ReactEcharts from 'echarts-for-react';

const lineStyle = {
    width: 4,
    opacity: 0.5
};
const getOptions = (capabilities: any) => ({
    backgroundColor: 'rgba(0,0,0,0.1)',
    radar: {
        indicator: [
            {
                name: 'coding',
                max: 10
            },
            {
                name: 'leaning',
                max: 10
            },
            {
                name: 'algorithm',
                max: 10
            },
            {
                name: 'communicating',
                max: 10
            },
            {
                name: 'engineer',
                max: 10
            },
            {
                name: 'passion',
                max: 10
            }
        ],
        shape: 'circle',
        splitNumber: 1,
        axisName: {
            color: 'black'
        },
        splitLine: {
            lineStyle: {
                color: [
                    'rgba(238, 197, 102, 0.1)',
                    'rgba(238, 197, 102, 0.2)',
                    'rgba(238, 197, 102, 0.4)',
                    'rgba(238, 197, 102, 0.6)',
                    'rgba(238, 197, 102, 0.8)',
                    'rgba(238, 197, 102, 1)'
                ].reverse()
            }
        },
        splitArea: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(238, 197, 102, 0.5)'
            }
        }
    },
    series: [
        {
            name: 'Madison',
            type: 'radar',
            lineStyle: lineStyle,
            data: [
                [
                    capabilities.coding,
                    capabilities.leaning,
                    capabilities.algorithm,
                    capabilities.communicate,
                    capabilities.engineer,
                    capabilities.passion,
                ]
            ],
            symbol: 'none',
            itemStyle: {
                color: '#F9713C'
            },
            areaStyle: {
                opacity: 0.1
            }
        },
    ]
});
const Capability = ({ capabilities }: any) => {
    return (
        <ReactEcharts
            option={getOptions(capabilities)}
            notMerge={true}
            lazyUpdate={true}
            style={{
                width: '100%',
                height: '280px'
            }}
        />
    )
}

export default Capability
