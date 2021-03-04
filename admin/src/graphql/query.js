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
const GET_INITATIONS = gql`
  query {
    get_initations {
      id
      title
      des
      image
      create_at
    }
  }
`;
const GET_INITATION = gql`
  query($id: ID!) {
    get_initation(id: $id) {
      id
      title
      des
      image
    }
  }
`;
export { GET_DONATIONS, GET_MOST_DONATIONS, GET_INITATIONS, GET_INITATION };
