import React from 'react'
import { PropTypes } from 'prop-types'
import { Radar } from 'react-chartjs-2'
import { styler } from 'styles'

const options = {
  // hide title
  legend: {
    display: false,
  },
  scale: {
    ticks: {
      min: 0,
      max: 100,
      stepSize: 20,
      beginAtZero: true,
    },
  },
}

const styles = styler({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
})

const RadarWrapper = ({ data, className, style }) => (
  <div className={`${styles.root} ${className}`} style={style}>
    <Radar data={data} options={options} />
  </div>
)

RadarWrapper.propTypes = {
  data: PropTypes.shape({}),
  className: PropTypes.string,
  style: PropTypes.shape({}),
}

RadarWrapper.defaultProps = {
  data: {},
  className: '',
  style: {},
}

export default RadarWrapper
