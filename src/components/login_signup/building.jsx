import React from 'react'
import building from '../../images/cgBuilding.svg'
import './building.css'


    function BuildingContainer() {
        return (
            <div className="col-5 col-left" style={{backgroundColor:"#002C3F", overflow:"hidden",paddingTop:"3rem",padding:"5%"}}>
                <div>
                    <div className="row row1">
                        <img style={{width:"80%",marginLeft:"10%",marginTop:"4%"}} src={building} />
                    </div>
                    <div className='row' style={{textAlign:"center",marginTop:"2rem"}}>
                        <p className="txt-1" style={{color:"#F3F2F2"}}>Find Your Accomodation</p>
                        <p className="txt-2" style={{color:"#F3F2F2"}}>This is an online platform that helps other to find accommodation</p>
                    </div>
                </div>
            </div>
        )
    }

export default BuildingContainer;