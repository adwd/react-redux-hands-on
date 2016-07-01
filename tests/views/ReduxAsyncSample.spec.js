import React from 'react'
import { bindActionCreators } from 'redux'
import { shallow, mount } from 'enzyme'
import { spy } from 'sinon'
import assert from 'power-assert'
import { ReduxAsyncSample } from 'views/ReduxAsyncSample/ReduxAsyncSample'

describe('ReduxAsyncSample', function () {
  const defaultProp = {
    todo: {
      newTodo: "",
      todos: ['learn test', 'learn enzyme', 'learn mocha'],
      loading: false,
      adding: false,
      removing: false
    },
    fetch: () => {}, // do nothing
    edit: () => {},
    add: () => {},
    remove: () => {}
  }

  it('Should call fetch when componentDidMount', () => {
    spy(ReduxAsyncSample.prototype, 'componentDidMount');
    const onFetch = spy()
    const wrapper = mount(<ReduxAsyncSample {...defaultProp} fetch={onFetch}/>)
    
    assert(ReduxAsyncSample.prototype.componentDidMount.calledOnce)
    assert(onFetch.calledOnce)
  })
})
