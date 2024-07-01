import { useState } from 'react'
import './App.css'
import UserLists from './UserLists'

function App() {
  

  const persons=["Mahesh","Madhu","Upender","Prasanth","Ram","Ashwathama"]

  return (
    <>
      <h1>Hey below one imported from another component</h1>
      {/* use prop topic to assign students array to chaild component i.e, UserLists */}
       {/*above one is higher order component  */}
      <UserLists people={persons} />
       
       
    </>
  )
}

export default App
