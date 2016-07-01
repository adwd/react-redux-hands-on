import React from 'react'
import { shallow } from 'enzyme'
import assert from 'power-assert'
import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import { getMuiTheme } from 'material-ui/styles'

describe('(Layout) Core', function () {
  const muiTheme = getMuiTheme()
  
  it('Should render.', function () {
    const wrapper = shallow(<CoreLayout />, { context: { muiTheme } })
    assert(wrapper.first().is('CoreLayout'))
  })
})
