import React, { useEffect, useState } from "react";

import Spinner from "../components/Spinner"
import Product from "../components/Product"

const HomePage = ()=>{
    const API_URL = "https://fakestoreapi.com/products";

    const [loading,setLoading] = useState(false);
    const [items,setItems] = useState([]);

    async function fetchProductData(){
        setLoading(true);
        try{
            const result = await fetch(API_URL);
            const data = await result.json();
            setItems(data);
        }
        catch(error){
            console.log("Error Occured ");
        }
        setLoading(false);
    }
    useEffect(()=>{
        fetchProductData();
    },[])
    return (
        <div>
            {
                loading ? <Spinner/> : 
                items.length > 0 ? 
                (<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
                    gap-y-8 max-w-6xl p-6 mx-auto my-7 min-h-[80vh]">
                    {
                        items.map((item) =>(<Product key={item.id} item={item}/>))
                    }
                </div>): 
                (<div className="w-screen h-screen flex justify-center items-center">
                    <p className="font-bold">
                        No Data Found
                    </p>
                </div>) 
            }
        </div>  
    )
}

export default HomePage;