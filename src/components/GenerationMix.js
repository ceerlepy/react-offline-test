import React from 'react'
import PropTypes from 'prop-types'

const GenerationMix = (props) => {
  if (props && (props.fuel || props.perc)) {
    return (
      <tr style={{ backgroundColor: 'yellow' }} className='generationMixCls'>
        <td>{props.fuel}</td>
        <td>{props.perc}</td>
      </tr>
    )
  } else {
    return (
      <tr style={{ backgroundColor: 'gray' }} className='generationNoItem'>
        <td colSpan='2'>There is no generation mix</td>
      </tr>
    )
  }
}

GenerationMix.propTypes = {
  fuel: PropTypes.string,
  perc: PropTypes.number
}

export default GenerationMix
