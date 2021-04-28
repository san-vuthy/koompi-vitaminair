import { gql } from "@apollo/client";

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
const GET_PROJECT = gql`
  query($id: ID!) {
    get_project(id: $id) {
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
      create_at
    }
  }
`;
const GET_BLOG = gql`
  query($id: ID!) {
    get_blog(id: $id) {
      id
      title
      des
      image
      create_at
    }
  }
`;
const GET_BLOGS = gql`
  query($limit: Int!, $offset: Int!) {
    get_blogs(limit: $limit, offset: $offset) {
      id
      title
      des
      image
      create_at
    }
  }
`;

const GET_PLANTS = gql`
  query($limit: Int!, $offset: Int!) {
    get_plants(limit: $limit, offset: $offset) {
      id
      name
      sciname
      family
      des
      image
      create_at
    }
  }
`;
const GET_A_PLANTS = gql`
  query($id: ID!) {
    get_a_plants(id: $id) {
      id
      name
      sciname
      family
      des
      image
    }
  }
`;

export {
  GET_A_PLANTS,
  GET_PLANTS,
  GET_BLOGS,
  GET_BLOG,
  GET_ABOUT,
  GET_PROJECT,
  GET_INITATION,
  GET_DONATIONS,
  GET_MOST_DONATIONS,
  GET_ABOUTS,
  GET_INITATIONS,
  GET_PROJECTS,
  GET_MEMBERS,
};
