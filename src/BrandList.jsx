function BrandList() {

    let brands = ["Hyundai", "Suzuki", "Mahindra", "Tata", "Toyota", "Hyundai", "Suzuki", "Mahindra", "Tata", "Toyota", "Hyundai", "Suzuki", "Mahindra", "Tata", "Toyota"];

    // orasadha.. good song
    // miami 82 ,

    let brand_elem = [];

    for (let brand of brands) {
        brand_elem.push(<div className="brand" key={brand}><input type="checkbox" /><p>{brand}</p></div>);
    }

    return(
        <div className="brand-list">

            {brand_elem}

        </div>
    )

}

export default BrandList