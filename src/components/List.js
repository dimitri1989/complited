import React from 'react'
const List = ({id,title,completed}) => {
    
  return (
    
         <tbody>
    <tr>
      <th scope="row">{id}</th>
      <td>{title}</td>
      <td className={completed ? "bg-success" : "bg-danger"}>{completed ? "true" : "false"}</td>
      
    </tr>
   
   
  </tbody>
    
  )
}

export default List