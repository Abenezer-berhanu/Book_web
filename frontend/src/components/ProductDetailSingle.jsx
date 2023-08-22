import { Button} from "@mui/material";
import { useNavigate } from 'react-router-dom'
import {Col, Row} from 'react-bootstrap'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Rating from "./Rating";
import { useState } from "react";


export default function ProductDetailSingle({data}) {
  const [itemAmount, setAmount] = useState(1)


  const decrement = () => {
    setAmount(itemAmount - 1)
  }
    const incerement = () => {
      setAmount(itemAmount + 1)
    }

    const add = () => {}

    const navigate = useNavigate()
  return (
    <>
        <Button variant="contained" size="small" sx={{ margin: '2em'}} onClick={()=>{navigate('/')}}>Go Back</Button>
        <div className="product-detail-container">
            <img src={data.image} alt="" />
            <div className="text-comment">
            <h5 className="name"><strong>{data.name}</strong></h5>
            <div className="description">{data.description}</div>
            </div>
            <div className="property">
            <h6>price<strong>: ${data.price}</strong></h6>
            <h6>category<strong>: {data.category}</strong></h6>
            <Rating value={data.rating} text={data.numLike}/>
            </div>
            <Row>
              <hr />
              <Col md={3}><Button onClick={decrement} disabled={itemAmount ? 'false' : 'true'} ><RemoveIcon /></Button></Col>
              <Col md={3}><big>{itemAmount}</big></Col>
              <Col md={3}><Button onClick={incerement}><AddIcon /></Button></Col>
              <Col md={3}><Button onClick={add}><strong>Add</strong></Button></Col>
            </Row>
        </div>
        
    </>
  )
}
