import { Header } from '@components'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

export default (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)
