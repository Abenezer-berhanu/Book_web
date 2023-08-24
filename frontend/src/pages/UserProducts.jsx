import Product from "../components/Product";
import ReactLoading from "react-loading";
import { useSelector } from "react-redux";

export default function Products() {
  const { data, status } = useSelector((state) => state.userProduct);
  console.log(data)

  return (
    <div className="product-filter-products">
      <div className="home-products">
        {status === "loading" ? (
          <div style={{ width: "fit-content", margin: "0 auto" }}>
            <ReactLoading
              type="bars"
              color="#fc7303"
              height={100}
              width={100}
            />
          </div>
        ) : (
          <div className="product-card-container">
            {data.map((product) => {
              return (
                <div key={product._id}>
                  <Product product={product} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
