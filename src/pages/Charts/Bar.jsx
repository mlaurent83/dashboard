import React from 'react'
import {AxisModel, BarSeries, Category, ChartComponent, Inject, SeriesCollectionDirective, SeriesDirective} from'@syncfusion/ej2-react-charts';
import { barCustomSeries, barPrimaryYAxis, barPrimaryXAxis} from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'
import { Header } from '../../components'

const Area = () => {

  const {currentMode} = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white
    dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Area" title="Inflation Rate in Bar"/>
    <ChartComponent
      id="bar-chart"
      height="420px"
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      chartArea={{border: {width: 0}}}
      tooltip={{enable: true}}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[BarSeries, Category]}/>
      <SeriesCollectionDirective>
        {barCustomSeries.map((item, index) =>
          <SeriesDirective key={index} {...item}/>
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  )
}

export default Area
