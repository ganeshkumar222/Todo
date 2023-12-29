// import React from 'react'
import { useState } from "react"
import { Form , Button } from "react-bootstrap"
export const Add = ({data,setData}) => {
  let [name,setName]=useState("")
  let [description,setDescription]=useState("")
  let handleCreate = () =>{
      let id = data.length?data[data.length-1].id+1:1;
      let category = "Not Completed"
      let color = "red"
      let newarray = [...data]
      newarray.push({
        id,
        name,
        description,
        category,
        color
      })
      setData(newarray)
  }
  return (
    <>
        <div className="container-fluid">
        <Form className="d-flex justify-content-center">
        <Form.Group className="m-3" >
            <Form.Control required type="text" placeholder="TodoName" onChange={(e)=>setName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="m-3" >
            <Form.Control required type="text" placeholder="TodoDescription" onChange={(e)=>setDescription(e.target.value)}/>
        </Form.Group>
        <Button className="m-3" variant="primary" onClick={()=>handleCreate()}>
            Add todo
          </Button>
        </Form>
        </div>
    </>
  )
}
