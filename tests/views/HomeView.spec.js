import React from 'react'
import { shallow, mount } from 'enzyme'
import assert from 'power-assert'
import { HomeView } from 'views/HomeView/HomeView'
import { getMuiTheme } from 'material-ui/styles'

describe('(View) Home', function () {
  const muiTheme = getMuiTheme()

  it('Should render as a <div>.', function () {
    const wrapper = shallow(<HomeView />, { context: { muiTheme } })
    assert(wrapper.is('div'))
  })
  
})
