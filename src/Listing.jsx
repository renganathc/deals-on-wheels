import "./listing.css";
import Header from "./Header.jsx"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Listing () {

    const doc_id = useParams().id;

    const [car_data, setCar_data] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        
            const get_car = async () => {
                try {
                    const result = await fetch(`https://deals-on-wheels-backend.onrender.com/api/cars?_id=${doc_id}`);
                    const data = await result.json();

                    setCar_data(data.data[0]);
                    console.log(data.data);
                }
                catch (e) {
                    setError(true);
                }
            }

            get_car();

    }, [doc_id]);

    if (error) return (<h1 style={{textAlign:"center"}}>Yep! That's a 404</h1>);

    if (car_data == null) return (<></>);

    return (
        <div className="listing-con">
            <Header />
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div className="main-image-container"><img className="main-image" src={car_data.image} alt={`${car_data.brand} ${car_data.model}`} /></div>
                <div className="main-info-card">
                <h2 className="car-name">{car_data.year} {car_data.brand} {car_data.model}</h2>

                <p className="sub-text">Variant: {car_data.variant}</p>
                <p className="sub-text">Kilometers Driven: {car_data.km.toLocaleString()} km</p>
                <p className="sub-text">Fuel: {car_data.fuel}</p>
                <p className="sub-text">Transmission: {car_data.transmission}</p>
                <p className="sub-text">Owner Count: {car_data.ownerCount} Owner</p>

                <div style={{ marginTop: 20 }}>
                    <button className="buy" style={{display: "inline-block", boxSizing: "border-box", padding: "10px 0", marginRight:"2.5%"}} onClick={() => {alert("Under construction. Will be up shortly :)")}}>Book Now</button>
                    <button className="test-drive" style={{display: "inline-block", boxSizing: "border-box", padding: "10px 0"}} onClick={() => {alert("Under construction. Will be up shortly :)")}}>Test Drive</button>
                </div>
                {/*<p className="portfolio-link">DoW Assured</p>*/}
                </div>
            </div>

            <h2 class="benefits-heading">Benefits & Add-ons</h2>
            <div class="benefits-section">
            <div class="benefit-item">
                <img class="icon" src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Warranty Icon"/>
                <div class="benefit-text">
                <strong>6 months</strong><br/>warranty
                </div>
            </div>
            <div class="benefit-item">
                <img class="icon" src="https://cdn-icons-png.flaticon.com/512/190/190406.png" alt="Points Icon"/>
                <div class="benefit-text">
                <strong>200-points</strong><br/>inspected
                </div>
            </div>
            <div class="benefit-item">
                <img class="icon" src="https://cdn-icons-png.flaticon.com/512/942/942748.png" alt="Money Back Icon"/>
                <div class="benefit-text">
                <strong>5-day</strong><br/>money back
                </div>
            </div>
            <div class="benefit-item">
                <img class="icon" src="https://cdn-icons-png.flaticon.com/512/891/891419.png" alt="Fixed Price Icon"/>
                <div class="benefit-text">
                <strong>Fixed price</strong><br/>assurance
                </div>
            </div>
            <div class="benefit-item">
                <img class="icon" style={{height:"35px", width:"45px", objectFit:"fill"}} src="https://static.vecteezy.com/system/resources/previews/053/473/220/non_2x/tow-truck-lifting-a-green-broken-car-onto-a-flatbed-utilizing-a-crane-for-efficient-roadside-assistance-and-transportation-services-in-an-urban-setting-vector.jpg" alt="Roadside Assistance Icon"/>
                <div class="benefit-text">
                <strong>Roadside</strong><br/>assistance
                </div>
            </div>
            </div>

            <p style={{textAlign:"center", fontWeight:400, margin:70, marginBottom:40}}>Built with ❤️ by Renganath C </p>

        </div>
    );

}

export default Listing;