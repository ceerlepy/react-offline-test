import React from 'react'
import { shallow } from 'enzyme'
import Header from '../Header'

describe('Header', () => {
  let mountedHeader
  let props
  beforeEach(() => {
    props = {
      from: null,
      to: null
    }
    mountedHeader = shallow(<Header {...props} />)
  })
  it('renders without crashing', () => {
    mountedHeader = shallow(<Header {...props} />)
  })
  it('renders header content with #h2', () => {
    let headerContents = mountedHeader.find('h2')
    expect(headerContents.length).toBe(1)
  })
  it('renders header content with #strong', () => {
    let headerContents = mountedHeader.find('strong')
    expect(headerContents.length).toBe(2)
  })
  it('renders header content with unvalid date', () => {
    let headerContents = mountedHeader.find('strong')
    expect(headerContents.first().text()).toEqual('---')
    expect(headerContents.at(1).text()).toEqual('---')
  })
})

describe('renders Header with unformatted date', () => {
  let mountedHeader
  let props
  beforeEach(() => {
    props = {
      from: '2019',
      to: '2020'
    }
    mountedHeader = shallow(<Header {...props} />)
  })
  it('renders without crashing', () => {
    mountedHeader = shallow(<Header {...props} />)
  })
  it('renders header content with #h3', () => {
    let headerContents = mountedHeader.find('h3')
    expect(headerContents.length).toBe(1)
  })
  it('renders header content with #strong', () => {
    let headerContents = mountedHeader.find('strong')
    expect(headerContents.length).toBe(2)
  })
  it('renders header content with corrected date', () => {
    let headerContents = mountedHeader.find('strong')
    expect(headerContents.first().text()).toEqual('2019-01-01 00:00:00')
    expect(headerContents.at(1).text()).toEqual('2020-01-01 00:00:00')
  })
})

describe('renders Header with formatted date', () => {
  let mountedHeader
  let props
  beforeEach(() => {
    props = {
      from: '2019-08-12T12:30Z',
      to: '2019-08-12T13:00Z'
    }
    mountedHeader = shallow(<Header {...props} />)
  })
  it('renders without crashing', () => {
    mountedHeader = shallow(<Header {...props} />)
  })
  it('renders header content with #strong', () => {
    let headerContents = mountedHeader.find('strong')
    expect(headerContents.length).toBe(2)
  })
  it('renders header content with valid date', () => {
    let headerContents = mountedHeader.find('strong')
    expect(headerContents.first().text()).toEqual('2019-08-12 13:30:00')
    expect(headerContents.at(1).text()).toEqual('2019-08-12 14:00:00')
  })
})
