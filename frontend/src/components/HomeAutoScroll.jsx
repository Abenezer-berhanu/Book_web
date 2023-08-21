import { Carousel } from "react-bootstrap";
import axios from "axios";
import {API_URI} from "../constants";
import { useEffect, useState } from "react";

export default function HomeAutoScroll() {
  const [products, setProducts] = useState();

  const getTopProducts = async () => {
    const res = await axios(`${API_URI}/products/topProducts`);
    const result = res.data.products;
    setProducts(result);
  };
  useEffect(()=>{
    getTopProducts()
  },[])
  return (
    <div>
      <Carousel className="carousel">
        {products &&
          products.map((product) => {
            return (
              <Carousel.Item interval={4000} key={product._id}>
                <img src={product.image} alt={product.name} />
                <Carousel.Caption className="carousel-text">
                  <h3>{product.name}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
      </Carousel>
    </div>
  );
}
