import { Col, ListGroup, Row } from "react-bootstrap";
import { Button } from "@mui/material";
import HomeAutoScroll from "../components/HomeAutoScroll";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function Home() {

  return (
    <div className="home-wrapper">
      <HomeAutoScroll />
      <Row class="d-flex justify-content-center w-100">
        <Col md={3}>
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
        <Col md={9} style={{ borderLeft: "1px solid black", padding: '10px'}}>
          <Row><h4><strong>Products</strong></h4></Row>
          <Row>
            
          </Row>
        </Col>
      </Row>
    </div>
  );
}
