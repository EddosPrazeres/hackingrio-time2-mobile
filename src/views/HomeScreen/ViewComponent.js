import React, { useState, useEffect } from 'react'
import { Container, Content, Title, ContentList, 
  ContentListItem, ContentListItemBackground, ContentListItemBackgroundImage,
  ContentListTitle, SecondContent, SecondContentView, SecondContentViewImage, 
  SecondContentLine, SecondContentLineStar, SecondContentTitle, 
  SecondContentLocation, SecondContentPrice, FlatList, ViewBannerImage} from './styles'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import PropTypes from 'prop-types'
import Swiper from 'react-native-swiper'


const renderItem = (item, index) => (
  <ContentListItem key={index}>
    <ContentListItemBackground>
      <ContentListItemBackgroundImage resizeMode={`contain`}source={item.image}/>
    </ContentListItemBackground>
    <ContentListTitle>{item.name}</ContentListTitle>
  </ContentListItem>
)

const renderFlatItem = (item) => (
  <SecondContent>
    <SecondContentView>
      <SecondContentViewImage />
    </SecondContentView>
    <SecondContentLine>
      {
        item.stars.map(()=> <Icon name="star" size={14} color="#FFCF48" />)
      }      
    </SecondContentLine>
    <SecondContentTitle>{item.name}</SecondContentTitle>
    <SecondContentLocation>{item.location}</SecondContentLocation>
    <SecondContentPrice>{item.price}</SecondContentPrice>
  </SecondContent>
)

const ViewComponent = ({title, IconButtons, servicesData}) => {
  return (
    <Container>
       <ViewBannerImage key={0}/>
      <Content>
        <Title>Lorem Ipsum dolor</Title>
        <ContentList>
          {
            IconButtons.map((item, index) => {
              return renderItem(item, index)
            })
          }
        </ContentList>
      </Content>
    
      <Title style={{marginLeft: 16}}>Lorem Ipsum dolor</Title>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={false}
        data={servicesData}
        renderItem={({ item }) => renderFlatItem(item)}
        keyExtractor={(item, index) => index}
      />
    </Container>
  );
}

ViewComponent.defaultProps = {
  IconButtons: []
}

ViewComponent.propTypes = {

}

export default ViewComponent