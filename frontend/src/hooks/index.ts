import axios from "axios";
import { useEffect, useState } from "react"
import { BACKENDURL } from "../../config";

interface Blog {
    "content" : string;
    "title" : string;
     "id" : number;
     "author" : {
        "name" : string;
     }
}
export const useBlogs = () => {
    const[loading,setLoading] = useState<Boolean>(true);
    const[blogs,setBlogs] = useState<Blog[]>([])

   
    useEffect(()=> {
            axios.get(`${BACKENDURL}/api/v1/blog/bulk`,{
                headers : {
                    Authorization : localStorage.getItem("token")
                }
            }).then( response => {
                setBlogs(response.data);
                setLoading(false);
            })
    },[])
    return{
        loading,
        blogs
    }
}