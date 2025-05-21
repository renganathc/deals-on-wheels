import { useNavigate } from "react-router-dom";
import BrandList from "./BrandList";
import Header from "./Header";
import ItemCard from "./ItemCard";
import "./shop.css";
import { Slider } from "@mui/material";
import { useEffect, useState } from "react";

function Shop() {

    const navigate = useNavigate();
    const [price, setPrice] = useState([200000,2500000]);

    let [cars_list, setCars_list] = useState([]);

    useEffect(() => {
        const get_cars = async () => {
            const result = await fetch("https://deals-on-wheels-backend.onrender.com/api/cars");
            const data = await result.json();
            setCars_list(data.data);
            console.log(data.data);
        }

        get_cars();
    }, []);



    const handleCategory = () => {

    }

    const cardSelect = () => {
        navigate("/");
    }

    const addComma = (number) => {
        /* let x = String(number);
        let y = "";
        if (x.length === 6) {
            y = y + x.slice(0,1);
            y = y + ",";
            y = y + x.slice(1,3);
            y = y + ",";
            y = y + x.slice(3,6);
        }
        if (x.length === 7) {
            y = y + x.slice(0,2);
            y = y + ",";
            y = y + x.slice(2,4);
            y = y + ",";
            y = y + x.slice(4,7);
        }
        return y; */
        return number.toLocaleString("en-IN");
    }

    return(
        <>
            <Header/>
            <div className="shop-cont">
                <div className="filters">
                    <p className="sub-heading">Price Range</p>
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", marginLeft:25, marginRight:21, marginBottom:-3}}>
                    <p className="info" style={{marginTop:-5, backgroundColor:"transparent", padding:0, fontWeight:600, color:"#FF5733", fontSize:14, fontFamily:"Poppins"}}><span style={{fontSize:14.8, fontWeight:550, paddingRight:1}}>₹</span>{addComma(price[0])}</p>
                    <p className="info" style={{marginTop:-5, backgroundColor:"transparent", padding:0, fontWeight:600, color:"#FF5733", fontSize:14, fontFamily:"Poppins"}}><span style={{fontSize:14.8, fontWeight:550, paddingRight:1}}>₹</span>{addComma(price[1])}</p>
                    </div>
                    <Slider value={price} onChange={(e, val) => setPrice(val)} min={200000} max={2500000} step={100000} sx={{'.MuiSlider-thumb': { width: 15, height: 15, color:"white", border:"solid", borderWidth:1, borderColor:"#FF5733", "&:hover, &.Mui-active": {boxShadow: "none"}, "&.Mui-focusVisible": {boxShadow: "none"} }}} style={{marginLeft:27, marginRight:27, width:"calc(100% - 54px)", color:"#FF5733", opacity:0.88, height:1, paddingTop:0, marginBottom:17}}/>
                    <div className="divider"></div>
                    <p className="sub-heading">Brand</p>
                    <input className="search-brand" type="text" placeholder="Search for Brands"/>
                    <BrandList/>
                    <div className="divider" style={{marginTop:"20px"}}></div>
                    <p className="sub-heading" style={{marginBottom:"8px"}}>Category</p>
                    <div className="year-btn"><input name="cat" type="radio" value={"assured"} onChange={handleCategory}/><p>DoW Assured</p></div>
                    <div className="year-btn"><input name="cat" type="radio" value={"budget"} onChange={handleCategory}/><p>DoW Budget</p></div>
                    <div className="year-btn"><input name="cat" type="radio" value={"exclusive"} onChange={handleCategory}/><p>DoW Exquisite</p></div>
                    <div className="divider" style={{marginTop:"20px"}}></div>
                    <p className="sub-heading" style={{marginBottom:"5px"}}>Year</p>
                </div>
                <div className="item-list">
                    <input className="search-brand" type="text" placeholder="Search for Cars" style={{marginLeft:12, marginRight:12, marginTop:15, width:"95%"}}/>
                    <p className="dummy-text"><span style={{color:"#FF5733", fontSize:13, fontWeight:600}}>410 Used Cars in Chennai</span><br/>Each of our pre-owned cars in chennai is certified through a comprehensive 200-point quality check, ensuring you select from the best second-hand cars in chennai. Explore a wide range of popular used cars on Deals on Wheels. For a hassle-free ownership experience, Deals on Wheels provides a 5-day money-back guarantee, free RC transfer, and quick loan approvals on all Deals on Wheels Assured second-hand nissan cars in chennai.</p>

                    { cars_list.map((car) => <ItemCard key={car.id} car_data={car} onClick={cardSelect}/>) }
                    { cars_list.map((car) => <ItemCard key={car.id} car_data={car} onClick={cardSelect}/>) }

                </div>
            </div>
        </>
    ) 
}

export default Shop