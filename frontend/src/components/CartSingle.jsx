import { Button } from "@mui/material";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";

export default function CartSingle({ datas }) {
  const dispatch = useDispatch();
  
  const removeItem = () => {
    dispatch(removeFromCart(datas));
  };
  const cards = datas.map((data) => (
    <div key={data.data._id}>
      <Card
        style={{
          width: "50%",
          marginBottom: "1em",
          boxShadow: "2px 2px 5px black",
        }}
      >
        <Card.Img
          variant="top"
          src={data.data.image}
          style={{
            width: "100px",
            height: "100px",
            margin: "auto",
            padding: "5px",
          }}
        />
        <Card.Body>
          <Card.Title>{data.data.name}</Card.Title>
          <Card.Text>${data.data.price}</Card.Text>
          <Row>
            <Col>
              <Card.Text>
                Quantity: <strong>{data.itemAmount}</strong>
              </Card.Text>
            </Col>
            <Col>
              <Card.Text>
                Total: <strong>{data.itemAmount * data.data.price}</strong>
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: "white" }}>
          <Button variant="contained" onClick={removeItem}>
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return <div>{cards}</div>;
}
