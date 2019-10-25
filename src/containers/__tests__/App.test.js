import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'

describe('App', () => {
  let mountedApp
  beforeEach(() => {
    mountedApp = shallow(<App />)
  })

  it('renders without crashing', () => {
    let mountedAppWithClassName = mountedApp.find('.App')
    expect(mountedAppWithClassName.length).toBe(1)
  })

  it('renders a UkEnergyMix', () => {
    let ukEnergyMixComp = mountedApp.find('UkEnergyMix')
    expect(ukEnergyMixComp.length).toBe(1)
  })
})
