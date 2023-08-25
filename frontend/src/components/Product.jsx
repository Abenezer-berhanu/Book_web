
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { Box } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import UpdateProduct from "../pages/UpdateProduct";


export default function MediaCard({ product }) {
  const navigate = useNavigate()
  const id = JSON.parse(localStorage.getItem('user_data')).user_id
  const [isUser, setIsUser] = useState(false)

  useEffect(()=>{
    if(id === product.user){
      setIsUser(true)
    }
  },[])
  return (
    <div className="card" style={{ position: 'relative'}}>
      {isUser && <div className="edit-icon" title="edit content" onClick={()=>{navigate('products/updateProduct', {state : product})}}><EditIcon sx={{fontSize:'1.5rem', color: '#0A58CA'}}/></div>}
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
