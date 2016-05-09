import React, { PropTypes } from 'react'
import Avatar from 'material-ui/Avatar'
import { List, ListItem } from 'material-ui/List'

const User = ({ id, name, age }) => (
  <ListItem
    primaryText={name}
    leftAvatar={<Avatar>{name.charAt(0).toUpperCase()}</Avatar>}
    rightAvatar={<Avatar>{age}</Avatar>}
  />
)

User.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  age: PropTypes.number
}

const Users = ({users}) => (
  <List>
    {users.map((user, index) => <User {...user} key={index} />)}
  </List>
)

Users.propTypes = {
  users: PropTypes.array
}

export default Users
