import { gql } from 'apollo-boost';

const GET_CHARACTERS_QUERY = gql`
  query getCharacters {
    characters {
      results {
        id
        name
        status
        species
        gender
        origin {
          name
        }
        image
        location {
          name
        }
        created
      }
    }
  }
`;


export default GET_CHARACTERS_QUERY;
