import React, { useEffect, useState } from 'react'
import millify from 'millify';
import {Link} from 'react-router-dom';
import{Card, Row, Col, Input} from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';


const Cryptocurrencies = ({simplified}) => {
  const count = simplified? 12: 100;
  const {data: cryptosList, isFetching} = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(function (){

    const filteredData = cryptosList?.data?.coins.filter(c=> c.name.toLowerCase().includes(searchTerm.toLowerCase()));
  
    setCryptos(filteredData);
  },[cryptosList, searchTerm]
)
if(isFetching) return <Loader/>;


  return (
    <>
    {!simplified&&(
      <div className='search-crypto'>
      <Input placeholder="Search" onChange={e=> setSearchTerm(e.target.value)}/>
    </div>
    )}
    
      <Row gutter={[16,16]} className='crypto-card-container'>
        {cryptos?.map((c)=>(
          <Col xs={24} sm={12} lg={6} className='crypto-card' key={c.uuid}>
            <Link to={`/crypto/${c.uuid}`}>
              <Card title={`${c.rank}. ${c.name}`} 
                    extra={<img className='crypto-image' src={c.iconUrl} alt="crpt"/>}
                    hoverable> 
                <p>Price: {millify(c.price)}</p>    
                <p>Market cap: {millify(c.marketCap)}</p>    
                <p>Daily change: {millify(c.change)}</p>    
              </Card>
            </Link>
          </Col>
        )
        )}
      </Row>
      
    </>
  )
}

export default Cryptocurrencies
