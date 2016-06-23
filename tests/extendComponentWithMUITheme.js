// refer: https://gist.github.com/nicolasiensen/59d9c7aa4462eb0f33c4bfd9205ee81b
// This helper is required to test any component that renders material-ui components.
// If you are getting a message saying:
// 'undefined is not an object (evaluating this.context.muiTheme.prepareStyles)'
// you should use this helper.

// The usage is simple, you pass a component class to extendComponentWithMUITheme
// and it will return a new component class capable of rendering material-ui
// components

// const MyExtendedComponent = extendComponentWithMUITheme(MyComponent)
// ReactTestUtils.renderIntoDocument(<MyExtendedComponent />)

import { PropTypes } from 'react'
import { getMuiTheme } from 'material-ui/styles'

export default function extendComponentWithMUITheme (component) {
  return class ExtendedComponentWithMUITheme extends component {
    static childContextTypes = {
      muiTheme: PropTypes.object
    }

    getChildContext () {
      return {
        muiTheme: getMuiTheme()
      }
    }
  }
}
