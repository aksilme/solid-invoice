import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from 'InvoiceInput'

export default class extends Component {
  static contextTypes = {
    fields: PropTypes.object.isRequired,
    changeValue: PropTypes.func.isRequired
  }

  onChange = value => {
    const { name } = this.props
    const { changeValue } = this.context

    changeValue(name, value)
  }

  render () {
    const { fields } = this.context
    const { name, children, value, placeholder, ...props } = this.props

    return (
      <Input
        placeholder={placeholder}
        value={value || (fields[name] != null && String(fields[name]))}
        onChange={this.onChange}
        {...props}
      >
        {children}
      </Input>
    )
  }
}
