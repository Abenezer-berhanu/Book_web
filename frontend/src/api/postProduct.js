import axios from "axios"
import { API_URI } from "../constants"

const postProduct = async (id, formData) => {
   try {
    const res = await axios.post(`${API_URI}/products/addProduct/${id}`, formData)
    const result = await res.data
    return result
   } catch (error) {
    return error.response
   }
    
}

export default postProduct