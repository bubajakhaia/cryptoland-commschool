import React from 'react';
import {useState} from 'react';
import {Select, Typography, Row, Col, Avatar, Card} from 'antd';
import moment from 'moment';
import { useGetNewsQuery } from '../services/cryptoNewsApi';

const{ Text, Title} = Typography;
const{ Option} = Select;


const News = ({simplified}) => {

  const { data: newsList } = useGetNewsQuery();
  const data = simplified ?   newsList?.data.slice(0,6) : newsList?.data;


    return (
    <>
      <Row gutter={[24, 24]}>
      
      {data?.map((d)=>(
        <Col xs={24} sm={12} lg={8} key={d.description}>
          <Card hoverable className='news-card'>
            <a href={d.url} target="_blank" rel="noreferrer">
              <div className='news-image-container'>
                <Title className='news-title' level={4}>
                  {d.title}
                </Title>
                <img src={d.thumbnail} alt="news" className='news-image'></img>
              </div>
              <p>
                {d.description > 100? `${d.description.substring(0,100)} ...`
                :
                d.description}
              </p>
              <div className='provider-container'>
                <div>
                  <Avatar src={d.thumbnail}/>
                </div>
                <Text>{moment(d.createdAt).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
      </Row>
    </>
  )
}

export default News
