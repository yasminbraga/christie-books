import React from 'react'

import './styles.css'

const Head = ({ keys, head }) => {
  return (
    <thead>
      <tr>
        {keys.map(key => <th key={key}>{head[key] || key}</th>)}
      </tr>
    </thead>
  )
}

const Row = ({record}) => {
  const keys = Object.keys(record)
  return (
    <tr key={record.id}>
      {keys.map(key => <td key={key}>{record[key]}</td>)}
    </tr>
  )
}

const Table = ({ data, head }) => {
  const keys = Object.keys(data[0])
  return (
    <table className="table shadow">
      <Head keys={keys} head={head}/>
      <tbody>
        {data.map(record => <Row record={record}/>)}
      </tbody>
    </table>
  )
}

export default Table