import {React} from 'react'
import './header.css'
import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

    const handleLogoBtn = () => {
        window.scrollTo({top:0, left:0, behavior: "smooth"});
        navigate("/shop");
    }

    return(
        <div className="head">

            <div className="name-container">

            <p className="head-name" onClick={handleLogoBtn}>DealsOn<span style={{color: "#FF5733"}}>Wheels</span>.</p>

            </div>

            <div className="button-holder">

                <button className="head-btn" onClick={handleLogoBtn}>Home</button>
                <button className="head-btn">Sell Car</button>
                <button className="head-btn">Car Finance</button>
                <button className="head-btn">DoW Care</button>

            </div>

        </div>
    )
}

export default Header