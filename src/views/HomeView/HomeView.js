/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { increment, doubleAsync } from '../../redux/modules/counter'
import DuckImage from './Duck.jpg'
import classes from './HomeView.scss'
import Paper from 'material-ui/Paper'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'

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
  static propTypes = {
    counter: PropTypes.number.isRequired,
    doubleAsync: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired
  };

  render () {
    const { counter, increment, doubleAsync } = this.props
    return (
      <div style={styles.container}>
        <Paper style={styles.content} zDepth={3} rounded={false}>
          <Card>
            <CardHeader
              title='React/Redux Hands-on'
              subtitle='2016/4/11'
            />
            {
              // TODO: いい感じの画像をいい感じのサイズで置く
              /*
                <CardMedia
                  overlay={<CardTitle title='Overlay title' subtitle='Overlay subtitle' />}
                >
                  <img src={DuckImage} />
                </CardMedia>
              */
            }
            <CardTitle title='Welcome to the React Redux Starter Kit' />
            <CardText>
              Sample Counter:
              {' '}
              <span className={classes['counter--green']}>{counter}</span>
            </CardText>
            <CardActions>
              <RaisedButton onClick={increment} label='Increment' />
              <RaisedButton onClick={doubleAsync} label='Double (Async)' />
            </CardActions>
          </Card>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
})
export default connect((mapStateToProps), {
  increment: () => increment(1),
  doubleAsync
})(HomeView)
