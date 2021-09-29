// import React from 'react'
import { Row, Col, Input, Button } from 'antd';
import { FaSearch } from 'react-icons/fa';
import { useQuery } from '@apollo/client';
import { GET_DONATIONS, GET_MOST_DONATIONS } from '../../graphql/query';
import moment from 'moment';
import { useState } from 'react';
function Leaderboard() {
  const [value, setValue] = useState('recent');
  const [search, setSearch] = useState('');

  //=====get Data==========
  const { loading, data: donateData, error } = useQuery(GET_DONATIONS);
  const {
    loading: lodingMostDonate,
    data: mostDonateData,
    error: errorMostDonate,
  } = useQuery(GET_MOST_DONATIONS);

  if (loading || lodingMostDonate) return null;

  if (error || errorMostDonate) return `Error! ${error.message}`;

  // console.log(donateData);
  const active = (e) => {
    const recents = document.getElementById('most-recents');
    const trees = document.getElementById('most-trees');
    if (e.target.id === 'most-recents') {
      trees.className = 'clicked';
      recents.className = '';
      recents.style.zIndex = 2;
      trees.style.zIndex = 1;
      setValue('recent');
    } else if (e.target.id === 'most-trees') {
      recents.className = 'clicked';
      trees.className = '';
      trees.style.zIndex = 2;
      recents.style.zIndex = 1;
      setValue('most');
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
    <div style={{ marginTop: '100px' }}>
      <div className="container">
        <h1>LEADERBOARD</h1>
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
        {value === 'recent' ? (
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
                        {anonymous === false ? name : 'Anonymous'}
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
                        {moment.unix(create_at / 1000).format('Do MMMM YYYY')}
                      </div>
                    </div>
                  </Col>
                </Row>
              );
            })}
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
                        {anonymous === false ? name : 'Anonymous'}
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
                        {moment.unix(create_at / 1000).format(' Do MMMM YYYY')}
                      </div>
                    </div>
                  </Col>
                </Row>
              );
            })}
          </div>
        )}
        <center>
          <a href="#form">
            <Button className="add-tree-btn">Plant Your Tree</Button>
          </a>
        </center>
      </div>
    </div>
  );
}

export default Leaderboard;
