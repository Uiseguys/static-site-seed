import React from 'react'
import Todos from '../components/Todos'

class MyComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }

  componentDidMount () {
    fetch('https://loopback3-boilerplate.herokuapp.com/api/todos').then((res) => res.json()).then(
      (result) => {
        console.log(result)
        this.setState({
          isLoaded: true,
          items: result
        })
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        })
      }
    )
  }

  render () {
    const { error, isLoaded, items } = this.state
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <Todos items={items}/>
      )
    }
  }
}

export default MyComponent
