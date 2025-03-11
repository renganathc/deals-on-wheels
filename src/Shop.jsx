import { useNavigate } from "react-router-dom";
import BrandList from "./BrandList";
import Header from "./Header";
import ItemCard from "./ItemCard";
import "./shop.css";
import { Slider } from "@mui/material";
import { useState } from "react";

function Shop() {

    const navigate = useNavigate();
    const [price, setPrice] = useState([200000,2500000]);

    let cars_list = [
        {
            id: "1",
            brand: "Nissan",
            model: "MAGNITE",
            year: 2020,
            variant: "XV PREMIUM",
            image: "https://media.cars24.com/hello-ar/dev/uploads/no_bg/2bf469c4-8c57-11ef-bd35-02ede2007fbe/6710b74afaf4853c7653e98c/78159880-6684-45ed-a1b1-5073364eb535/slot/11341020792-51ff95c632de4eb297765e055483236c-Exterior-7.png?w=240&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
        },
        {
            id: "2",
            brand: "Hyundai",
            model: "CRETA",
            year: 2019,
            variant: "SX+",
            image: "https://media.cars24.com/hello-ar/dev/uploads/no_bg/b8c30422-99a0-11ef-bd35-02ede2007fbe/672700aa6f379c374fbe9fb6/af093f66-e6b9-4f49-8bca-8740b2e66056/slot/11391227775-b0e3937199944502b320bf64331e6732-Exterior-7.png?w=240&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
        },
        {
            id: "3",
            brand: "Hyundai",
            model: "GRAND i10",
            year: 2017,
            variant: "ES",
            image: "https://media.cars24.com/hello-ar/dev/uploads/no_bg/61c76f82-f58f-11ef-bd36-02ede2007fbe/67c13e71917b4a9f49bf867b/65ad3439-af98-4268-a649-75f531fb3321/slot/11317126706-f42d795ef86b49cfa48dbf0c30ff4df4-Exterior-7.png?w=240&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
        },
        {
            id: "4",
            brand: "Renault",
            model: "KWID",
            year: 2023,
            variant: "E",
            image: "https://media.cars24.com/hello-ar/dev/uploads/no_bg/db202eb0-f2a5-11ef-bd36-02ede2007fbe/67bc5a3fb8e8e6357b013146/3282e42e-5a1a-41f4-bb14-0fc5af9dd080/slot/2-Right-Front-Diagonal.png?w=240&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
        },
        {
            id: "5",
            brand: "Tata",
            model: "Tiago",
            year: 2023,
            variant: "XZ",
            image: "https://media.cars24.com/hello-ar/dev/uploads/no_bg/e95dc8cc-53ed-11ef-bd34-02ede2007fbe/66b213a94bc145ea4939750e/50ed43b2-241c-41ff-9782-9b206c90dff4/slot/10075734738-4d4a5b591eb14259aadb3b020ae5744e-Exterior-7.png?w=240&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
        },
        {
            id: "6",
            brand: "Kia",
            model: "SELTOS",
            year: 2022,
            variant: "GTX +",
            image: "https://media.cars24.com/hello-ar/dev/uploads/no_bg/277d612a-f106-11ef-bd36-02ede2007fbe/67b9a196e27b842839718e2e/8bbb1916-e6a4-4df6-9690-ca8fae4a10de/slot/Right-Front-Diagonal-2.png?w=240&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
        },
        {
            id: "7",
            brand: "Maruti",
            model: "IGNIS",
            year: 2022,
            variant: "Zeta +",
            image: "https://media.cars24.com/hello-ar/dev/uploads/no_bg/ba9dbc60-f9b3-11ef-bd36-02ede2007fbe/67c831915497e9bb81dafeea/cabab68e-17f6-494f-9b14-38e0f30a8c87/slot/2-Right-Front-Diagonal.png?w=240&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
        },
    ]

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
                    { cars_list.map((car) => <ItemCard key={car.id} car_data={car} onClick={cardSelect}/>) }
                    { cars_list.map((car) => <ItemCard key={car.id} car_data={car} onClick={cardSelect}/>) }

                </div>
            </div>
        </>
    ) 
}

export default Shop