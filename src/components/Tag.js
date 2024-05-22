import React, { useEffect, useState } from 'react'
import axios from 'axios';
import useGif from '../hooks/useGif';
// import 'react-toastify/dist/ReactToastify.css';
// import { toast } from 'react-toastify'; 
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Tag() {

    const [tag,setTag] = useState('fun');

    // const [gif, setgif] = useState('');

    // loading spinner
    // const [loading, setLoading] = useState(true);
 
    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        
    //     const { data } = await axios.get(url); // getting data from url 

      
    //     // console.log(output);
    //     const imageSource = data.data.images.downsized_large.url;
    //     // console.log(imageSource);
    //     setgif(imageSource);

    //     setLoading(false);


    // }
    // useEffect(() => {
    //     fetchData();
    // }, [])

    const{gif,loading,fetchData} = useGif(tag);

    const clickHandler = () => {
        fetchData(tag);
    }

    const changeHandler=((event)=>{
        setTag(event.target.value);
        

    })
    
    return (
        <div className='w-1/2 rounded-lg border border-black  bg-blue-400 flex flex-col items-center gap-y-5'>
            <h1 className='text-2xl underline uppercase font-semibold'> Random {tag} Gif</h1>

            {loading ? (

                <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Loading...</span>
                </div>


            ) : (
               <img src={gif} alt="Random GIF" className='w-[25rem] h-[20rem]' />
                
            )}


                <input
                className='border font-semibold uppercase  rounded-lg py-3 mb-4 w-[70%] text-center bg-[#c9f5d9] hover:bg-gray-100'
                onChange={changeHandler}
                value={tag}
                />
            <button onClick={clickHandler} className='border font-semibold uppercase  rounded-lg py-3 mb-4 w-[70%] bg-[#c9f5d9] hover:bg-gray-100'>Generate</button>
        </div>
    )
}
