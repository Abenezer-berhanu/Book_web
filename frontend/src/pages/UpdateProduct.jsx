import { Form } from 'react-bootstrap'
import { Alert, Button, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import updateProduct from '../api/updateProduct'


export default function UpdateProduct() {
    const navigate = useNavigate()
    const location = useLocation()
    const data = location.state
    const [successAlert, setSuccessAlert] = useState(false)
    const [errorAlert, setErrorAlert] = useState(false)
    const [input, setInput] = useState({
        name: data.name,
        price : data.price,
        description: data.description,
        category: data.category,
        amount: data.amount,
        phone: data.phone
    })
        const handleSubmit = (e) => {
        e.preventDefault()
        if(!input.name || !input.price || !input.description || !input.category || !input.amount || !input.phone){
          setErrorAlert(true)
          setTimeout(()=>{
            setErrorAlert(false)
          },8000)
          return;
        }
        const res = updateProduct(data._id, input)
        res.then(result => 
        {
          console.log(result)
          if(result.status === 200){
            setSuccessAlert(true)
            setTimeout(()=>{
              setSuccessAlert(false)
              navigate('/myProducts')
            },4000)
          }else{
            setErrorAlert(true)
            setTimeout(()=>{
            setErrorAlert(false)
            },4000)
          }
        })}

    const handleChange = (e) => {
        setInput((prev)=>({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
  return (
    <>
    {successAlert && <Alert severity='success'>products seccessfuly updated</Alert>}
    {errorAlert && <Alert severity='error'>product not updated please make sure to fill all spaces and at least put 1 at price and amount</Alert>}
    <Button to="/myProducts" variant="contained" sx={{ margin: "2em" }}>
       Go Back
      </Button>

    <Typography variant="h5" sx={{ textAlign: "center" }}>
      <strong>Update Product</strong>
      </Typography>

      <Form
        style={{
          maxWidth: "800px",
          margin: "auto",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Form.Group controlId="name" class="border border-secondary p-2">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="name"
            type="text"
            value={input.name}
            placeholder="Enter name"
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="price" class="border border-secondary p-2">
          <Form.Label>Price</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="price"
            type="number"
            value={input.price}
            placeholder="Enter price"
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="description" class="border border-secondary p-2">
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={handleChange}
            as="textarea"
            rows={3}
            value={input.description}
            name="description"
          />
        </Form.Group>

        <Form.Group controlId="brand" class="border border-secondary p-2">
          <Form.Label>Category</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="category"
            type="text"
            value={input.category}
            placeholder="Enter brand"
          ></Form.Control>
        </Form.Group>

        <Form.Group
          controlId="countInStock"
          class="border border-secondary p-2"
        >
          <Form.Label>Amount</Form.Label>
          <Form.Control
            name="amount"
            onChange={handleChange}
            type="number"
            value={input.amount}
            placeholder="Enter Quantity"
          ></Form.Control>
        </Form.Group>

        <Form.Group
          controlId="countInStock"
          class="border border-secondary p-2"
        >
          <Form.Label>Phone</Form.Label>
          <Form.Control
            name="phone"
            onChange={handleChange}
            type="tel"
            value={input.phone}
            placeholder="Enter phone number"
          ></Form.Control>
        </Form.Group>
      {successAlert && <Alert severity='success'>products seccessfuly updated</Alert>}
      {errorAlert && <Alert severity='error'>product not updated please make sure to fill all spaces and at least put 1 at price and amount</Alert>}
        <Button onClick={handleSubmit} variant="contained" style={{ marginTop: "1rem" }}>
          Update
        </Button>
      </Form>
    </>
  )
}





// export default function UpdateProduct() {

//     const handleSubmit = () => {
        
//     }

//     const handleChange = () => {

//     }

//   return (
//     <>
//     
//       <Form
//         style={{
//           maxWidth: "800px",
//           margin: "auto",
//           padding: "20px",
//           display: "flex",
//           flexDirection: "column",
//           gap: "10px",
//         }}
//         onSubmit={handleSubmit}
//       >
//         <Form.Group controlId="name" class="border border-secondary p-2">
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             onChange={handleChange}
//             name="name"
//             type="text"
//             placeholder="Enter name"
//           ></Form.Control>
//         </Form.Group>

//         <Form.Group controlId="price" class="border border-secondary p-2">
//           <Form.Label>Price</Form.Label>
//           <Form.Control
//             onChange={handleChange}
//             name="price"
//             type="number"
//             placeholder="Enter price"
//           ></Form.Control>
//         </Form.Group>

//         <Form.Group controlId="description" class="border border-secondary p-2">
//           <Form.Label>Description</Form.Label>
//           <Form.Control
//             onChange={handleChange}
//             as="textarea"
//             rows={3}
//             name="description"
//           />
//         </Form.Group>

//         <Form.Group controlId="brand" class="border border-secondary p-2">
//           <Form.Label>Category</Form.Label>
//           <Form.Control
//             onChange={handleChange}
//             name="category"
//             type="text"
//             placeholder="Enter brand"
//           ></Form.Control>
//         </Form.Group>

//         <Form.Group
//           controlId="countInStock"
//           class="border border-secondary p-2"
//         >
//           <Form.Label>Amount</Form.Label>
//           <Form.Control
//             name="amount"
//             onChange={handleChange}
//             type="number"
//             placeholder="Enter Quantity"
//           ></Form.Control>
//         </Form.Group>

//         <Form.Group
//           controlId="countInStock"
//           class="border border-secondary p-2"
//         >
//           <Form.Label>Phone</Form.Label>
//           <Form.Control
//             name="phone"
//             onChange={handleChange}
//             type="tel"
//             placeholder="Enter phone number"
//           ></Form.Control>
//         </Form.Group>
//         <Button type="submit" variant="contained" style={{ marginTop: "1rem" }}>
//           Update
//         </Button>
//       </Form>
//     </>
//   )
// }
