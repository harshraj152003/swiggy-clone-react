import { useEffect, useState } from "react";
import resData from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaraunts, setListOfRestaraunt] = useState(
    resData.restaurants
  );

  const [searchText, setSearchState] = useState("");

  // useEffect(()=>{
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5694398&lng=77.43705899999999&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");

  //   const jsonData = await data.json();

  //   console.log(jsonData);

  // };

  if (listOfRestaraunts.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="search.."
            value={searchText}
            onChange={(e) => {
              setSearchState(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const filteredRestaraunt = listOfRestaraunts.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfRestaraunt(filteredRestaraunt);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaraunts.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            setListOfRestaraunt(filteredList);
          }}
        >
          Top Rated Restaraunts
        </button>
      </div>

      <div className="res-container">
        {listOfRestaraunts.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
