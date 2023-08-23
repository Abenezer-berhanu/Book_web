import { Button, Typography } from "@mui/material";
import { Form } from "react-bootstrap";
import {useNavigate} from 'react-router-dom'
import postProduct from "../api/postProduct";
import { useState } from "react";

export default function AddProduct() {
  const [input, setInput] = useState({
    name:'',
    price:0,
    description: "",
    category: "",
    image: "",
    rating:0,
    amount:0
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = JSON.parse(localStorage.getItem('user_data')).user_id
    console.log(input)
    // postProduct(id, )
  }

  return (
    <>
      <Button to='/' variant="contained" sx={{margin : '2em'}}>
        Go Back
      </Button>

        <Typography variant="h5" sx={{ textAlign: 'center'}}><strong>Post Product</strong></Typography>
          <Form style={{maxWidth: '800px',margin:'auto', padding:'20px', display:'flex', flexDirection: 'column', gap:'10px'}} onSubmit={handleSubmit}>
            <Form.Group controlId='name' class="border border-secondary p-2">
              <Form.Label>Name</Form.Label>
              <Form.Control
              onChange={handleChange}
                name="name"
                type='text'
                placeholder='Enter name'
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='price' class="border border-secondary p-2">
              <Form.Label>Price</Form.Label>
              <Form.Control
              onChange={handleChange}
                name="price"
                type='number'
                placeholder='Enter price'
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='description' class="border border-secondary p-2">
              <Form.Label>Description</Form.Label>
              <Form.Control
              onChange={handleChange} as="textarea" rows={3} name="description"/>
            </Form.Group>

            <Form.Group controlId='brand' class="border border-secondary p-2">
              <Form.Label>Category</Form.Label>
              <Form.Control
              onChange={handleChange}
              name="category"
                type='text'
                placeholder='Enter brand'
              ></Form.Control>
              </Form.Group>

            <Form.Group controlId='image' class="border border-secondary p-2">
              <Form.Label class="d-flex mb-2">Image</Form.Label>
              <Form.Control
              onChange={handleChange}
              name="image"
                label='Choose File'
                type='file'
              ></Form.Control>
            </Form.Group>
            

            <Form.Group controlId='countInStock' class="border border-secondary p-2">
              <Form.Label>Rating</Form.Label>
              <Form.Control
              onChange={handleChange}
                type='number'
                placeholder='Enter countInStock'
                
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='countInStock' class="border border-secondary p-2">
              <Form.Label>Amount</Form.Label>
              <Form.Control
              onChange={handleChange}
                type='number'
                placeholder='Enter countInStock'
              ></Form.Control>
            </Form.Group>

            

            <Button
              type='submit'
              variant='contained'
              style={{ marginTop: '1rem' }}
            >
              Post
            </Button>
          </Form>
    </>
  )
}
