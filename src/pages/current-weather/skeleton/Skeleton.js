import React from 'react'
import Skeleton from "@material-ui/lab/Skeleton";
import '../index.css'

const SkeletonLoad = () => {
  return (
    <>
      <div className="gridSkeleton">
        <Skeleton variant="rect" width={"70%"} height={"80%"} />
        <Skeleton variant="rect" width={"20%"} height={"80%"} />
      </div>
      <div className="nextSkeleton">
        <div className="headerSkeleton">
          <Skeleton variant="text" height={70} />
        </div>
      </div>
      <Skeleton variant="rect" width={'100%'} height={'20%'} />
    </>
  )
}
export default SkeletonLoad
