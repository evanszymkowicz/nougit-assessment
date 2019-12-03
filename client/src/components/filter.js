import React from 'react'
import { Button } from 'reactstrap'

const Filter = ({ onFilterChange }) => {
  return (
    <div className="mb-2 mt-2">
      <Button color="info" size="sm" onClick={()=>onFilterChange('all')}>All</Button>{' '}
      <Button color="info"size="sm" onClick={()=>onFilterChange('trending')}>Trending</Button>{' '}
      <Button color="info"size="sm" onClick={()=>onFilterChange('open')}>Open Issues</Button>{' '}
      <Button color="info"size="sm" onClick={()=>onFilterChange('close')}>Completed Issues</Button>{' '}
    </div>
  )
}

export default Filter
