import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { Box } from "@mui/material";
import { Col, Row } from "react-bootstrap";

export default function MediaCard({ product }) {
  return (
    <div className="card">
      <Link to={`http://localhost:5173/products/${product._id}`}>
        <img
          src={`http://localhost:3000/uploads/${product.image}`}
          alt=""
          title="this product detail"
          className="product-image"
        />
      </Link>

      <CardContent>
        <Typography component="div" className="product-name">
          {product.name}
        </Typography>
        <Box>
          <Rating value={product.rating} text={product.numLike} />
        </Box>
      </CardContent>
      <Row style={{marginTop: 'auto'}}>
        <Col md={6}>
          <Button size="small">
            <Link
              style={{ textDecoration: "none" }}
              to={`/products/${product._id}`}
            >
              <strong>Detail</strong>
            </Link>
          </Button>
        </Col>
        <Col md={6}>
          <Typography class="text-start p-1">
           <strong>{product.price} birr</strong>
          </Typography>
        </Col>
      </Row>
    </div>
  );
}
