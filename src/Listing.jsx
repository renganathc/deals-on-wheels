import { useLocation } from "react-router-dom";
import "./listing.css";
import Header from "./Header.jsx"

function Listing () {

    const location = useLocation();
    const car_data = location.state;

    return(
        <>
        <Header/>
        <div style={{display:"flex", flexDirection:"row"}}>
            <img className="main-image" src={car_data.image}/>
            <div style={{marginTop:40}}>
            <h2>{car_data.year} {car_data.brand} {car_data.model}</h2>
            <button style={{fontSize:25}}>Buy Now</button>
            </div>
        </div>
        </>
    )
}

export default Listing;