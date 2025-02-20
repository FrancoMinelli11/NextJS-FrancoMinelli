import { CreateProductForm } from "@/components/createProductForm/CreateProductForm";

export default function Page() {
    return (
        <div className="grid place-items-center h-[84vh]">
            <h1 className="text-2xl mb-2">Admin</h1>
            <CreateProductForm/>
        </div>
    );
}