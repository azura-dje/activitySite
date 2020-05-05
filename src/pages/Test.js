import React from 'react'
import Layout from '../components/Layout'

const Test = ({location}) => {
  const arr = [1, 2, 3, 4]
  const data = [
    {id: 1, nom: 'ali', age: 18},
    {id: 2, nom: 'med', age: 45},
    {id: 3, nom: 'fedi', age: 35},
    {id: 4, nom: 'salah', age: 29},
    {id: 5, nom: 'sami', age: 24},
  ]

  const result = data.filter(e => arr.find(p => p === e.id))

  console.log(result)
  console.log(location)
  return (
    <Layout location={location}>
      <h1>Test</h1>
    </Layout>
  )
}
export default Test
