import { Col, ListGroup, Row } from "react-bootstrap";
import { Button } from "@mui/material";
import HomeAutoScroll from "../components/HomeAutoScroll";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from "../store/productSlice";
import { useEffect } from "react";
import Product from "../components/Product";
import ReactLoading from 'react-loading'

export default function Home() {
  const {data , status} = useSelector(state => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  },[])
  
  return (
    <div className="home-wrapper">
      <HomeAutoScroll />
      <Row class="d-flex justify-content-center w-100">
        <Col md={2}>
          <ListGroup>
            <ListGroup.Item>
              <h5 style={{ textAlign: "center" }}>
                <strong>Filter</strong>
              </h5>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row class="d-flex align-items-center">
                  <p>
                    <strong>Price</strong>
                  </p>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="0$ - 20$"
                    />
                   <FormControlLabel
                      control={<Checkbox />}
                      label="20$ - 40$"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="40$ - 60$"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="60$ - 80$"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="80$ - 100$"
                    />
                     <FormControlLabel
                      control={<Checkbox />}
                      label="More than 100$"
                    />
                  </FormGroup>
                <Button variant="contained">$ Filter $</Button>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={10} style={{ borderLeft: "1px solid black", padding: '10px'}}>
          <Row><h4><strong>Products</strong></h4></Row>
          {status === "loading" ? <div style={{ width : 'fit-content', margin: '0 auto'}}>
          <ReactLoading type="bars" color="#0000FF"
                height={100} width={100} /> 
          </div>: <Row>
            {
              data.map(product => {
                return(
                  <Col  sm={12} md={6} lg={4} xl={3} key={product._id}>
                    <Product product={product}/>
                  </Col>
                )
              })
            }
          </Row>  }
        </Col>
      </Row>
    </div>
  );
}
