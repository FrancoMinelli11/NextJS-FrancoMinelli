import { AsideCat } from "@/components/asideCat/AsideCat";
import { Suspense } from "react";
import { Loader } from "@/components/loader/Loader";

export default function layout({children}) {
    return (
        <div className="grid grid-cols-[1fr_7fr]">
            <AsideCat/>
            {children}
        </div>
    );
}