import React from 'react'
import Paper from 'material-ui/lib/paper'
import axios from 'axios'

class ReduxSample extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      users: []
    }
  }

  componentDidMount () {
    axios.get('/api/users/')
      .then((response) => {
        console.log(response)
        this.setState({users: response.data})
      })
      .catch((e) => {
        console.log(e)
      })
  }

  render () {
    const style = {
      height: 100,
      width: 100,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block'
    }

    return (
      <div>
        <p>Redux Sample</p>
        <Paper style={style} zDepth={3}/>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    )
  }
}

export default ReduxSample
