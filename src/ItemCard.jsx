import { useState } from "react"
import "./itemCard.css"
import { useNavigate } from "react-router-dom";

function ItemCard(props) {

    const navigate = useNavigate();

    const itemClicked = (e) => {
        if (e.target.matches(".like-btn")) return;
        navigate("/car_listing", {state: props.car_data});
    }

    let [liked, setLiked] = useState(false);

    const likeCar = () => {
        setLiked(!liked);
    }

    return(
        <div className="card" onClick={itemClicked}>
            <img className="like-btn" src={liked ? "red_heart.svg" : "gray_heart.svg"} style={{opacity: liked ? "75%" : "21%"}} onClick={likeCar}/>
            <img className="card-image" src={props.car_data.image} />
            <p className="car-model"><span style={{color:"#313131", fontSize:17.3}}>{props.car_data.year} {props.car_data.brand} {props.car_data.model}</span> <span style={{fontWeight:350}}>{props.car_data.variant}</span></p>
            <div className="info-card">
                <p className="info">48.2k km</p>
                <p className="info">Petrol</p>
                <p className="info">Auto</p>
                <p className="info">1st owner</p>
            </div>
            <div className="info-card" style={{justifyContent:"space-between", paddingRight:"15px"}}>
                <p className="price-text">EMI ₹5,327/m</p>
                <div>
                <p className="price-text" style={{fontSize:"15.2px", fontFamily:"Poppins", fontWeight:500, borderBottom:0, marginBottom:0, paddingBottom:0}}>₹3.53 lakh</p>
                <p className="price-text" style={{fontSize:"12px", paddingBottom:"10px", marginTop:0, paddingBottom:2, color:"#7b7b7b", fontFamily:"Poppins", fontWeight:400}}>+ dealer charges</p>
                </div>
            </div>
            <div className="classification" style={{backgroundColor:"rgba(241, 240, 240, 0.4)", marginBottom:0, borderBottomLeftRadius:"16px", display:"flex", flexDirection:"row", alignItems:"center"}}>
                <img src="/verified.webp" style={{width:16, height:16, marginLeft:11, opacity:"84%"}}/>
                <p className="info" style={{marginBottom:0, backgroundColor:"transparent", marginLeft:-4}}><span style={{color:"#000000a5", fontWeight:570}}>DoW Assured<span style={{color:"#FF5733e9"}}></span><span style={{fontSize:14, color:"#000000"}}></span></span><span style={{color:"rgba(50, 50, 50, 0.8)"}}></span></p>
            </div>
        </div>
    )
}

export default ItemCard