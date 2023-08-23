import axios from "axios"
import { API_URI } from "../constants"

const postProduct = async (id, data) => {
    const res = await axios.post(`${API_URI}/products/addProduct/${id}`,{data})
    const result = await res
    return result
}

export default postProduct