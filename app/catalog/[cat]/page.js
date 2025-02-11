import { ProductsByCategory } from "@/components/productsByCategory/ProductsByCategory";

    export default async function Page({params}) {
        const {cat} = await params
        return (
            <ProductsByCategory category={cat}/>
        );
    }