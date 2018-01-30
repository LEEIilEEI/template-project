import { EventEmitter } from 'events'
import { error } from 'util';
// SET TITLE
// SET TOOLTIP
// SET LEGEND
// SET X
// SET Y
// SET DATA

/**
 * {
  title: {
      text: 'ECharts 入门示例'
  },
  tooltip: {},
  legend: {
      data:['销量']
  },
  xAxis: {
      data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
  },
  yAxis: {},
  series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
  }]
}
 */

class BaseChart {
  constructor (container, options) {
    if (!options || typeof options !== 'object') {
      throw 'need a options'
    }

    this.chartInstance = this.init(container)
    this.set(options)
  }

  init (container) {
    return echarts.init(container)
  }

  set (options) {
    this.chartInstance.setOption(options)
  }

  setXYAxis ({
    x = [],
    y = []
  }) {
    return {
      x, y
    }
  }
}

export default BaseChart