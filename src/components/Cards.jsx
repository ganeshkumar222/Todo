import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import { CardData } from './CardData';
export const Cards = ({data , setData, setEditkey , setEditId}) => {
    //  let [selectedcategory , SetselectedCategory] = useState("")
     let [carddata,setCardData] = useState([])
    //  let [filter,setFilter] = useState(false)
     let [filterValue,setFilterValue] = useState('All')
    //  let [color,setColor] = useState(["red"])
    let handledelete = (id) =>{
        let index=0
       for(let i = 0; i<data.length;i++){
        if(data[i].id===id){
            index=i
            break
        }
       }
       let newarray=[...data]
       newarray.splice(index,1)
       setData(newarray)
    }
    let handleEdit=(id) => {
      setEditkey(true)
      setEditId(id)
    }
    let getFiltered = (filteredvalue) => {
    //    console.log(filteredvalue)
    //    console.log(data)
    //    setFilter(true)
    //    console.log(filter)
       let filterarray=[]
       setFilterValue(filteredvalue)
       if(filteredvalue!=="All")
       {
        // console.log("if")
        filterarray = data.filter((e)=>{
            return e.category===event.target.value
           })
        //    console.log(filterarray)
       }
       else{
        // console.log("inside")
        filterarray = [...data]
       }
    //    console.log(filterarray)
    //    console.log(filter)
       setCardData(filterarray)
    //    console.log(carddata)
    }
    let handleFilter = (val) => {
        // setFilter(true)
        let id = val
        let category = event.target.value
        let color = ""
        if(event.target.value==="Completed"){
            color = "yellow"
        }
        else{
            color="red"
        }
    let index = ""
    for(let i =0;i<data.length;i++){
        if(data[i].id===id){
            index=i
            break;
        }
    }
    let name=data[index].name
    let description = data[index].description
    let newArray = [...data]
    newArray.splice(index,1,{
        id,
        name,
        description,
        category,
        color
    })
    // console.log(newArray)
    setData(newArray)
    // settingData()
    // setCardData(data)
    // console.log(filterValue)
    // console.log(data)
    // getFiltered(filterValue)
    }
    // let settingData = () => {
    //     getFiltered(filterValue)
    // }
    let setDisplayValue = ()=>{
        if(filterValue==="All")
        {
            setCardData([...data])
    }
    else if(filterValue==='Completed')
    {
        let displayarray = data.filter((e)=>{
            return e.category==="Completed"
        })
        setCardData(displayarray)
    }
    else{
        let displayarray = data.filter((e)=>{
            return e.category==="Not Completed"
        })
        setCardData(displayarray) 
    }
        
        
    }
    useEffect(()=>{
        // console.log(data)
        setDisplayValue()
        
    },[data])

  return (
    <>
    <div className='d-flex justify-content-between'>
        <div>
            <h6>MyToDos</h6>
        </div>
        <div>
        <span className='h6'>StatusFilter</span>: <select onChange={()=>{getFiltered(event.target.value)}}>
                        <option value="All">All</option>
                        <option value="Not Completed">Not completed</option>
                        <option value="Completed">Completed</option>
                    </select>
        </div>
    </div>
    <Row   md={3} className="g-2 mt-3" >
        {carddata.map((e)=>{
           return <>
           <CardData  carddata={e} key={e.id} handleFilter={handleFilter} handleEdit={handleEdit} handledelete={handledelete}></CardData></> 
        })}
    {/* <CardData carddata={carddata} handleFilter={handleFilter} handleEdit={handleEdit} handledelete={handledelete}></CardData> */}
    {/* {carddata.map((e,i)=>{
       return <>
         <Col >
            <Card key={i}>
                <Card.Body>
                   <Card.Text>
                    Name:{e.name}
                   </Card.Text>
                   <Card.Text>
                    Description:{e.description}
                   </Card.Text>
                   <Card.Text>
                    Status: <select value={e.category} onChange={()=>{handleFilter(e.id)}}>
                        <option value="Not completed">Not completed</option>
                        <option value="Completed">Completed</option>
                    </select>
                   </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <ButtonGroup className='d-flex justify-content-end' >
                        <Button className="m-1" size='sm' variant='secondary' onClick={()=>{handleEdit(e.id)}}>Edit</Button>
                        <Button className="m-1" variant='danger' onClick={()=>{handledelete(e.id)}}>Delete</Button>
                    </ButtonGroup>
                </Card.Footer>
            </Card>
        </Col>
       </> 
       })} */}
    </Row>
    </>
  )
}
