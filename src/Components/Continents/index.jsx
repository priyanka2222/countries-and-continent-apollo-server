import React from 'react'
import { useQuery } from '@apollo/client'
import GET_CONTINENT from '../../Queries/getContinents'

export default function Continents() {

    const { loading, error, data } = useQuery(GET_CONTINENT)
    console.log("Hi continents")
    console.log("continents : ",data)
    if(loading){
        return(
            <p> Loading....</p>
        )
    }
    if(error){
        return(
            <p> Error.... </p>
        )
    }
    return(
        <>
            <ul>
                {data.continents.map((item)=>(
                    <li key={item.id}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </>
    )
}
