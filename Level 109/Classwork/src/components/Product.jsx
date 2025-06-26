import React from "react";

const Products = ({ productInfo }) =>{
    
    return(
        <div>
            <img
                src={productInfo[0]}
                alt="picture"
                style={{ width: "200px", height: "auto" }}
            />
            <h1>Title: {productInfo[1]}</h1>
            <h2>Description: {productInfo[2]}</h2>
            <h3>Price: {productInfo[3]}</h3>
        </div>
    )
}

export default Products