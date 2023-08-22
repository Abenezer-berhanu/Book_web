import { useSelector } from "react-redux"
import ReactLoading from 'react-loading'
import CartSingle from "../components/CartSingle"
import { Button } from "@mui/material"


export default function Cart() {
  const {data, status} = useSelector(state => state.cart)
  const prices = data.map(item => item.data.price)
  const itemAmount = data.map(item => item.itemAmount)
  let totalPrice = 0
  for(let i = 0; i < prices.length; i++){
    totalPrice = totalPrice + prices[i]*itemAmount[i]
  }
  return (
    <div>
      {data.length ? <h4>Total Price: {totalPrice}</h4> : ''}
      {
        status === 'loading' ? <div style={{ width: "fit-content", margin: "0 auto" }}>
        <ReactLoading
          type="bars"
          color="#fc7303"
          height={100}
          width={100}
        />
  </div> : <div>
    {
      <CartSingle datas={data} />
    }
    {data.length ? <Button variant="contained" style={{ margin : '2em'}}>Save</Button> : ''}
  </div>
    }
    {!data.length && <h1>No item found in you cart</h1>}
    </div>
  )
}
