import { gql } from "@apollo/client"

const DONATE_TREES = gql`
  mutation(
    $tree: Int!
    $name: String!
    $email: String!
    $phone: String!
    $user_message: String!
    $anonymous: Boolean
    $public: Boolean
  ) {
    donation(
      tree: $tree
      name: $name
      email: $email
      phone: $phone
      user_message: $user_message
      anonymous: $anonymous
      public: $public
    ) {
      message
    }
  }
`

export { DONATE_TREES }
