import React from 'react'
import { Card, CardBody, CardFooter } from 'reactstrap'

const DonationCard = ({ thumbnail, goal, total, count, codetotal }) => {
  return (
    <Card>
      <CardBody className="d-flex">
        <div>
          <img src={thumbnail} alt="thumbnail" />
        </div>
        <div className="ml-4">
          <h7 className="text-info font-weight-bold">${total}</h7>
          <h7 className="text-muted font-size-14 mt-1">Of ${goal} goal</h7>
          <h7 className="text-muted font-size-16 mt-2 font-weight-bold">{count}</h7>
          <h7 className="text-muted font-size-14 mt-1">Donors</h7>
        </div>
      </CardBody>
      <CardFooter>
        <h7 className="text-muted font-size-14 mt-1">Submissions ({codetotal})</h7>
      </CardFooter>
    </Card>
  )
}

export default DonationCard
