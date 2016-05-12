/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router'
import Paper from 'material-ui/Paper'
import { Card, CardTitle, CardText } from 'material-ui/Card'

// We can use Flow (http://flowtype.org/) to type our component's props
// and state. For convenience we've included both regular propTypes and
// Flow types, but if you want to try just using Flow you'll want to
// disable the eslint rule `react/prop-types`.
// NOTE: You can run `npm run flow:check` to check for any errors in your
// code, or `npm i -g flow-bin` to have access to the binary globally.
// Sorry Windows users :(.
type Props = {
  counter: number,
  doubleAsync: Function,
  increment: Function
};

const styles = {
  container: {
    textAlign: 'center'
  },
  content: {
    width: '80%',
    margin: 20,
    display: 'inline-block'
  }
}

// We avoid using the `@connect` decorator on the class definition so
// that we can export the undecorated component for testing.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
export class HomeView extends React.Component<void, Props, void> {
  render () {
    const toReduxAsync = () => this.props.router.push('redux-async')
    return (
      <div style={styles.container}>
        <Paper style={styles.content} zDepth={3} rounded={false}>
          <Card>
            <CardTitle title='React Redux Introduction Kit' />
            <CardText>
              <Link to='react'><p>react sample</p></Link>
              <Link to='redux'><p>redux sample</p></Link>
              <button onClick={toReduxAsync}>redux-async sample</button>
            </CardText>
          </Card>
        </Paper>
      </div>
    )
  }
}

HomeView.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func
  })
}

export default connect(state => state)(withRouter(HomeView))
