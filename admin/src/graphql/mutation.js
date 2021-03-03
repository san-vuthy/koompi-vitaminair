import { gql } from "@apollo/client";

const DELETE_DONATIONER = gql`
  mutation($id: ID!) {
    delete_donationer(id: $id) {
      message
    }
  }
`;
export { DELETE_DONATIONER };
