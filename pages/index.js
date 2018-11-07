import React, {Component} from 'react'
import { Layout } from '@components'
import { Button } from 'antd-mobile'
import { getCountryCodeFetch } from '@api'
import { showSearchAction } from '../actions/home'
import {connect} from 'react-redux'

@connect(state => state.home)
export default class Index extends Component {
  static async getInitialProps () {
    const res = await getCountryCodeFetch()
    const show = await res.data || res
    return { show }
  }
  constructor(props){
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    console.log(this.props,'props');
  }
   getCountryCode = () => {
    this.props.dispatch(showSearchAction(true))
  }
  render(){
    return (
      <Layout>
        <Button type="primary" onClick={this.getCountryCode}>helllow</Button>
        {
          this.props.show
          ? <ul>
              {
                this.props.show.map((item,index)=>{
                  return <li key={item.name+index}>{item.name}</li>
                })
              }
            </ul>
          : null
        }
      </Layout>
    )
  }
}
