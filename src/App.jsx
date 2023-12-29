// import React from 'react'
import { useState } from 'react'
import { Cards } from './components/Cards'
import { Edit } from './components/Edit'
import { Add } from './components/Add'
export const App = () => {
  let [data,setData]= useState([
    {
      id:1,
      name:"task1",
      description:"details",
      category:"Not Completed",
      color:"red"
    },
    {
      id:2,
      name:"task2",
      description:"details",
      category:"Not Completed",
      color:"red"
    },
    {
      id:3,
      name:"task3",
      description:"details",
      category:"Not Completed",
      color:"red"
    }
])
let [editkey,setEditkey]=useState(false)
let [editId,setEditId]=useState('')
  return (
    <>
    
    <div className='container-fluid'>
       <h1 className='h1 text-center'>My todo</h1>
      <Add data={data} setData={setData}></Add>
      <Cards data={data} setData={setData} setEditId={setEditId} setEditkey={setEditkey}></Cards>
      {editkey?<Edit data={data} setData={setData} editId={editId} editkey={editkey} setEditId={setEditId} setEditkey={setEditkey}></Edit>:<></>}
    </div>
    {/* <BrowserRouter>
    
     <Routes>
     <Route path='/todo' element={<Cards data={data} setData={setData}></Cards>}></Route>
      <Route path='/edit/:id' element={<Edit data={data} setData={setData}></Edit>} ></Route>
      <Route path='*' element={<Navigate to={'/todo'}></Navigate>}></Route>
     </Routes>
    </BrowserRouter> */}
    </>
   
   
    
  )
}
