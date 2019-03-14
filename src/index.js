import hoist from 'hoist-non-react-statics'
import React from 'react'

export default function withContext(contexts) {
  return (WrappedComponent) => {
    const name = (
      WrappedComponent.displayName
      || WrappedComponent.name
      || '<component>'
    )

    const NewComponent = props => {
      const names = Object.keys(contexts)
      const addedProps = {}

      for (const name of names)
        addedProps[name] = React.useContext(contexts[name])

      return (
        <WrappedComponent
          {...props}
          {...addedProps}
        />
      )
    }

    NewComponent.displayName = `withContext(${name})`

    hoist(NewComponent, WrappedComponent)

    return NewComponent
  }
}
