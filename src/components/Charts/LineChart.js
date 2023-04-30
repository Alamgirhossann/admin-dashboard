import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts'
import { lineCustomSeries } from '../../data/dummy'
import { LinePrimaryXAxis } from '../../data/dummy'
import { LinePrimaryYAxis } from '../../data/dummy'

const LineChart = () => {
  return (
    <ChartComponent
    id='line-chart'
    height='420px'
    primaryXAxis={LinePrimaryXAxis}
    primaryYAxis={LinePrimaryYAxis}
    chartArea={{border: {width: 0}}}
    tooltip={{enable: true}}
    >
    <Inject services={[LineSeries, DateTime, Legend, Tooltip]}/>
    <SeriesCollectionDirective>
    {lineCustomSeries.map((item,index)=> <SeriesDirective key={index} {...item}/>)}
    </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart