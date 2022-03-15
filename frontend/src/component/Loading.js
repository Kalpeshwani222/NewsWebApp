import React from 'react'
import {CircularProgress} from '@mui/material'

const Loading = () => {
  return (
   <>
        {/* <div style={{"width":"10px","height":"10px"}}>
          <CircularProgress/>
        </div> */}
<div className="text-center">
                <CircularProgress/>
                <h6>.</h6>
            </div>
       
   </>
  )
}

export default Loading