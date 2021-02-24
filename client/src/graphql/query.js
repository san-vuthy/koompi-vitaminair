import { gql } from "@apollo/client"

const GET_DONATIONS = gql`
  query {
    get_donations {
      tree
      name
      create_at
      user_message
      anonymous
    }
  }
`
export { GET_DONATIONS }
