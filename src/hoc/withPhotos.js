import { graphql } from 'react-apollo'; // PERMITE REALIZAR CONSULTAS
import { gql } from 'apollo-boost'; // PERMITE HACER LAS CONSULTAS COMO STRINGS


const GET_PHOTOS = gql`
query getPhotos($categoryId: ID){
  photos(categoryId: $categoryId){
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`


export const withPhotos = graphql(GET_PHOTOS);