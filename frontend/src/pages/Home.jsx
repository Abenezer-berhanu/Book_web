import { Button} from "@mui/material";
import HomeAutoScroll from "../components/HomeAutoScroll";
import { getProducts } from "../store/productSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet , useNavigate} from "react-router-dom";

export default function Home() {
  const [productButton, setProductButton] = useState(true)
  const [myProductButton, setmyProductButton] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const productClick = () => {
    setmyProductButton(false)
    setProductButton(true)
    navigate('/')
  }
  const myProductClick = () => {
    setProductButton(false)
    setmyProductButton(true)
    navigate('/myProducts')
  }

  return (
    <div className="home-wrapper">
      <HomeAutoScroll />
      <div style={{ display: "flex", gap: "10px"}}>
          <Button size="small" onClick={productClick}><strong style={{ color : productButton ? '' : 'black'}}>Products</strong></Button>
          <Button size="small" onClick={myProductClick}><strong style={{ color : myProductButton ? '' : 'black'}}>My products</strong></Button>
      </div>
      <Outlet/>
    </div>
  );
}

{
  /* <Row>
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
        <Col md={10} style={{ borderLeft: "1px solid black", padding: '10px', border: '2px solid red'}}>
          <><h4><strong>Products</strong></h4></>
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
      </Row> */
}
