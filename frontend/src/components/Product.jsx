import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { Box } from "@mui/material";
import { Col, Row } from "react-bootstrap";

export default function MediaCard({ product }) {
  return (
    <Card sx={{ margin: "0 0 15px 0" }} className="card">
      <Link to={`/products/${product._id}`}>
        <img
          src={product.image}
          alt=""
          title="this product detail"
          className="product-image"
        />
      </Link>

      <hr />
      <CardContent>
        <Typography variant="h6" component="div" className="product-name">
          {product.name}
        </Typography>
        <Box>
          <Rating value={product.rating} text={product.numLike} />
        </Box>
      </CardContent>
      <Row class="d-flex p-3">
        <Col md={6}><Button size="small">
          <Link
            style={{ textDecoration: "none" }}
            to={`/products/${product._id}`}
          >
            <strong>Detail</strong>
          </Link>
        </Button></Col>
        <Col md={6}><Typography class="text-end">Price: <strong>{product.price}</strong></Typography></Col>
      </Row>
    </Card>
  );
}
