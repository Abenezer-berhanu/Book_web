import axios from "axios"
import { API_URI } from "../constants"

const postProduct = async (id, data) => {
    const res = await axios(`${API_URI}/products/addProduct/${id}`,{data})
    const result = res.data
    return result
}

export default postProduct()