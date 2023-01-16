const RestaurantCard = ({ cloudinaryImageId, name, cuisines, lastMileTravelString }) => {
    // console.log(restaurant)
    // const { cloudinaryImageId, name, cuisines, lastMileTravelString } = restaurant
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
                + cloudinaryImageId} alt="card-img" />
            <h2>{name}</h2>
            <h3>{cuisines?.join(", ")}</h3>
            <h4>{lastMileTravelString}</h4>
        </div>
    )
}

export default RestaurantCard