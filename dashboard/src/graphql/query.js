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
//==========initation============
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
//=========member============
const GET_MEMBERS = gql`
  query {
    get_members {
      id
      name
      image
      create_at
      position
    }
  }
`;
const GET_MEMBER = gql`
  query($id: ID!) {
    get_member(id: $id) {
      id
      position
      name
      image
      create_at
    }
  }
`;
//=========about============
const GET_ABOUTS = gql`
  query {
    get_abouts {
      id
      title
      des
      create_at
    }
  }
`;
const GET_ABOUT = gql`
  query($id: ID!) {
    get_about(id: $id) {
      id
      title
      des
      create_at
    }
  }
`;
//==========initation============
const GET_PROJECTS = gql`
  query {
    get_projects {
      id
      title
      des
      image
      create_at
    }
  }
`;
const GET_PROJECT = gql`
  query($id: ID!) {
    get_project(id: $id) {
      id
      title
      des
      image
    }
  }
`;
export {
  GET_DONATIONS,
  GET_MOST_DONATIONS,
  GET_INITATIONS,
  GET_INITATION,
  GET_MEMBERS,
  GET_MEMBER,
  GET_ABOUT,
  GET_ABOUTS,
  GET_PROJECTS,
  GET_PROJECT,
};
