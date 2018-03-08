import React from 'react'
class Todos extends React.Component {

  render () {
    return (
      <div>
        <h1>{this.props.items.length} Todos </h1>

        {this.props.items.map((item) => (
          <div>
            {item.id}: {item.title}
          </div>
        ))}
      </div>
    )
  }
}

export default Todos
