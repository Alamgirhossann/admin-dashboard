import React from 'react'
import { GridComponent, ColumnDirective,ColumnsDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid,  } from '../data/dummy'
import { Header } from '../components'

const Customers = () => {
  return (
    <div className=" mt-24 pt-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        toolbar={['Delete']}
        editSettings={{allowDeleting:true, allowEditing: true}}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[ Page, Toolbar, Selection, Edit, Filter, Sort]} />

      </GridComponent>
    </div>
  )
}

export default Customers