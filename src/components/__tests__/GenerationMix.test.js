import React from 'react'
import { shallow } from 'enzyme'
import GenerationMix from '../GenerationMix'

describe('GenerationMix with empty props', () => {
  let props
  let mountedGenerationMix
  let generationNoItem

  beforeEach(() => {
    props = {
      fuel: null,
      perc: null
    }
  })

  it('renders without crashing', () => {
    mountedGenerationMix = shallow(<GenerationMix {...props} />)
  })

  it('renders any element', () => {
    generationNoItem = mountedGenerationMix.find('.generationNoItem')
    expect(generationNoItem.exists()).toEqual(true)
  })

  it('renders generation noitem class when fuel and perc is null', () => {
    let noItemTd = generationNoItem.find('td')
    expect(noItemTd.text()).toBe('There is no generation mix')
  })
})

describe('GenerationMix without props', () => {
  let mountedGenerationMix
  let generationNoItem

  beforeEach(() => {
    mountedGenerationMix = shallow(<GenerationMix />)
  })

  it('renders without crashing', () => {
    mountedGenerationMix = shallow(<GenerationMix />)
  })

  it('renders any element', () => {
    generationNoItem = mountedGenerationMix.find('.generationNoItem')
    expect(generationNoItem.exists()).toEqual(true)
  })

  it('renders generation noitem class when no props', () => {
    let noItemTd = generationNoItem.find('td')
    expect(noItemTd.text()).toBe('There is no generation mix')
  })
})

describe('GenerationMix with fuel', () => {
  let props
  let mountedGenerationMix
  let generationMixCls
  let generationMixTd

  beforeEach(() => {
    props = {
      fuel: 'fuel-test',
      perc: null
    }

    mountedGenerationMix = shallow(<GenerationMix {...props} />)
  })

  it('renders without crashing', () => {
    mountedGenerationMix = shallow(<GenerationMix {...props} />)
  })

  it('renders mix cls element', () => {
    generationMixCls = mountedGenerationMix.find('.generationMixCls')
    expect(generationMixCls.exists()).toEqual(true)
  })

  it('renders td', () => {
    generationMixTd = generationMixCls.find('td')
    expect(generationMixTd.exists()).toEqual(true)
    expect(generationMixTd.length).toBe(2)
  })

  it('renders fuel value', () => {
    expect(generationMixTd.first().text()).toEqual('fuel-test')
    expect(generationMixTd.at(1).text()).toEqual('')
  })
})

describe('GenerationMix with perc', () => {
  let props
  let mountedGenerationMix
  let generationMixCls
  let generationMixTd

  beforeEach(() => {
    props = {
      fuel: null,
      perc: 4.5
    }

    mountedGenerationMix = shallow(<GenerationMix {...props} />)
  })

  it('renders without crashing', () => {
    mountedGenerationMix = shallow(<GenerationMix {...props} />)
  })

  it('renders mix cls element', () => {
    generationMixCls = mountedGenerationMix.find('.generationMixCls')
    expect(generationMixCls.exists()).toEqual(true)
  })

  it('renders td', () => {
    generationMixTd = generationMixCls.find('td')
    expect(generationMixTd.exists()).toEqual(true)
    expect(generationMixTd.length).toBe(2)
  })

  it('renders perc value', () => {
    expect(generationMixTd.first().text()).toEqual('')
    expect(generationMixTd.at(1).text()).toEqual('4.5')
  })
})
