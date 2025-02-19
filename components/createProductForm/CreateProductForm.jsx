export const CreateProductForm = () => {
  return (
    <div>
        <form>
            <label name="name" id="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre del Producto</label>
            <input type="text" name="name" id="name" placeholder="Ingrese el nombre del producto" />
            <label name="price" id="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio</label>
            <input type="number" name="price" id="price" placeholder="Ingrese el precio del producto" />
            <label name="description" id="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion</label>
            <input type="text" name="description" id="description" placeholder="Ingrese la descripcion del producto" />
            <label name="category" id="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
            <input type="text" name="category" id="category" placeholder="Ingrese la categoria del producto" />
            <label name="image" id="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Imagen</label>
            <input type="text" name="image" id="image" placeholder="Ingrese la url de la imagen del producto" />
        </form>
    </div>
  )
}