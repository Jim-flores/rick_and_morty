import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import useInfo from '../hooks/useInfo'
const ResidentInfo = ({resident}) => {
    const informations = useInfo(resident)

    return (
        <div className='residentInfo row'>
            <div className='col-4'>
                <img src={informations?.image} alt="" />
            </div>
            <div className='col-8'>
                <h5> <b>Name: </b>{informations?.name}</h5>
                <h5> <b>Status: </b>{informations?.status}</h5>
                <h5> <b>Origin: </b>{informations?.origin.name}</h5>
                <h5> <b>episodes where appear: </b>{informations?.episode.length}</h5>
            </div>
            
        </div>
    )
}

export default ResidentInfo