import React, { useState } from 'react'
const UserLists=(props)=>{
    // console.log(props)

    //to store array details in useState, folloeings are the ways
    
    const{people}=props
    const [students, setStudents]=useState(people)
    
  
    
    //2nd way to render array on ui
    // const users=students.map((student, index)=><h1 key={index} >{student}</h1>)
    

    return(
        <div>
            <h1>Hello Ram</h1>
            {/* {users} */}
            {/* render the array to show array contents on webage */}
            {/*1way to render array co */}
            {students.map((student, index)=><li key={index}>{student}</li>)}
        </div>
    )
}
export default UserLists;