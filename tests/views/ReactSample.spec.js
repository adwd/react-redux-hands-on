import React from 'react'
import { bindActionCreators } from 'redux'
import { shallow, mount } from 'enzyme'
import { spy } from 'sinon'
import assert from 'power-assert'
import ReactSample from 'views/ReactSample'
import TodoItem from 'views/ReactSample/TodoItem'

describe('ReactSample', function () {

  it('Should render as a <div>.', function () {
    const wrapper = shallow(<ReactSample />)
    assert(wrapper.is('div'))
  })
  
  it('Should include an <h1> with \'React Sample\' text.', function () {
    const wrapper = shallow(<ReactSample />)
    assert(wrapper.childAt(0).type() === 'h1')
    assert(wrapper.childAt(0).text() === 'React Sample')
  })

  it('Should render with an <h2> with \'Todos\' text.', function () {
    const wrapper = shallow(<ReactSample />)
    const h2 = wrapper.find('h2')
    assert(h2.length === 1)
    assert(h2.text() === 'Todos')
  })
  
  it('should start with three todos list', () => {
    const wrapper = shallow(<ReactSample />)
    assert.deepEqual(wrapper.state('todos'), ['learn react', 'learn flux', 'learn redux'])
  })
  
  it('edit input text box', () => {
    const wrapper = shallow(<ReactSample />)
    const input = wrapper.find('input')
    input.simulate('change', { target: { value: 'learn mocha' } })
    assert.equal(wrapper.state('newTodo'), 'learn mocha')
  })

  it('adds items to the list', () => {
    const wrapper = shallow(<ReactSample />)
    wrapper.setState({ newTodo: 'learn enzyme' })
    wrapper.instance().addTodo()
    assert.deepEqual(wrapper.state('todos'), ['learn react', 'learn flux', 'learn redux', 'learn enzyme'])
  })

  it('passes addTodo to button', () => {
    const wrapper = shallow(<ReactSample />)
    const button = wrapper.find('button')
    const addTodo = wrapper.instance().addTodo
    assert(button.prop('onClick'), addTodo)
  })

  it('passes a bound addItem function to button', () => {
    const wrapper = shallow(<ReactSample />)
    wrapper.setState({ newTodo: 'learn enzyme'})
    const button = wrapper.find('button')
    button.prop('onClick')('learn enzyme')
    assert.deepEqual(wrapper.state('todos'), ['learn react', 'learn flux', 'learn redux', 'learn enzyme'])
  })
  
  it('should render three items', () => {
    const wrapper = shallow(<ReactSample />)
    assert(wrapper.find(TodoItem).length === 3)
  })
  
  it('passes text to TodoItem', () => {
    const wrapper = shallow(<ReactSample />)
    
    assert.deepEqual(wrapper.state('todos'), ['learn react', 'learn flux', 'learn redux'])
    assert(wrapper.find(TodoItem).length === 3)
    assert(wrapper.find(TodoItem).at(0).props().children === 'learn react')
    assert(wrapper.find(TodoItem).at(1).props().children === 'learn flux')
    assert(wrapper.find(TodoItem).at(2).props().children === 'learn redux')
  })
  
  it('passes deleteTodoItem to TodoItem', () => {
    const wrapper = shallow(<ReactSample />)
    const todoItem = wrapper.find(TodoItem)
    const deleteTodoItem = wrapper.instance().deleteTodoItem
    assert(todoItem.everyWhere(n => n.prop('onRemove') === deleteTodoItem))
  })

  it('passes a bound deleteTodoItem function to TodoItem', () => {
    const wrapper = shallow(<ReactSample />)
    const firstTodoItem = wrapper.find(TodoItem).first()
    firstTodoItem.prop('onRemove')(0)
    assert.deepEqual(wrapper.state('todos'), ['learn flux', 'learn redux'])
  })
  
  it('should render todo texts', () => {
    const wrapper = mount(<ReactSample />)
    
    assert(wrapper.find('div').at(1).text() === '1: learn react ')
    assert(wrapper.find('div').at(2).text() === '2: learn flux ')
    assert(wrapper.find('div').at(3).text() === '3: learn redux ')
  })
  
  it('onRemove callback is called if x button is clicked', () => {
    const onButtonClick = spy()
    const wrapper = shallow(<TodoItem onRemove={onButtonClick} />)
    
    wrapper.find('input').simulate('click')
    assert(onButtonClick.calledOnce)
  })
})
