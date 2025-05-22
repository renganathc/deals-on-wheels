import "./listing.css";
import Header from "./Header.jsx"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Listing () {

    const doc_id = useParams().id;

    const [car_data, setCar_data] = useState(null);

    useEffect(() => {
        const get_car = async () => {
            const result = await fetch(`https://deals-on-wheels-backend.onrender.com/api/cars?_id=${doc_id}`);
            const data = await result.json();

            setCar_data(data.data[0]);
        }

        get_car();
    }, [doc_id]);

    if (car_data == null) return (<></>);

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