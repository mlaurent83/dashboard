import React from 'react'
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Selection,
Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        toolbar={['Search']}
        width="auto"
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[ Page, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Customers
