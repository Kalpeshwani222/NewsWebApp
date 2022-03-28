import React from 'react'
import {Link} from "react-router-dom"
import {Card} from "@mui/material"
const Channels = () => {
  return (
    <>
       <Card>
            <Link className="nav-link" to="/ndtv" style={{fontSize:"19px"}}>
                      NDTV NEWS
                    </Link>
       </Card>

       <Card>
            <Link className="nav-link" to="/hindustantimes" style={{fontSize:"19px"}}>
                     hindustantimes
                    </Link>
       </Card>

       <Card>
            <Link className="nav-link" to="/indianexpress" style={{fontSize:"19px"}}>
                      indianexpress
                    </Link>
       </Card>
       <Card>
            <Link className="nav-link" to="/india" style={{fontSize:"19px"}}>
                      india
                    </Link>
       </Card>

       <Card>
            <Link className="nav-link" to="/digitaltrends" style={{fontSize:"19px"}}>
                      digitaltrends
                    </Link>
       </Card>
       <Card>
            <Link className="nav-link" to="/news18" style={{fontSize:"19px"}}>
                      news18
                    </Link>
       </Card>

       
    </>


  )
}

export default Channels