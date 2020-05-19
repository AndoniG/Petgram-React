import React from 'react'
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { ListOfFavs } from '../components/ListOfFavs'

const GET_FAVS = gql`
    query getFavs {
        favs {
            id
            categoryId
            src
            likes
            userId
        }
    }
`

const renderProp = ({ loading, error, data }) => {
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>
    const { favs } = data
    return <ListOfFavs favs={favs}></ListOfFavs>
    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Error</p>
    // if (data) {
    //     const { photo = {} } = data;
    //     if (Object.keys(photo).length) {
    //         return <PhotoCard {...photo} loading={loading}></PhotoCard>
    //     }
    // }
    // return null
}

export const FavsWithQuery = () => (
    <Query query={GET_FAVS} fetchPolicy='network-only'>
        {renderProp}
    </Query>
)