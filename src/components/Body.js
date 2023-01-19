import { useState, useEffect } from "react"
import { restaurantList } from "../constants"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer"


function filterData(searchText, restaurants) {

    const filteredData = restaurants.filter((restaurant) => {
        return restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    }
    )

    return filteredData

}

const Body = () => {

    // let searchTxt = "Empire"

    const [searchText, setSearchText] = useState("")

    const [allRestaurants, setAllRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    // empty dependency array => once after initial render
    // dependency array [searchText] => once after initial render + everytime after re-rendering(searchText changes) 
    // no dependency array => everytime after rendering
    useEffect(() => {
        //Call API   
        getRestaurantList()
        console.log("useEffect called")
    }, [searchText])

    async function getRestaurantList() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.992001&lng=77.534175&page_type=DESKTOP_WEB_LISTING")
        const jsonData = await data.json()
        console.log(jsonData)
        setAllRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards)
    }

    console.log("render called")

    //Early return : not rendering component
    if (!allRestaurants)
        return <h1>No restaurants data : Initial Loading...</h1>

    // if (filteredRestaurants.length === 0)
    //     return <h1>No restaurants matched your search!</h1>
    //Conditional rendering
    // if restaurants is empty => show Shimmer UI
    // if restaurants is not empty ==> show Actual UI

    return (allRestaurants.length === 0) ? <Shimmer /> : (
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search"
                    value={searchText} onChange={(e) =>
                        setSearchText(e.target.value)} />
                <button className="search-btn" onClick={() => {
                    //Filter the data
                    const data = filterData(searchText, allRestaurants)
                    //Update the restaurant list  
                    setFilteredRestaurants(data)

                }}>Search</button>

            </div>
            <div className="restaurant-list">

                {
                    /**
                     * Wrte logic to filter when search results are not found
                     */
                    (filteredRestaurants.length === 0) ? <h1>No Search results!</h1> :
                        filteredRestaurants.map((restaurant) => {
                            return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                        })
                }
            </div>
        </>
    )
}

export default Body