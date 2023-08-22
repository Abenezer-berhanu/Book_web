import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProductDetail } from "../store/productDetailSlice"
import { useEffect } from "react"
import ReactLoading from "react-loading";
import ProductDetailSingle from '../components/ProductDetailSingle'
import SelectedProducts from "../components/SelectedProducts";

export default function ProductDetail() {
  const {id} = useParams()
  const dispatch = useDispatch()

  const {data, status} = useSelector(state => state.productDetail)
  useEffect(()=>{
    dispatch(getProductDetail(id))
  },[])
  return (
    <>
    {status === 'loading' ? 
    <div style={{ width: "fit-content", margin: "0 auto" }}>
              <ReactLoading
                type="bars"
                color="#fc7303"
                height={100}
                width={100}
              />
    </div> : 
    <div>
      <ProductDetailSingle data={data} />
      <SelectedProducts name={data.category}/>
    </div>
    }
    </>
  )
}
