import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Row, Col, Button, Input, Spin } from "antd";
import Footer from "../components/footer";
import { GET_DONATIONS, GET_MOST_DONATIONS } from "../graphql/query";
import { useQuery } from "@apollo/client";
import moment from "moment";
import InfiniteScroll from "react-infinite-scroll-component";
import { FlapperSpinner } from "react-spinners-kit";

const Alldonate = () => {
  const [value, setValue] = useState("recent");
  const [search, setSearch] = useState("");
  const [hasMoreItems, setHasMoreItems] = useState(true);
  //=====get Data==========
  const {
    loading,
    data: donateData,
    error,
    fetchMore,
  } = useQuery(GET_DONATIONS);
  const {
    loading: lodingMostDonate,
    data: mostDonateData,
    error: errorMostDonate,
    fetchMore: fetchMoreMostDonate,
  } = useQuery(GET_MOST_DONATIONS);
  if (loading || lodingMostDonate) return null;
  if (error || errorMostDonate) return `Error! ${error.message}`;

  // console.log(donateData);
  const active = (e) => {
    const recents = document.getElementById("most-recents");
    const trees = document.getElementById("most-trees");
    if (e.target.id === "most-recents") {
      trees.className = "clicked";
      recents.className = "";
      recents.style.zIndex = 2;
      trees.style.zIndex = 1;
      setValue("recent");
    } else if (e.target.id === "most-trees") {
      recents.className = "clicked";
      trees.className = "";
      trees.style.zIndex = 2;
      recents.style.zIndex = 1;
      setValue("most");
    }
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const results = !search
    ? donateData.get_donations
    : donateData.get_donations.filter((data) =>
        data.name.toLowerCase().includes(search.toLocaleLowerCase())
      );
  const resultsThemost = !search
    ? mostDonateData.get_most_trees
    : mostDonateData.get_most_trees.filter((data) =>
        data.name.toLowerCase().includes(search.toLocaleLowerCase())
      );

  return (
    <div className="background-body">
      <img className="cloud" src="/images/cloud2.png" alt="cloud" />
      <img className="cloud2" src="/images/cloud2.png" alt="cloud" />
      <img className="cloud3" src="/images/cloud2.png" alt="cloud" />
      <div className="home-banner">
        <div className="container">
          <Row className="banner" justify="space-between" align="middle">
            <Col
              className="text"
              xs={24}
              sm={24}
              md={12}
              lg={14}
              // xs={{ span: 24 }}
              // sm={{ span: 24 }}
              // lg={{ span: 10 }}
              // xl={{ span: 10 }}
            >
              <p
                className="home-text-title"
                style={{
                  fontSize: "22px",
                  color: "#0D330A",
                  fontWeight: "700",
                }}
              >
                In search of
              </p>
              <h2>The Next Small Things</h2>
              <p className="desc-home-top" style={{ margin: "20px 0" }}>
                Protect, preserve, and restore our rain forests for generations
                ahead.
              </p>
              <a href="#form">
                <Button type="primary" className="join-us-btn">
                  JOIN US
                </Button>
              </a>
            </Col>
            <Col
              className="video"
              xs={24}
              sm={24}
              md={12}
              lg={10}
              // xs={{ span: 24 }}
              // sm={{ span: 24 }}
              // lg={{ span: 12 }}
              // xl={{ span: 12 }}
            >
              <img className="earth" src="/images/Green-World.png "></img>
            </Col>
          </Row>
        </div>
        <div className="big-banner"></div>
      </div>
      <div className="all-leaderboard">
        <center>
          <h1>LEADERBOARD</h1>
        </center>
        <Row align="middle" justify="center">
          <Col className="search-box gutter-row">
            <Input
              value={search}
              onChange={handleSearch}
              className="search"
              type="text"
              placeholder="Search"
            />
            <FaSearch className="fa-search" />
          </Col>
          <Col offset={1} className="gutter-row most-recent-trees">
            <button value="recent" id="most-recents" onClick={active}>
              Most Recents
            </button>
            <button
              value="most"
              id="most-trees"
              className="clicked"
              onClick={active}
            >
              Most Trees
            </button>
          </Col>
        </Row>
        <br />
      </div>
      <div>
        {value === "recent" ? (
          <div className="container user-list">
            {results.map((res, index) => {
              const { tree, name, anonymous, create_at, user_message } = res;
              return (
                <Row className="list" align="middle" key={index}>
                  <Col xs={24} sm={24} md={17} xl={17}>
                    <img
                      // src="/images/icon1.svg"
                      src="/images/Vitamin-air-circle-2-blue.png"
                      className="avatar"
                      alt="vitaminair"
                    />
                    <div className="leader-title">
                      <p className="list-title">
                        {anonymous === false ? name : "Anonymous"}
                      </p>
                      <p className="list-message">{user_message}</p>
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={7} xl={7}>
                    <div className="leader-float">
                      {tree === 1 ? (
                        <spin className="badge">{tree} tree</spin>
                      ) : (
                        <spin className="badge">{tree} trees</spin>
                      )}
                      <div className="leader-date">
                        {moment.unix(create_at / 1000).format(" Do MMMM YYYY")}
                      </div>
                    </div>
                  </Col>
                </Row>
              );
            })}
            <InfiniteScroll
              dataLength={donateData.get_donations.length}
              next={async () => {
                fetchMore({
                  variables: {
                    offset: donateData.get_donations.length,
                  },
                  updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev;

                    if (fetchMoreResult.get_donations.length < 8) {
                      setHasMoreItems(false);
                    }
                    <FlapperSpinner size={30} color="#00ff89" />;
                    return Object.assign({}, prev, {
                      get_donations: [
                        ...prev.get_donations,
                        ...fetchMoreResult.get_donations,
                      ],
                    });
                  },
                });
              }}
              hasMore={hasMoreItems}
              loader={
                // <Content style={{ marginTop: "50px" }}>
                <center style={{ marginTop: "50px" }}>
                  <Spin></Spin>
                </center>
                // </Content>
              }
              endMessage={null}
            ></InfiniteScroll>
          </div>
        ) : (
          <div className="container user-list">
            {resultsThemost.map((res, index) => {
              const { tree, name, anonymous, create_at, user_message } = res;
              // console.log(anonymous);
              return (
                <Row className="list" align="middle" key={index}>
                  <Col xs={24} sm={24} md={17} xl={17}>
                    <img
                      src="/images/Vitamin-air-circle-2-blue.png"
                      className="avatar"
                      alt="vitaminair"
                    />
                    <div className="leader-title">
                      <p className="list-title">
                        {anonymous === false ? name : "Anonymous"}
                      </p>
                      <p className="list-message">{user_message}</p>
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={7} xl={7}>
                    <div className="leader-float">
                      {tree === 1 ? (
                        <spin className="badge">{tree} tree</spin>
                      ) : (
                        <spin className="badge">{tree} trees</spin>
                      )}
                      <div className="leader-date">
                        {moment.unix(create_at / 1000).format(" Do MMMM YYYY")}
                      </div>
                    </div>
                  </Col>
                </Row>
              );
            })}
          </div>
        )}
        <InfiniteScroll
          dataLength={mostDonateData.get_most_trees.length}
          next={async () => {
            fetchMoreMostDonate({
              variables: {
                offset: mostDonateData.get_most_trees.length,
              },
              updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;

                if (fetchMoreResult.get_most_trees.length < 8) {
                  setHasMoreItems(false);
                }
                <FlapperSpinner size={30} color="#00ff89" />;
                return Object.assign({}, prev, {
                  get_most_trees: [
                    ...prev.get_most_trees,
                    ...fetchMoreResult.get_most_trees,
                  ],
                });
              },
            });
          }}
          hasMore={hasMoreItems}
          //   loader={
          //     // <Content style={{ marginTop: "50px" }}>
          //     <center style={{ marginTop: "50px" }}>
          //       <Spin></Spin>
          //     </center>
          //     // </Content>
          //   }
          endMessage={null}
        ></InfiniteScroll>
      </div>
      <Footer />
    </div>
  );
};

export default Alldonate;
