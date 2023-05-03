import React from 'react'
import BasicTable from './components/HallDataTable'
import './HallPage.css'

function TestPage() {
  return (
    <div className='testpage-div' style={{top: 200}}>
        
        <BasicTable sx={{padding: 200, margin: 200, minWidth: 650, top:150 }}/>
    </div>
  )
}

export default TestPage