import RestaurantCard from "./RestaurantCard"

const Shimmer = () => {
    return (
        <div className="restaurant-list">
            {Array(16).fill("").map((e, index) => (
                <div className="shimmer-card" key={index}>
                </div>
            ))}
        </div>
        // <h1>Shimmer UI</h1>
    )
}

export default Shimmer