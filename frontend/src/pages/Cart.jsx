import { useSelector } from "react-redux"
import ReactLoading from 'react-loading'
import CartSingle from "../components/CartSingle"
import { Box, Button, Card, CardContent, Typography } from "@mui/material"


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
    {!data.length && 
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
