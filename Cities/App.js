/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Component} from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import Tabs from './src'

const key = 'state'

const initialState = [{
  city: 'Paris',
  country: 'Freance',
  id: 0,
  locations: []
},
{
  city: 'Busan',
  country: 'Korea',
  id: 1,
  locations: []
}]


///


export default class App extends Component {
  state = {
    cities: []
    /* cities data
      {city: string, country: string, id: uuid, location:{name, info}}
    */ 
  }

  async componentDidMount() {
    console.log("componentDidMount")
    try {
      let cities = await AsyncStorage.getItem(key)
      if(cities){
        cities = JSON.parse(cities)
        this.setState({ cities })
      }
    }
    catch (e) {
      console.log('error from AsyncStorage: ', e)
    }
  }
  

  addCity = (city) => {
    const cities = this.state.cities
    cities.push(city)
    this.setState({ cities })
    AsyncStorage.setItem(key, JSON.stringify(cities))
      .then(() => console.log('storage updated!'))
      .catch(e => console.log('e: ', e))
  }
  addLocation = (location, city) => {
    const index = this.state.cities.findIndex(item => {
      return item.id === city.id
    })
    const chosenCity = this.state.cities[index]
    chosenCity.locations.push(location)
    const cities = [
      ...this.state.cities.slice(0, index),
      chosenCity,
      ...this.state.cities.slice(index+1)
    ]
    this.setState({cities}, ()=>{
      AsyncStorage.setItem(key, JSON.stringify(cities))
      .then(() => console.log('storage updated!'))
      .catch(e => console.log('e: ', e))
    })
  }
  render(){
    return(
      <Tabs
        screenProps={{
          cities: this.state.cities,
          addCity: this.addCity,
          addLocation:this.addLocation
        }}></Tabs>
    )
  }

}

