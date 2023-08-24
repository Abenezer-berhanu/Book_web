import { Alert, Button, Typography } from "@mui/material";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import postProduct from "../api/postProduct";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../store/productSlice";
import axios from "axios";
import { API_URI } from "../constants";

export default function AddProduct() {
  const [showAlert, setShowAlert] = useState(false);
  const [input, setInput] = useState({
    name: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: 0,
    amount: 0,
    phone: "",
  });
  const [error, setError] = useState("");
  const [errorAlert, setErrorAlert] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageSubmit = async (e) => {
    setInput((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("price", input.price);
    formData.append("description", input.description);
    formData.append("category", input.category);
    formData.append("image", input.image);
    formData.append("rating", input.rating);
    formData.append("amount", input.amount);
    formData.append("phone", input.phone);
    setError("");
    const id = JSON.parse(localStorage.getItem("user_data")).user_id;
    const res = postProduct(id, formData);
    res.then((result) => {
      if (result.status === 201) {
        dispatch(getProducts());
        setShowAlert(true);
        {
          setTimeout(() => {
            setShowAlert(false);
            navigate("/");
          }, 3000);
        }
      } else if (result.status !== 201) {
        setError(result.data.message);
        setErrorAlert(true);
        setTimeout(() => {
          setErrorAlert(false);
        }, 4000);
      }
    });
  };

  return (
    <>
      {errorAlert && (
        <Alert
          severity="error"
          sx={{ margin: "auto", maxWidth: "400px", width: "50%" }}
        >
          {error}
        </Alert>
      )}
      {showAlert && (
        <Alert
          severity="success"
          sx={{ margin: "auto", maxWidth: "400px", width: "50%" }}
        >
          Product Successfully Posted
        </Alert>
      )}
      <Button to="/" variant="contained" sx={{ margin: "2em" }}>
        Go Back
      </Button>

      <Typography variant="h5" sx={{ textAlign: "center" }}>
        <strong>Post Product</strong>
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
        onSubmit={handleSubmit}
      >
        <Form.Group controlId="name" class="border border-secondary p-2">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Enter name"
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="price" class="border border-secondary p-2">
          <Form.Label>Price</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="price"
            type="number"
            placeholder="Enter price"
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="description" class="border border-secondary p-2">
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={handleChange}
            as="textarea"
            rows={3}
            name="description"
          />
        </Form.Group>

        <Form.Group controlId="brand" class="border border-secondary p-2">
          <Form.Label>Category</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="category"
            type="text"
            placeholder="Enter brand"
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="image" class="border border-secondary p-2">
          <Form.Label class="d-flex mb-2">Image</Form.Label>
          <Form.Control
            onChange={handleImageSubmit}
            name="image"
            label="Choose File"
            type="file"
          ></Form.Control>
        </Form.Group>

        <Form.Group
          controlId="countInStock"
          class="border border-secondary p-2"
        >
          <Form.Label>Rating</Form.Label>
          <Form.Control
            name="rating"
            onChange={handleChange}
            type="number"
            placeholder="Enter countInStock"
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
            placeholder="Enter phone number"
          ></Form.Control>
        </Form.Group>
        {errorAlert && (
          <Alert
            severity="error"
            sx={{ margin: "auto", maxWidth: "400px", width: "50%" }}
          >
            {error}
          </Alert>
        )}
        <Button type="submit" variant="contained" style={{ marginTop: "1rem" }}>
          Post
        </Button>
      </Form>

      {showAlert && (
        <Alert
          severity="success"
          sx={{ margin: "auto", maxWidth: "400px", width: "50%" }}
        >
          Product Successfully Posted
        </Alert>
      )}
    </>
  );
}
