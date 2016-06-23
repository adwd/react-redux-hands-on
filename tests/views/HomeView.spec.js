import React from 'react'
import { shallow, mount } from 'enzyme'
import assert from 'power-assert'
import { HomeView } from 'views/HomeView/HomeView'
import extendComponentWithMUITheme from '../extendComponentWithMUITheme'

describe('(View) Home', function () {

  it('Should render as a <div>.', function () {
    const Extended = extendComponentWithMUITheme(HomeView)
    const wrapper = shallow(<Extended />)
    assert(wrapper.is('div'))
  })
  
})
