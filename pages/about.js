import React, {Component} from 'react'
import { Layout } from '@components'
import '../static/styles/about.less'
import dynamic from 'next/dynamic'

const Chart = dynamic(()=> import('../components/Chart'),{ssr: true})
class About extends Component {
  constructor(props) {
    super(props)
    this.state ={

    }
  }

  componentDidMount() {

  }
  componentWillUnmount() {
  }

  render() {
    return (
      <Layout>
        <Chart/>
      </Layout>
    )
  }
}

export default About