import BrandList from "./BrandList";
import Header from "./Header";
import ItemCard from "./ItemCard";
import "./shop.css";
import { Slider } from "@mui/material";
import { useEffect, useState } from "react";

function Shop() {

    const [price, setPrice] = useState([200000,2500000]);
    const [brands, setBrands] = useState([]);
    const [category, setCategory] = useState("assured");
    const [year, setYear] = useState([2008, 2025]);
    const [transmission, setTransmission] = useState("");
    const [mileage, setMileage] = useState([1000,150000]);

    const [cars_list, setCars_list] = useState([]);

    const [liked_cars_list, setLiked] = useState([]);

    useEffect(() => {
    const stored = sessionStorage.getItem("filters");
    if (stored) {
        const parsed = JSON.parse(stored);
        setPrice(parsed.price || [200000, 2500000]);
        setBrands(parsed.brands || []);
        setCategory(parsed.category || "assured");
        setYear(parsed.year || [2008, 2025]);
        setTransmission(parsed.transmission || "");
        setMileage(parsed.mileage || [1000, 150000]);
    }

    const liked_cars = localStorage.getItem("liked") || "";
    const parsed_liked = liked_cars ? liked_cars.split(",") : [];
    setLiked(parsed_liked);

    console.log(liked_cars);

}, []);

    useEffect(() => {
        const get_cars = async () => {
            let url = "https://deals-on-wheels-backend.onrender.com/api/cars?";
            url = url + "minPrice=" + price[0]/100000 + "&maxPrice=" + price[1]/100000;
            url = url + "&startYear=" + year[0] + "&endYear=" + year[1];
            url = url + "&startMileage=" + mileage[0] + "&endMileage=" + mileage[1];
            if (transmission != "" && transmission != "both") {
                url = url + "&transmission=" + transmission;
            }
            brands.forEach(brand => {url = url + "&brand=" + brand;});
            const result = await fetch(url);
            const data = await result.json();
            setCars_list(data.data);
            console.log(url);
        }

        get_cars();
        storeFilters();

    }, [price, brands, category, year, transmission, mileage]);



    const handleCategory = (e) => {
        setCategory(e.target.value);
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

    const [searchBrand, setSearchBrand] = useState("");

    const receive_brand = (e) => {
        let x = e.target.value;
        if (x == "Maruti Suzuki") {
                x = "Maruti";
            }
        if (e.target.checked) {
            if (!brands.includes(x)) {
                setBrands([...brands, x]);
            }
        } else {
            setBrands(brands.filter(b => b !== x));
        }
    }

    const toggleTransmission = (value) => {
        if (transmission === value) {
            setTransmission("");
        } else if (transmission === "both") {
            setTransmission(value === "Automatic" ? "Manual" : "Automatic");
        } else if (transmission === "" ) {
            setTransmission(value);
        } else {
            setTransmission("both");
        }
    };

    const storeFilters = () => {
    const filters = {
        price,
        brands,
        category,
        year,
        transmission,
        mileage
    };
    sessionStorage.setItem("filters", JSON.stringify(filters));
};

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
                    <input className="search-brand" type="text" placeholder="Search for Brands" value={searchBrand} onChange={(e) => setSearchBrand(e.target.value)}/>
                    <BrandList search={searchBrand} onChange={receive_brand} selected_brands={brands}/>
                    <div className="divider" style={{marginTop:"20px"}}></div>

                    <p className="sub-heading" style={{marginBottom:"8px"}}>Category</p>
                    <div className="year-btn"><input name="cat" type="radio" value={"assured"} checked={category == "assured"} onChange={handleCategory}/><p>DoW Assured</p></div>
                    <div className="year-btn"><input name="cat" type="radio" value={"budget"} checked={category == "budget"} onChange={handleCategory}/><p>DoW Budget</p></div>
                    <div className="year-btn"><input name="cat" type="radio" value={"luxury"} checked={category == "luxury"} onChange={handleCategory}/><p>DoW Luxury</p></div>
                    <div className="divider" style={{marginTop:"20px"}}></div>

                    <p className="sub-heading">Year</p>
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", marginLeft:25, marginRight:21, marginBottom:-3}}>
                    <p className="info" style={{marginTop:-5, marginBottom:11, backgroundColor:"transparent", padding:0, fontWeight:500, color:"#FF5733", fontSize:16, fontFamily:"Poppins"}}>{year[0]}</p>
                    <p className="info" style={{marginTop:-5, marginBottom:11, backgroundColor:"transparent", padding:0, fontWeight:500, color:"#FF5733", fontSize:16, fontFamily:"Poppins"}}>{year[1]}</p>
                    </div>
                    <Slider value={year} onChange={(e, val) => setYear(val)} min={2008} max={2025} sx={{'.MuiSlider-thumb': { width: 15, height: 15, color:"white", border:"solid", borderWidth:1, borderColor:"#FF5733", "&:hover, &.Mui-active": {boxShadow: "none"}, "&.Mui-focusVisible": {boxShadow: "none"} }}} style={{marginLeft:27, marginRight:27, width:"calc(100% - 54px)", color:"#FF5733", opacity:0.88, height:1, paddingTop:0, marginBottom:17}}/>
                    <div className="divider"></div>
                    
                    <p className="sub-heading" style={{marginBottom:"8px"}}>Transmission</p>
                    <div className="brand2"><input type="checkbox" value="Automatic" checked={transmission == "Automatic" || transmission == "both"} onChange={() => toggleTransmission("Automatic")}/><p>Automatic</p></div>
                    <div className="brand2"><input type="checkbox" value="Manual" checked={transmission == "Manual" || transmission == "both"} onChange={() => toggleTransmission("Manual")}/><p>Manual</p></div>
                    <div className="divider" style={{marginTop:"20px"}}></div>

                    <p className="sub-heading">Mileage</p>
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", marginLeft:25, marginRight:21, marginBottom:-3}}>
                    <p className="info" style={{marginTop:-5, backgroundColor:"transparent", padding:0, fontWeight:600, color:"#FF5733", fontSize:14, fontFamily:"Poppins"}}>{addComma(mileage[0])} km</p>
                    <p className="info" style={{marginTop:-5, backgroundColor:"transparent", padding:0, fontWeight:600, color:"#FF5733", fontSize:14, fontFamily:"Poppins"}}>{addComma(mileage[1])} km</p>
                    </div>
                    <Slider value={mileage} onChange={(e, val) => setMileage(val)} min={0} max={150000} step={5000} sx={{'.MuiSlider-thumb': { width: 15, height: 15, color:"white", border:"solid", borderWidth:1, borderColor:"#FF5733", "&:hover, &.Mui-active": {boxShadow: "none"}, "&.Mui-focusVisible": {boxShadow: "none"} }}} style={{marginLeft:27, marginRight:27, width:"calc(100% - 54px)", color:"#FF5733", opacity:0.88, height:1, paddingTop:0, marginBottom:17}}/>
                    <div className="divider"></div>
                    <p style={{textAlign:"center", fontFamily:"Poppins", color:"gray", fontSize:15, paddingRight:4}}>That's all for today folks!</p>

                </div>
                <div className="item-list">
                    <input className="search-brand" type="text" placeholder="Search for Cars" style={{marginLeft:12, marginRight:12, marginTop:15, width:"95%"}}/>
                    <p className="dummy-text"><span style={{color:"#FF5733", fontSize:13, fontWeight:600}}>{cars_list.length} Used Cars in Chennai</span><br/>Each of our pre-owned cars in chennai is certified through a comprehensive 200-point quality check, ensuring you select from the best second-hand cars in chennai. Explore a wide range of popular used cars on Deals on Wheels. For a hassle-free ownership experience, Deals on Wheels provides a 5-day money-back guarantee, free RC transfer, and quick loan approvals on all Deals on Wheels Assured second-hand nissan cars in chennai.</p>

                    { cars_list.map((car) => <ItemCard key={car._id} car_data={car} liked={liked_cars_list.includes(car._id)}/>) }

                </div>
            </div>
        </>
    ) 
}

export default Shop