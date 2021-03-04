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
export { DELETE_DONATIONER, LOGIN };
