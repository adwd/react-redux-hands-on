import React, { PropTypes } from 'react'
import { List, ListItem } from 'material-ui/List'

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
