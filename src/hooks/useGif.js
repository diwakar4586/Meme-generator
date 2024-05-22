import React, { useEffect, useState } from 'react'
import axios from 'axios';
import useGif from '../hooks/useGif';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify'; 

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const randomUrl =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
export default function Tag(tag) {
    
    
    
    const [gif, setgif] = useState('');

    // loading spinner
    const [loading, setLoading] = useState(true);
    
    async function fetchData(tag) {
        setLoading(true);
        try{
        const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
         const { data } = await axios.get(tag? tagMemeUrl:randomUrl); // getting data from url 
         // console.log(output);
         const imageSource = data.data.images.downsized_large.url;
         // console.log(imageSource);
         setgif(imageSource);
        }
        catch(error){
            // alert("This tag is not available try another");
            toast.error("not available");
        }
        setLoading(false);
    }
    useEffect(() => {
        fetchData(tag);
    }, [])

    return{gif,loading,fetchData};


}
