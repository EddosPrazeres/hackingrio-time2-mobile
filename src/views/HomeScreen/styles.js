import styled from 'styled-components/native'
import { metrics, colors } from '../../styles'

export const Container = styled.ScrollView`
  background-color: ${colors.background};
  flex: 1;
`

export const Content = styled.View`
  margin: ${metrics.baseSpacing(0)} ${metrics.baseSpacing(2)} ${metrics.baseSpacing(2)} ${metrics.baseSpacing(2)};
`

export const Title = styled.Text`
  font-size: 18px;
  color: ${colors.black};
  margin-bottom: ${metrics.baseSpacing(2)};

`

export const ContentList = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: -17px;
`

export const ContentListItem = styled.View`
  flex-direction: column;
  margin: ${metrics.baseSpacing(0)} ${metrics.baseSpacing(2)} ${metrics.baseSpacing(2)} ${metrics.baseSpacing(0)};
  align-items: center;
  width: 74px;
`

export const ContentListItemBackground = styled.View`
  
  background-color: ${colors.white};
  width: 74px;
  height: 74px;
  border-radius: 10;
  margin-bottom: 8px;
  justify-content: center;
  align-items: center;

  border-color: #ddd;
  border-bottom-width: 0;
  box-shadow: 0px 0px 5px rgba(0,0,0,0.05);
`

export const ContentListItemBackgroundImage = styled.Image`
  height: 50px;
  width: 50px;
  
  
`

export const ContentListTitle = styled.Text`
  font-size: 12px;
  color: ${colors.black};
`

export const FlatList = styled.FlatList`
  margin: ${metrics.baseSpacing(0)} ${metrics.baseSpacing(2)};
  width: 100%;
  flex-grow: 0;
`

export const SecondContent = styled.View`
  width: 140px;
  margin-right: 8px;
  background-color: white;
  border-radius: 10;
`

export const SecondContentView = styled.View`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 50;
  border-bottom-right-radius: 50;
  background-color: ${colors.lightBlack};
  width: 140px;
  height: 89px;
`

export const SecondContentViewImage = styled.View`

`

export const SecondContentLine = styled.View`
  margin: 8px 16px 2px 16px;
  flex-direction: row;
`

export const SecondContentLineStar = styled.View`

`

export const SecondContentTitle = styled.Text`
  padding: 0 ${metrics.baseSpacing(2)};
  font-size: 12px;
  color: ${colors.black};
  margin-bottom: ${metrics.baseSpacing(0.5)};
  margin-top: ${metrics.baseSpacing(0.5)};
`


export const SecondContentLocation = styled.Text`
  padding: 0 ${metrics.baseSpacing(2)};
  font-size: 10px;
  color: ${colors.lightBlack};
  margin-bottom: ${metrics.baseSpacing(1)};
`


export const SecondContentPrice = styled.Text`
  padding: 0 ${metrics.baseSpacing(2)};
  font-size: 12px;
  color: ${colors.midlack};
  margin-bottom: ${metrics.baseSpacing(1)};
`

export const ViewBannerImage = styled.View`
  width: 100%;
  height: 250px;
  background-color: red;
  margin-bottom: 16px;
`