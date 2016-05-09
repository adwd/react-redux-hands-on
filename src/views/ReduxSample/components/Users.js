import React, { PropTypes } from 'react'
import Avatar from 'material-ui/lib/avatar'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'

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
