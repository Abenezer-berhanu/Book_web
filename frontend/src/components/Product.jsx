import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'
import Rating from './Rating';
import { Box } from '@mui/material';

export default function MediaCard({product}) {
  return (
    <Card sx={{ margin: '15px' }}>
        <Link><img src={product.image} alt="" title='this product detail' className='product-image'/></Link>
      
      <hr />
      <CardContent>
        <Typography variant="h5" component="div" className='product-name'>
          {product.name}
        </Typography>
        <Box>
            <Rating value={product.rating} text={product.numLike}/>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small"><strong>Detail</strong></Button>
        <Button variant='contained'>Add to cart</Button>
      </CardActions>
    </Card>
  );
}



// import React from "react";
// import { Link } from "react-router-dom";
// import { Card } from "react-bootstrap";
// import Rating from "./Rating";

// const Product = ({ product }) => {
//   return (
//     <Card className="my-3 p-3 rounded">
//       <Link to={`/product/${product._id}`}>
//         <Card.Img src={product.image} variant="top" className='product-image'/>
//       </Link>

//       <Card.Body>
//         <Link to={`/product/${product._id}`}>
//           <Card.Title as="div">
//             <strong className="product-name">{product.name}</strong>
//           </Card.Title>
//         </Link>

//         <Card.Text as="div">
//           <Rating
//             value={product.rating}
//             text={`${product.numLike}`}
//           />
//         </Card.Text>
//         <Card.Text as="h3">${product.price}</Card.Text>
//       </Card.Body>
//       <CardActions>
//          <Button size="small"><strong>Detail</strong></Button>
//         <Button variant='contained'>Add to cart</Button>
//        </CardActions>
//     </Card>
//   );
// };

// export default Product;