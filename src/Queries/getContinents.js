import { gql } from '@apollo/client'
const GET_CONTINENT = gql`

    query{
        continents{
            name,
        }
    }
`
export default GET_CONTINENT



