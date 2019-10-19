import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ViewComponent from './ViewComponent'
class HomeScreen extends Component {

  constructor(props){
    super(props)
    this.state = {
      iconButtons: [
        {
          image: require("../../../assets/images/mobile-phone.png"),
          name: "Banco"
        },
        {
          image: require("../../../assets/images/slumber.png"),
          name: "Hotéis"
        },
        {
          image: require("../../../assets/images/Travel.png"),
          name: "Experiências"
        },
        {
          image: require("../../../assets/images/Travel.png"),
          name: "Guias"
        },
        {
          image: require("../../../assets/images/shipping.png"),
          name: "Passagens"
        },
        {
          image: require("../../../assets/images/flight.png"),
          name: "Seguros"
        },
        {
          image: require("../../../assets/images/mobile.png"),
          name: "Mobilidade"
        },
        {
          image: require("../../../assets/images/study.png"),
          name: "Dicas"
        }
      ],
      servicesData: [
        {
          image: '',
          stars: [1,2,3,4,5],
          name: 'Studio 42 prédio famoso centro SP',
          location: 'São Paulo',
          price: '$250/noite'
        },
        {
          image: '',
          stars: [1,2,3,4,5],
          name: 'Studio 42 prédio famoso centro SP',
          location: 'São Paulo',
          price: '$250/noite'
        },
        {
          image: '',
          stars: [1,2,3,4,5],
          name: 'Studio 42 prédio famoso centro SP',
          location: 'São Paulo',
          price: '$250/noite'
        },
        {
          image: '',
          stars: [1,2,3,4,5],
          name: 'Studio 42 prédio famoso centro SP',
          location: 'São Paulo',
          price: '$250/noite'
        },
        {
          image: '',
          stars: [1,2,3,4,5],
          name: 'Studio 42 prédio famoso centro SP',
          location: 'São Paulo',
          price: '$250/noite'
        }, 
        {
          image: '',
          stars: [1,2,3,4,5],
          name: 'Studio 42 prédio famoso centro SP',
          location: 'São Paulo',
          price: '$250/noite'
        }
      ]
    }
  }

  render(){
    return(
      <ViewComponent IconButtons={this.state.iconButtons} servicesData={this.state.servicesData}/>
    )
  }
}

HomeScreen.defaultProps = {

}

HomeScreen.propTypes = {

}

const mapStateToProps = state => {
  return {
    initial:[]
  }
}

export default connect(mapStateToProps)(HomeScreen)