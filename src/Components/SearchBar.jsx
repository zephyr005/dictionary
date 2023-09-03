import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { fetchData } from '../redux/action/actionSearch';


const SearchBar = () => {

    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    function search(){
        if(input.trim() === ""){
            return;
        }
        dispatch(fetchData(input));
        setInput("");
    }

    return (
        <div>
            <input type='text' value={input} onChange={(e) => setInput(e.target.value)} className="border-solid border-black border p-2 w-[15rem] outline-none" placeholder='Search of a word...' />
            <button className="text-white bg-primary border-solid border-black border p-2" onClick={search}>Submit</button>
        </div>
    )
}

export default SearchBar
