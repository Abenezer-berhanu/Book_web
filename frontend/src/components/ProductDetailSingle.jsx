import { Button} from "@mui/material";
import { useNavigate } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Rating from "./Rating";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { addToCart } from "../store/cartSlice";


export default function ProductDetailSingle({data}) {
  const [itemAmount, setAmount] = useState(1)
  const { data: allData , value} = useSelector(state=>state.cart)

const dispatch = useDispatch()
  const decrement = () => {
    setAmount(itemAmount - 1)
  }
    const incerement = () => {
      setAmount(itemAmount + 1)
    }

    const add = () => {
      const id = data._id
      const productId = allData.map(item => item.data._id)
      const isExist = productId.includes(id)
      if(!isExist){
        const arr = {data, itemAmount}
        dispatch(addToCart(arr))
      }
      
    }

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
              <hr />
            <div className="cart-button-detail-container">
            <div className="cart-button-detail">
              <Button disabled={itemAmount ? false : true} onClick={decrement} variant="contained" ><RemoveIcon /></Button>
              <big>{itemAmount}</big>
              <Button onClick={incerement} variant="contained"><AddIcon /></Button>
            </div>
              <Button onClick={add} variant="contained" className="add-btn-detail"><strong>Add</strong></Button>
            </div>
        </div>
        
    </>
  )
}
