import React, { Component, PropTypes } from 'react'
import AppBar from 'material-ui/lib/app-bar'
import LeftNav from 'material-ui/lib/left-nav'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import '../../styles/core.scss'

export default class CoreLayout extends Component {

  constructor (props) {
    super(props)

    this.handleRequestChange = this.handleRequestChange.bind(this)
    this.state = {open: false}
  }

  handleToggle = () => this.setState({open: !this.state.open})

  handleRequestChange (open) {
    this.setState({open})
  }

  handleClickItem = (path) => () => {
    this.setState({open: !this.state.open})
    this.props.history.push(path)
  }

  render () {
    return (
      <div>
        <AppBar
          title='React/Redux Hands-on'
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <LeftNav
          docked={false}
          open={this.state.open}
          onRequestChange={this.handleRequestChange}
        >
          <List subheader='Samples'>
            <ListItem
              primaryText='Home'
              onTouchTap={this.handleClickItem('/')}
            />
            <ListItem
              primaryText='React'
              secondaryText='state, props, stateless component'
              onTouchTap={this.handleClickItem('/react')}
            />
            <ListItem
              primaryText='Redux'
              secondaryText='store, action, reducer'
              onTouchTap={this.handleClickItem('/redux')}
            />
          </List>
        </LeftNav>
        {this.props.children}
      </div>
    )
  }
}

CoreLayout.propTypes = {
  children: PropTypes.element,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}
