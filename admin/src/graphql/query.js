import { gql } from "@apollo/client";

const GET_DONATIONS = gql`
  query {
    get_donations {
      id
      tree
      name
      create_at
      user_message
      anonymous
      email
    }
  }
`;
const GET_MOST_DONATIONS = gql`
  query {
    get_most_trees {
      tree
      name
      create_at
      user_message
      anonymous
    }
  }
`;
export { GET_DONATIONS, GET_MOST_DONATIONS };
