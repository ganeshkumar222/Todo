import { useState } from "react"
import { Form , Button } from "react-bootstrap"
import { useEffect } from 'react'
// import { Navigate } from 'react-router-dom'
export const Edit = ({data , setData , editId , setEditId , editkey , setEditkey}) => {
   let [name,setName]=useState("")
  let [description,setDescription]=useState("")
  let findIndex = (id) => {
    for(let i =0;i<data.length;i++){
        if(data[i].id===id){
            return i
        }
    }
}
let getUserdata = () =>{
    let id = editId
    let index = findIndex(id)
    setName(data[index].name)
    setDescription(data[index].description)
}
let handleEdit = () => {
    let id = editId
    let index = findIndex(id)
    let category = data[index].category
    let newArray = [...data]
    newArray.splice(index,1,{
        id,
        name,
        description,
        category
    })
    setData(newArray)
    setEditkey(false)
    // navigate('/todo')
}
useEffect(()=>{
    getUserdata()
  },[])
  return (
    <>
        <div className="container-fluid">
        <Form className="d-flex justify-content-center">
        <Form.Group className="m-3" >
            <Form.Control required type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="m-3" >
            <Form.Control required type="text" value={description} placeholder="TodoDescription" onChange={(e)=>setDescription(e.target.value)}/>
        </Form.Group>
        <Button className="m-3" variant="primary" onClick={()=>handleEdit()}>
            Update
          </Button>
        </Form>
        </div>
    </>
  )
}
