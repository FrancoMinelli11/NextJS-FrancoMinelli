import { CreateProductForm } from "@/components/createProductForm/CreateProductForm";

export default function Page() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-[86vh]">
            <h1 className="text-2xl mb-2">Admin</h1>
            <CreateProductForm/>
        </div>
    );
}