import React, { PropTypes } from 'react'
import Avatar from 'material-ui/lib/avatar'
import Colors from 'material-ui/lib/styles/colors'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import LinearProgress from 'material-ui/lib/linear-progress'

const Stat = ({ name, id, age, events }) => {
  const eventsText = events && events.length > 0
    ? (
    <p>
      <span style={{color: Colors.darkBlack}}>{`${events.length} events`}</span><br />
      {events.map(event => event.title).join(', ')}
    </p>
    ) : (<p></p>)

  return (
    <ListItem
      primaryText={name}
      leftAvatar={<Avatar>{name.charAt(0).toUpperCase()}</Avatar>}
      secondaryText={eventsText}
      secondaryTextLines={2}
    />
  )
}

Stat.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  age: PropTypes.number,
  events: PropTypes.array
}

const Stats = ({ users, events }) => {
  console.log('Stats', users, events)
  if (users.status === 'LOADED' && events.status === 'LOADED') {
    return (
      <List>
        {users.list.map((user, index) => {
          const eventsByUser = events.list.filter(event => event.creatorId === user.id)
          return (
            <Stat {...user} events={eventsByUser} key={index} />
          )
        })}
      </List>
    )
  } else if (users.status === 'FAILED' && events.status === 'FAILED') {
    return (
      <p>load failed</p>
    )
  } else {
    return (
      <div>
        <LinearProgress mode='indeterminate' color='Cyan' />
        <p style={{margin: '10px'}}>loading...</p>
      </div>
    )
  }
}

Stats.propTypes = {
  users: PropTypes.any,
  events: PropTypes.any
}

export default Stats
