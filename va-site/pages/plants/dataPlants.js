import React from "react";
import { useQuery } from "@apollo/client";
import { GET_A_PLANTS, GET_PLANTS } from "../../graphql/query";
import { Col, Row, Badge } from "antd";

const dataPlants = () => {
  const { data, loading, error } = useQuery(GET_PLANTS);
  if (loading) return "loadin....";
  // console.log(data);
  //   var x = JSON.stringify(data);
  //   console.log(x);
  //   const map = JSON.parse(x.get_plants.map((res) => res.name));
  //   console.log(x);

  return <div>{data}</div>;
};

export default dataPlants;
