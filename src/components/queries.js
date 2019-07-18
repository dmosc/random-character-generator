import { gql } from "apollo-boost";

const GET_RANDOM_CHARACTER = gql`
  query($_id: ID) {
    character(_id: $_id) {
      _id
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
