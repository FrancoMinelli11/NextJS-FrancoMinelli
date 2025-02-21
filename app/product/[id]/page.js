import { ProductDetail } from "@/components/detail/ProductDetail"
export default function page ({params}) {
    const {id} = params
    return (
                <ProductDetail id={id}/>
                
            
    )
}