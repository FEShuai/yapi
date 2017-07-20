import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Select, Input } from 'antd'
import { autobind } from 'core-decorators'
import { 
  pushInputValue,
  pushInterfaceName
} from '../../../actions/addInterface.js'

@connect(
  state => {
    return {
      reqInputVal: state.addInterface.inputValue,
      interfaceName: state.addInterface.interfaceName
    }
  },
  {
    pushInputValue,
    pushInterfaceName
  }
)

class ReqMethod extends Component {
  static propTypes = {
    pushInputValue: PropTypes.func,
    pushInterfaceName: PropTypes.func,
    inputValue: PropTypes.string,
    interfaceName: PropTypes.string
  }

  constructor(props) {
    super(props)
  }

  handleChange (value) {
    console.log(`selected ${value}`)
  }

  @autobind
  getInputVal (e) {
    const inputVal = e.target.value
    console.log(this.props.pushInputValue)
    this.props.pushInputValue(inputVal)
  }

  @autobind
  getInterfaceValue () {
    // const name = e.target.value
    console.log(this.props.pushInterfaceName)
    // this.props.pushInterfaceName(name)
  }

  render () {
    const { Option } = Select
    console.log(this.props.interfaceName)
    return (
      <table>
        <tbody>
          <tr>
            <th>协议 :</th>
            <td>
              <span className="h3">请求协议 {this.props.inputValue}</span>
              <Select defaultValue="HTTP" style={{ width: 220}} onChange={this.handleChange} size="large">
                <Option value="HTTP">HTTP</Option>
                <Option value="HTTPS">HTTPS</Option>
              </Select>
              <span className="h3">请求方式</span>
              <Select defaultValue="POST" style={{ width: 220 }} onChange={this.handleChange} size="large">
                <Option value="POST">POST</Option>
                <Option value="GET">GET</Option>
                <Option value="PUT">PUT</Option>
                <Option value="DELETE">DELETE</Option>
              </Select>
            </td>
          </tr>
          <tr>
            <th>URL :</th>
            <td><Input placeholder="填写 URL" className="url" size="large" onBlur={this.getInputVal} /></td>
          </tr>
          <tr>
            <th>名称 :</th>
            <td><Input placeholder="接口名称" className="url" size="large" onBlur={this.getInterfaceValue} /></td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default ReqMethod