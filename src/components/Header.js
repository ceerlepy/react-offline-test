import React, { Component } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'

const Header = ({ from, to }) => {
  let startDate = from ? dayjs(from).format('YYYY-MM-DD HH:mm:ss') : '---'
  let endDate = to ? dayjs(to).format('YYYY-MM-DD HH:mm:ss') : '---'
  return (
    <div>
      <h2>UK Energy Mix</h2>
      <h3>
        data is valid from: <strong style={{ color: 'red' }}>{startDate}</strong> to:{' '}
        <strong style={{ color: 'red' }}>{endDate}</strong>
      </h3>
    </div>
  )
}

Header.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string
}

export default Header
