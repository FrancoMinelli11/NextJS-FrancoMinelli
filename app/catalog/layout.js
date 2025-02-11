import { AsideCat } from "@/components/asideCat/AsideCat";

export default function layout({children}) {
    return (
        <div className="flex flex-row gap-8">
            <aside>
                <AsideCat/>
            </aside>
            {children}
        </div>
    );
}