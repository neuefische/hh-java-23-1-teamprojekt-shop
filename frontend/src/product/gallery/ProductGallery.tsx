import ProductCard from "../card/ProductCard";
import {useContext} from "react";
import {ProductProvider} from "../../ProductContext";
import "./ProductGallery.css"


export default function ProductGallery() {

    const context = useContext(ProductProvider)

    return (
        <div className={"ProductGallery"}>
            {context.allProducts.map(p => {
                return <ProductCard product={p}/>
            })}
        </div>
    )
}