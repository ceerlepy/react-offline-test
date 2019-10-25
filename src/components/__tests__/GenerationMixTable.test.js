import React from 'react'
import { shallow } from 'enzyme'
import GenerationMixTable from '../GenerationMixTable'

describe('GenerationMixTable without props', () => {
  let mountedGenerationMixTable

  beforeEach(() => {
    mountedGenerationMixTable = shallow(<GenerationMixTable />)
  })

  it('renders without crashing', () => {
    mountedGenerationMixTable = shallow(<GenerationMixTable />)
  })

  it('renders generation mix element when no passed props to it', () => {
    let generationMixItem = mountedGenerationMixTable.find('GenerationMix')
    expect(generationMixItem.exists()).toEqual(true)
  })
})

describe('GenerationMixTable with props', () => {
  let props
  let mountedGenerationMixTable

  beforeEach(() => {
    props = {
      generationMixArr: [
        {
          fuel: 'abc',
          perc: 4.5
        }
      ]
    }

    mountedGenerationMixTable = shallow(<GenerationMixTable {...props} />)
  })

  it('renders without crashing', () => {
    mountedGenerationMixTable = shallow(<GenerationMixTable {...props} />)
  })

  it('renders generation mix element when generation mix array is not empty', () => {
    let generationMixItem = mountedGenerationMixTable.find('GenerationMix')
    expect(generationMixItem.exists()).toEqual(true)
  })
})

describe('GenerationMixTable with undefined props', () => {
  let props
  let mountedGenerationMixTable

  beforeEach(() => {
    props = {
      generationMixArr: undefined
    }
    mountedGenerationMixTable = shallow(<GenerationMixTable {...props} />)
  })

  it('renders without crashing', () => {
    mountedGenerationMixTable = shallow(<GenerationMixTable {...props} />)
  })

  it('renders generation mix element when generation mix array is undefined', () => {
    let generationMixItem = mountedGenerationMixTable.find('GenerationMix')
    expect(generationMixItem.exists()).toEqual(true)
  })
})

describe('GenerationMixTable with null props', () => {
  let props
  let mountedGenerationMixTable

  beforeEach(() => {
    props = {
      generationMixArr: null
    }
    mountedGenerationMixTable = shallow(<GenerationMixTable {...props} />)
  })

  it('renders without crashing', () => {
    mountedGenerationMixTable = shallow(<GenerationMixTable {...props} />)
  })

  it('renders generation mix element when generation mix array is null', () => {
    let generationMixItem = mountedGenerationMixTable.find('GenerationMix')
    expect(generationMixItem.exists()).toEqual(true)
  })
})

describe('GenerationMixTable with empty props', () => {
  let props
  let mountedGenerationMixTable

  beforeEach(() => {
    props = {
      generationMixArr: []
    }
    mountedGenerationMixTable = shallow(<GenerationMixTable {...props} />)
  })

  it('renders without crashing', () => {
    mountedGenerationMixTable = shallow(<GenerationMixTable {...props} />)
  })

  it('renders generation mix element when generation mix array is empty', () => {
    let generationMixItem = mountedGenerationMixTable.find('GenerationMix')
    expect(generationMixItem.exists()).toEqual(true)
  })
})
