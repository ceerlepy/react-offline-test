import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import GenerationMixTable from '../components/GenerationMixTable'

class UkEnergyMix extends Component {
  constructor(props) {
    super(props)
    this.state = {
      from: null,
      to: null,
      generationMixArr: []
    }
  }
  async componentDidMount() {
    let response = await axios.get('https://api.carbonintensity.org.uk/generation')
    this.setState({
      from: response.data.data.from,
      to: response.data.data.to,
      generationMixArr: response.data.data.generationmix
    })
  }
  render() {
    return (
      <Fragment>
        <Header from={this.state.from} to={this.state.to} />
        <GenerationMixTable generationMixArr={this.state.generationMixArr} />
      </Fragment>
    )
  }
}

export default UkEnergyMix
