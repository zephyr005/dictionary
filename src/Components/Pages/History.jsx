import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar'
import { useSelector, useDispatch } from 'react-redux'
import DisplayWord from '../DisplayWord'
import { clearSearchData } from "../../redux/action/actionSearch";


const History = () => {

  const storedData = useSelector((state) => state.storeData)
  const [refData, setRefData] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearSearchData());
  })

  return (
    <div>
      <NavBar />
      {
        refData ? (
          <div className=" ">
            <DisplayWord data={refData} />
          </div>
        ) : (storedData.length !== 0) ? 
          <div className={`bg-white p-4 ${refData ? "hidden" : "block"}`}>
            <h1 className="text-xl font-bold">Search History</h1> 
            {
              storedData.map((data) => <p className=" cursor-pointer" onClick={() => setRefData(data)}>{data?.[0].word}</p>)
            }
          </div>
         : <p className="p-4 bg-white">Kindly Search the word...</p>
      }

    </div>
  )
}

export default History
