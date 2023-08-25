import { useSelector } from "react-redux"
import ReactLoading from 'react-loading'
import CartSingle from "../components/CartSingle"
import { Box, Card, CardContent, Typography } from "@mui/material"
import { useEffect } from "react"
import { getCartItems } from "../store/cartSlice"
import { useDispatch } from "react-redux"


export default function Cart() {
  const {data, status} = useSelector(state => state.cart)
  const prices = data.response.map(item => item.price)
  let totalPrice = prices.reduce((acc, cur) => acc + cur)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCartItems())
  },[])

  return (
    <div>
      {data.response.length ? <h4>Total Price: {totalPrice}</h4> : ''}
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
      <CartSingle datas={data.response} />
    }
  </div>
    }
    {!data.response.length && 
    <Card
    sx={{
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <CardContent>
        <Typography component="div" variant="h5">
          No product has added to the cart
        </Typography>
        <h1>🧐</h1>
      </CardContent>
    </Box>
  </Card>
    }
    </div>
  )
}
