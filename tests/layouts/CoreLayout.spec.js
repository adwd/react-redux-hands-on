import React from 'react'
import { shallow } from 'enzyme'
import assert from 'power-assert'
import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import extendComponentWithMUITheme from '../extendComponentWithMUITheme'

describe('(Layout) Core', function () {
  it('Should render.', function () {
    const Extended = extendComponentWithMUITheme(CoreLayout)
    const wrapper = shallow(<Extended />)
    assert(wrapper.first().is('CoreLayout'))
  })
})
