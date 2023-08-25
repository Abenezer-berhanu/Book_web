import axios from "axios"
import {API_URI}from '../constants'

 const updateProduct = async(id, data) => {
    try {
        const res = await axios.patch(`${API_URI}/products/updateProduct/${id}`, data)
        return res
        
    } catch (error) {
        console.log(error)
    }
}

export default updateProduct