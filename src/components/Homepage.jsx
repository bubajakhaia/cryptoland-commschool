import React from 'react'
import millify from 'millify';
import {Typography, Row, Col, Statistic} from 'antd';
import{Link} from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import {Cryptocurrencies,News} from '../components';
import Loader from './Loader';

const {Title} = Typography;

const Homepage = () => {
  const {data, isFetching} = useGetCryptosQuery(12);
  const globalStats = data?.data?.stats;

  if(isFetching) return <Loader/>;
  return (
    <>
      <Title level={2} className='heading'>Global Crypto Stats</Title>
      <Row>
        <Col span={12}>
          <Statistic title="total cryptos" value={globalStats?.total}/>
        </Col>
        <Col span={12}>
          <Statistic title="total exchanges" value={millify(globalStats.totalExchanges)}/>
        </Col>
        <Col span={12}>
          <Statistic title="total market cap" value={millify(globalStats.totalMarketCap)}/>
        </Col>
        <Col span={12}>
          <Statistic title="total 24h volume" value={millify(globalStats.total24hVolume)}/>
        </Col>
        <Col span={12}>
        <Statistic title="total markets" value={millify(globalStats.totalMarkets)}/>
        </Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Top 10 Cryptos in the world</Title>
        <Title level={2} className='show-more'><Link to='/cryptocurrencies'>show more</Link></Title>
      </div>
      <Cryptocurrencies simplified={true}/>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Lates Crypto News</Title>
        <Title level={2} className='show-more'><Link to='/news'>show more</Link></Title>
      </div>
      <News simplified={true}/>
    </>
  )
}

export default Homepage
