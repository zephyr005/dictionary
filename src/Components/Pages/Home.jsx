import React from 'react'
import NavBar from '../NavBar';
import SearchBar from '../SearchBar';
import { useSelector } from "react-redux"
import DisplayWord from '../DisplayWord';
import Loader from '../Loader';

const Home = () => {

  const data = useSelector((state) => state.data);
  const loader = useSelector((state) => state.loading);
  const displayError = useSelector(state => state.error);

  return (
    <div className="overflow-hidden">
      <NavBar />
      <div className="w-full flex justify-center items-center pt-10 mb-10">
        <SearchBar />
      </div>
      {
        data ? <DisplayWord data={data?.[0]} /> : ""
      }
      {
        loader ? <Loader /> : ""
      }
      {
        displayError ? (
            <h3 className="text-xl font-semibold p-4">Data Not found, Try again..!</h3>
        ) : ""
      }
    </div>
  )
}

export default Home
