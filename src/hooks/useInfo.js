import React, {useEffect, useState} from 'react'
import axios from 'axios'
const useInfo = resident => {
    const [informations, setinformations] = useState()
    useEffect(() => {
        const URL = resident
        axios.get(URL)
            .then(res => setinformations(res.data))
            .catch(err => console.log(err))
    }, [])
    console.log(informations)
    return informations
}

export default useInfo