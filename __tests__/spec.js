import '@babel/polyfill'
import withContext from '../src'
import ReactDOM from 'react-dom'
import React from 'react'

it('provides context', async () => {
  const fooContext = React.createContext('fooValue')
  const barContext = React.createContext('barValue')

  let resolve
  let foo
  let bar

  const _App = props => {
    foo = props.foo
    bar = props.bar
    resolve()
    return null
  }
  const App = withContext({
    foo: fooContext,
    bar: barContext,
  })(_App)

  await new Promise(r => {
    resolve = r
    ReactDOM.render(<App />, document.createElement('div'))
  })

  expect(foo).toBe('fooValue')
  expect(bar).toBe('barValue')
})
