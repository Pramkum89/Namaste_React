import { useState } from "react"
import { restaurantList } from "../constants"
import RestaurantCard from "./RestaurantCard"


function filterData(searchText, restaurants) {

    const filteredData = restaurants.filter((res) => {
        return res.data.name.toLowerCase().includes(searchText.toLowerCase())
    }
    )

    return filteredData

}

const Body = () => {

    // let searchTxt = "Empire"

    const [searchText, setSearchText] = useState("")

    const [restaurants, setRestaurants] = useState(restaurantList)




    return (
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search"
                    value={searchText} onChange={(e) =>
                        setSearchText(e.target.value)} />
                <button className="search-btn" onClick={() => {
                    //Filter the data
                    const data = filterData(searchText, restaurants)
                    //Update the restaurant list  
                    setRestaurants(data)

                }}>Search</button>

            </div>
            <div className="restaurant-list">
                {
                    restaurants.map((restaurant) => {
                        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                    })
                }
            </div>
        </>
    )
}

export default Body