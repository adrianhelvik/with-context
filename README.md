# @adrianhelvik/with-context

This is a higher order component for supplying contexts to
React components. Simply supply an object whose keys will
be used as the name of the props resulting from the context
values.

... It's easier with an example:

## Example with decorators (legacy proposal)
This package can be used with the legacy decorator proposal.
I will update it to work with the new proposal once it
gains more traction in the ecosystem.

```javascript
import withContext from '@adrianhelvik/with-context'
import React from 'react'

const countContext = React.createContext(0)

@withContext({ count: countContext })
class CountDisplayer extends React.Component {
  render() {
    return `The count is ${this.props.count}`
  }
}

export default CountDisplayer
```

## Example without decorators
You can also use it without decorators, just like with any
other higher order component.

```javascript
import withContext from '@adrianhelvik/with-context'
import React from 'react'

const countContext = React.createContext(0)

class CountDisplayer extends React.Component {
  render() {
    return `The count is ${this.props.count}`
  }
}

const CountDisplayer = withContext({
  count: countContext
})(_CountDisplayer)
```
