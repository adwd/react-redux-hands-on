import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/lib/paper'
import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'
import FontIcon from 'material-ui/lib/font-icon'
import LinearProgress from 'material-ui/lib/linear-progress'
import { fetchUsers } from '../../redux/modules/users'
import { fetchEvents } from '../../redux/modules/events'
import Users from './components/Users'
import Events from './components/Events'
import Stats from './components/Stats'

class ReduxSample extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    users: PropTypes.any,
    events: PropTypes.any
  }

  constructor (props) {
    super(props)

    this.handleTabActive = this.handleTabActive.bind(this)
  }

  componentDidMount () {
    this.props.dispatch(fetchUsers())
  }

  handleTabActive (tab) {
    // componentDidMountでusersは取得するので、eventsかstatsのタブを開いた時に
    // eventsを取得する
    switch (tab) {
      case 'users':
        break

      case 'events':
        this.props.dispatch(fetchEvents())
        break

      case 'stats':
        this.props.dispatch(fetchEvents())
        break

      default:
        break
    }
  }

  render () {
    const style = {
      p: {
        margin: '10px'
      },
      content: {
        height: 500,
        width: '90%',
        marginRight: 'auto',
        marginLeft: 'auto'
      }
    }
    console.log(this.props)

    const Lazy = ({ loading, children }) => {
      switch (loading) {
        case 'LOADING':
          return (
            <div>
              <LinearProgress mode='indeterminate' color='Cyan' />
              <p style={style.p}>loading...</p>
            </div>
          )

        case 'LOADED':
          return (
            <div>
              {children}
            </div>
          )

        default:
          return (
            <p>load failed</p>
          )
      }
    }

    const handleActive = (tpe) => () => this.handleTabActive(tpe)

    return (
      <div>
        <p>Redux Sample</p>
        <Paper style={style.content} zDepth={3}>
          <Tabs>
            <Tab
              icon={<FontIcon className='material-icons'>person</FontIcon>}
              label='users'
              onActive={handleActive('users')}
            >
              <Lazy loading={this.props.users.status}>
                <Users users={this.props.users.list} />
              </Lazy>
            </Tab>
            <Tab
              icon={<FontIcon className='material-icons'>event</FontIcon>}
              label='events'
              onActive={handleActive('events')}
            >
              <Lazy loading={this.props.events.status}>
                <Events events={this.props.events.list} />
              </Lazy>
            </Tab>
            <Tab
              icon={<FontIcon className='material-icons'>assessment</FontIcon>}
              label='user stats'
              onActive={handleActive('stats')}
            >
              <Stats users={this.props.users} events={this.props.events} />
            </Tab>
          </Tabs>
        </Paper>
      </div>
    )
  }
}

const ConnectedReduxSample = connect(
  state => ({...state})
)(ReduxSample)

export default ConnectedReduxSample
