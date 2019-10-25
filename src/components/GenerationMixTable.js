import React from 'react'
import GenerationMix from './GenerationMix'

const tableHeaderStyle = {
  textAlign: 'left',
  background: 'gray'
}

const GenerationMixTable = ({ generationMixArr }) => {
  let generationMixComp

  if (generationMixArr && generationMixArr.length > 0) {
    generationMixComp = generationMixArr.map((generationMix, id) => {
      return <GenerationMix key={id} {...generationMix} />
    })
  } else {
    generationMixComp = <GenerationMix />
  }

  return (
    <table border='1' style={{ width: '150' }}>
      <thead>
        <tr>
          <th style={tableHeaderStyle}>Fuel</th>
          <th style={tableHeaderStyle}>Perc</th>
        </tr>
      </thead>
      <tbody>{generationMixComp}</tbody>
    </table>
  )
}

export default GenerationMixTable
