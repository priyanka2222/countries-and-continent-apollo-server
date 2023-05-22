import React from 'react'
import { useQuery } from '@apollo/client'
import GET_COUNTRIES from '../../Queries/getCountries'

export default function Countries() {

    const { loading, error, data } = useQuery(GET_COUNTRIES)
    console.log(data)
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
                {data.countries.map((item)=>(
                    <li key={item.id}>
                        {item.name} - {item.capital} 
                    </li>
                ))}
            </ul>
        </>
    )
}
