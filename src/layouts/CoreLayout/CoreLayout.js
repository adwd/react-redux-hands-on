import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import '../../styles/core.scss'

export class CoreLayout extends Component {

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
    this.props.router.push(path)
  }

  render () {
    return (
      <div>
        <AppBar
          title='React/Redux Hands-on'
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={this.handleRequestChange}
        >
          <List>
            <Subheader inset>Samples</Subheader>
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
            <ListItem
              primaryText='Redux-Async'
              secondaryText='async action, redux-thunk'
              onTouchTap={this.handleClickItem('/redux-async')}
            />
          </List>
        </Drawer>
        {this.props.children}
      </div>
    )
  }
}

CoreLayout.propTypes = {
  children: PropTypes.element,
  router: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

export default withRouter(CoreLayout)
