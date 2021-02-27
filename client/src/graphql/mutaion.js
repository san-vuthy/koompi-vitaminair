import { gql } from "@apollo/client"

const DONATE_TREES = gql`
  mutation(
    $tree: Int!
    $team: String!
    $name: String!
    $email: String!
    $phone: String!
    $user_message: String!
    $selectType: String!
    $anonymous: Boolean
    $public: Boolean
  ) {
    donation(
      tree: $tree
      team: $team
      name: $name
      email: $email
      phone: $phone
      user_message: $user_message
      selectType: $selectType
      anonymous: $anonymous
      public: $public
    ) {
      message
    }
  }
`

export { DONATE_TREES }
