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
//============member=========
const ADD_MEMBER = gql`
  mutation($name: String!, $position: String!, $image: String!) {
    add_member(name: $name, position: $position, image: $image) {
      message
    }
  }
`;
const DELETE_MEMBER = gql`
  mutation($id: ID!) {
    delete_member(id: $id) {
      message
    }
  }
`;
const EDIT_MEMBER = gql`
  mutation($id: ID!, $name: String!, $position: String!, $image: String!) {
    edit_member(id: $id, name: $name, position: $position, image: $image) {
      message
    }
  }
`;
//===========About========
const ADD_ABOUT = gql`
  mutation($title: String!, $des: String!) {
    add_about(title: $title, des: $des) {
      message
    }
  }
`;
const EDIT_ABOUT = gql`
  mutation($id: ID!, $title: String!, $des: String!) {
    edit_about(id: $id, title: $title, des: $des) {
      message
    }
  }
`;
const DELETE_ABOUT = gql`
  mutation($id: ID!) {
    delete_about(id: $id) {
      message
    }
  }
`;
//==========Project=========
const ADD_PROJECT = gql`
  mutation($title: String!, $des: String!, $image: String!) {
    add_project(title: $title, des: $des, image: $image) {
      message
    }
  }
`;
const EDIT_PROJECT = gql`
  mutation($id: ID!, $title: String!, $des: String!, $image: String!) {
    edit_project(id: $id, title: $title, des: $des, image: $image) {
      message
    }
  }
`;
const DELETE_PROJECT = gql`
  mutation($id: ID!) {
    delete_project(id: $id) {
      message
    }
  }
`;
const ADD_BLOG = gql`
  mutation($title: String!, $des: String!, $image: String!) {
    add_blog(title: $title, des: $des, image: $image) {
      message
    }
  }
`;
const DELETE_BLOG = gql`
  mutation($id: ID!) {
    delete_blog(id: $id) {
      message
    }
  }
`;
const EDIT_BLOG = gql`
  mutation($id: ID!, $title: String!, $des: String!, $image: String!) {
    edit_blog(id: $id, title: $title, des: $des, image: $image) {
      message
    }
  }
`;

const ADD_PLANTS = gql`
  mutation(
    $name: String!
    $sciname: String!
    $family: String!
    $des: String!
    $image: String!
  ) {
    add_plants(
      name: $name
      sciname: $sciname
      family: $family
      des: $des
      image: $image
    ) {
      message
    }
  }
`;
const DELETE_PLANTS = gql`
  mutation($id: ID!) {
    delete_plants(id: $id) {
      message
    }
  }
`;
const EDIT_PLANTS = gql`
  mutation(
    $id: ID!
    $name: String!
    $sciname: String!
    $family: String!
    $des: String!
    $image: String!
  ) {
    edit_plants(
      id: $id
      name: $name
      sciname: $sciname
      family: $family
      des: $des
      image: $image
    ) {
      message
    }
  }
`;
export {
  ADD_PLANTS,
  DELETE_PLANTS,
  EDIT_PLANTS,
  ADD_BLOG,
  DELETE_BLOG,
  EDIT_BLOG,
  DELETE_DONATIONER,
  LOGIN,
  ADD_INITATION,
  DELETE_INITATION,
  EDIT_INITATION,
  ADD_MEMBER,
  DELETE_MEMBER,
  EDIT_MEMBER,
  ADD_ABOUT,
  EDIT_ABOUT,
  DELETE_ABOUT,
  ADD_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT,
};
