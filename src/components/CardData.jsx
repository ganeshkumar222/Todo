import { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
export const CardData = ({carddata, handleFilter , handleEdit,handledelete }) => {
    // let [color,setColor] =useState("")
    // let handleColor = () =>{
    //     if(event.target.value==="Completed"){
    //         setColor("gray")
    //     }
    //     else{
    //         setColor("red")
    //     }
    // }
  return  <Col key={carddata.id}  >
            <Card  id='bg' >
                <Card.Body>
                   <Card.Text>
                    Name:{carddata.name}
                   </Card.Text>
                   <Card.Text>
                    Description:{carddata.description}
                   </Card.Text>
                   <Card.Text>
                    Status: <select value={carddata.category}  className='select'style={{backgroundColor:`${carddata.color}`}} onChange={()=>{handleFilter(carddata.id)}}>
                        <option value="Not completed" className='option'>Not completed</option>
                        <option value="Completed" className='option'>Completed</option>
                    </select>
                   </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <ButtonGroup className='d-flex justify-content-end' >
                        <Button className="m-1" size='sm' variant='secondary' onClick={()=>{handleEdit(carddata.id)}}>Edit</Button>
                        <Button className="m-1" variant='danger' onClick={()=>{handledelete(carddata.id)}}>Delete</Button>
                    </ButtonGroup>
                </Card.Footer>
            </Card>
        </Col>
}
