import React from 'react'
import { shallow } from 'enzyme'
import UkEnergyMix from '../UkEnergyMix'
import axios from 'axios'

describe('UkEnergyMix', () => {
  let mountedUkEnergyMix
  beforeEach(() => {
    mountedUkEnergyMix = shallow(<UkEnergyMix />)
  })

  it('renders a header', () => {
    let headers = mountedUkEnergyMix.find('Header')
    expect(headers.length).toBe(1)
  })

  it('renders a GenerationMix', () => {
    let generationMixTable = mountedUkEnergyMix.find('GenerationMixTable')
    expect(generationMixTable.length).toBeGreaterThan(0)
  })

  it('calls axios.get in #componentDidMount', () => {
    return mountedUkEnergyMix
      .instance()
      .componentDidMount()
      .then(() => {
        expect(axios.get).toHaveBeenCalled()
      })
  })

  it('calls axios.get with correct url', () => {
    return mountedUkEnergyMix
      .instance()
      .componentDidMount()
      .then(() => {
        expect(axios.get).toHaveBeenCalledWith('https://api.carbonintensity.org.uk/generation')
      })
  })

  it('update state with api data', () => {
    return mountedUkEnergyMix
      .instance()
      .componentDidMount()
      .then(() => {
        expect(mountedUkEnergyMix.state()).toHaveProperty('from', '2019-08-12T12:30Z')
        expect(mountedUkEnergyMix.state()).toHaveProperty('to', '2019-08-12T13:00Z')
        expect(mountedUkEnergyMix.state()).toHaveProperty('generationMixArr', [
          {
            fuel: 'mock_biomass',
            perc: 4.8
          },
          {
            fuel: 'mock_coal',
            perc: 2.5
          }
        ])
      })
  })
})
