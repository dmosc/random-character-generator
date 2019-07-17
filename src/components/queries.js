import { gql } from "apollo-boost";

const GET_RANDOM_CHARACTER = gql`
  query randomCharacter($randId: ID) {
    character(id: $randId) {
      id
      name
      status
      species
      gender
      origin {
        name
      }
      location {
        name
      }
      image
    }
  }
`;

export { GET_RANDOM_CHARACTER };
