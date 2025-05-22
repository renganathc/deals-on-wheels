function BrandList(props) {

    let brands = ["Hyundai", "Maruti Suzuki", "Tata", "Ford", "Toyota", "Skoda", "Volkswagen", "Renault", "Nissan", "Mahindra", "Honda", "Kia"];

    let brand_elem = [];

    for (let brand of brands) {
        if (brand.toLowerCase().includes(props.search.toLowerCase()) || props.search == "") {
            brand_elem.push(<div className="brand" key={brand}><input value={brand} type="checkbox" checked={props.selected_brands.some(selected => brand.includes(selected))} onChange={(e) => props.onChange(e)}/><p>{brand}</p></div>);
        }
    }

    return(
        <div className="brand-list">

            {brand_elem}

        </div>
    )

}

export default BrandList