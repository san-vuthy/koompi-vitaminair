import { gql } from "@apollo/client";

const DELETE_DONATIONER = gql`
  mutation($id: ID!) {
    delete_donationer(id: $id) {
      message
    }
  }
`;
const LOGIN = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      message
    }
  }
`;
const ADD_INITATION = gql`
  mutation($title: String!, $des: String!, $image: String!) {
    add_initation(title: $title, des: $des, image: $image) {
      message
    }
  }
`;
const DELETE_INITATION = gql`
  mutation($id: ID!) {
    delete_initation(id: $id) {
      message
    }
  }
`;
const EDIT_INITATION = gql`
  mutation($id: ID!, $title: String!, $des: String!, $image: String!) {
    edit_initation(id: $id, title: $title, des: $des, image: $image) {
      message
    }
  }
`;
export {
  DELETE_DONATIONER,
  LOGIN,
  ADD_INITATION,
  DELETE_INITATION,
  EDIT_INITATION,
};
