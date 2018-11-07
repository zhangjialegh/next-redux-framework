import React, {Component} from 'react'
import setOption from '../utils/setOption'

class Chart extends Component {

  constructor(props) {
    super(props)
    this.state ={

    }
  }

  componentDidMount() {
    setOption(this.refs.charts)
  }
  componentWillUnmount() {
  }

  render() {
    return (
        <div ref="charts" className="charts_wrapper"></div>
    )
  }
}


export default Chart