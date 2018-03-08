import React from 'react'
import Link from 'gatsby-link'
import Todos from '../components/Todos';

export default ({data}) => (
  <div>

    <Todos items={data.allTodoName.edges.map(edge => edge.node)}/>
    
  </div>
)

export const query = graphql`
  query TodosQuery {
    allTodoName {
      totalCount
      edges {
        node {
          id
          title
        }
      }
    }
  }
`
