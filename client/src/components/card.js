import React from 'react'
import { Card, CardBody, CardHeader, CardFooter } from 'reactstrap'
import Header from './header'
import DonationCard from './donations'
import { FaRegComment } from "react-icons/fa";

const StartCard = ({ data }) => {
  return (
    <Card className="mb-4 text-left">
      <CardHeader>
        <Header author={data.author} />
      </CardHeader>
      <CardBody >
      <h7 className="font-size-16">{data.title}</h7>
      <h7 className="font-size-14 text-muted mt-1 mb-2">{data.description}</h7>
      <DonationCard
        thumbnail={data.thumbnail}
        goal={data.pledgeGoal}
        total={data.pledgeTotal}
        count={data.pledgerCount}
        codetotal={data.codeSubmissionTotal}
        />
      </CardBody>
      <CardFooter>
        <div className="d-flex align-items-center">
          <FaRegComment color="" />
            <h7 className="font-size-14 text-muted ml-2"> comments({data.numComments})</h7>
        </div>
      </CardFooter>
    </Card>
  )
}

export default StartCard
