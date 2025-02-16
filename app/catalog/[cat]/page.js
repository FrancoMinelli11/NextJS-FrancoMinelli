import { Products } from "@/components/products/Products";
import { getProducts } from "@/services/products";
// import { ProductsByCategory } from "@/components/productsByCategory/ProductsByCategory";

    export default async function Page({params}) {
        const {cat} = await params
        return (
            <Products items={getProducts(null,cat)}/>
        );
    }