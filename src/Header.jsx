import {React} from 'react'
import './header.css'

function Header() {

    const handleLogoBtn = () => {
        window.scrollTo({top:0, left:0, behavior: "smooth"});
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