import axios from "axios"

const getProfileApi= async ()=> {
    const res= await axios({
        url: "https://dovio.net/api/auth/me/profile",
        method: "get",
        headers: {
            "Authorization": "Bearer "+ localStorage.getItem("accessToken")
        }
    })
    const result= await res.data
    return result
}

export default getProfileApi