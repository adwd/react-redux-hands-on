import React from 'react'
import Paper from 'material-ui/lib/paper'
import axios from 'axios'
import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'
import FontIcon from 'material-ui/lib/font-icon'

class ReduxSample extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      select: 'users',
      usersLoading: false,
      users: [],
      eventsLoading: false,
      events: []
    }

    this.handleEventsTabActive = this.handleEventsTabActive.bind(this)
  }

  componentDidMount () {
    this.setState({ usersLoading: true })
    axios.get('/api/users/')
      .then((response) => {
        console.log(response)
        this.setState({
          usersLoading: false,
          users: response.data
        })
      })
      .catch((e) => {
        this.setState({ usersLoading: false })
        console.log(e)
      })
  }

  handleEventsTabActive (tab) {
    console.log(tab)
    const events = this.state.events
    if (events.length === 0) {
      this.setState({ eventsLoading: true })
      axios.get('/api/events')
        .then((response) =>
          this.setState({
            eventsLoading: false,
            events: response.data
          })
        )
        .catch((e) => {
          this.setState({ eventsLoading: false })
          console.log(e)
        })
    }
  }

  render () {
    const style = {
      height: 500,
      width: '90%',
      marginRight: 'auto',
      marginLeft: 'auto'
    }

    return (
      <div>
        <p>Redux Sample</p>
        <Paper style={style} zDepth={3}>
          <Tabs>
            <Tab
              icon={<FontIcon className='material-icons'>person</FontIcon>}
              label='users'>
              <div>
                {this.state.usersLoading ? (
                  <p>Loading...</p>
                ) : (
                  <pre>{JSON.stringify(this.state.users, null, 2)}</pre>
                )}
              </div>
            </Tab>
            <Tab
              icon={<FontIcon className='material-icons'>event</FontIcon>}
              label='events'
              onActive={this.handleEventsTabActive}
            >
              <div>
                {this.state.eventsLoading ? (
                  <p>Loading...</p>
                ) : (
                  <pre>{JSON.stringify(this.state.events, null, 2)}</pre>
                )}
              </div>
            </Tab>
            <Tab
              icon={<FontIcon className='material-icons'>sentiment_satisfied</FontIcon>}
              label='about'
            />
          </Tabs>
        </Paper>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    )
  }
}

export default ReduxSample
