import React, { PropTypes } from 'react'
import Avatar from 'material-ui/lib/avatar'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'

const Event = ({ title, creatorId, date }) => (
  <ListItem
    primaryText={title}
    leftAvatar={<p>{date}</p>}
    secondaryText='this event is nice'
  />
)

Event.propTypes = {
  title: PropTypes.string,
  creatorId: PropTypes.number,
  date: PropTypes.string
}

const Events = ({ events }) => (
  <List>
    {events.map((event, index) => (
      <Event {...event} key={index} />
    ))}
  </List>
)

Events.propTypes = {
  events: PropTypes.array
}

export default Events
