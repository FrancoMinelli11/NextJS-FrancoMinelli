import { ProductDetail } from "@/components/detail/ProductDetail"
export default async function page ({params}) {
    const {id} = await params
    return (
                <ProductDetail id={id}/>
                
            
    )
}