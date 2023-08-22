import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificItem } from "../store/specificItem";
import Product from "../components/Product";

export default function SelectedProducts({ name }) {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.relatedItem);
  useEffect(() => {
    dispatch(getSpecificItem(name));
  }, [name]);
  return (
    <>
      <h5 style={{ paddingLeft: '1em', margin: '2em 0 1em 0'}}>
        <strong>Related Items</strong>
      </h5>
      <div className="related-items-container">
        {data.map((product) => {
          return (
            <div className="related-item" key={product._id}>
              <Product product={product} />
            </div>
          );
        })}
      </div>
    </>
  );
}
