'use client'
import { LoadNewProduct } from "@/services/products"
import { useState } from "react"
import { Button } from "../button/Button"
import Swal from "sweetalert2"

export const CreateProductForm = () => {
  const [nameP, setNameP] = useState('')
  const [price, setPrice] = useState('')
  const [stock, SetStock] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [url, setUrl] = useState('')

  const handleChange = (e) => {
    const valor = e.target.value
    const name = e.target.name
    if (name === 'name') {
      setNameP(valor)
    }
    if (name === 'price') {
      setPrice(valor)
    }
    if (name === 'stock') {
      SetStock(valor)
    }
    if (name === 'description') {
      setDescription(valor)
    }
    if (name === 'category') {
      setCategory(valor)
    }
    if (name === 'image') {
      setUrl(valor)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const product = {
      'title' : nameP,
      'price' : price,
      'stock' : stock,
      'description': description,
      'category' : category,
      'image' : url,
    }
    if(product.price > 10000 || product.price < 1000) {
      Swal.fire({
        toast: true,
        icon: 'error',
        title: 'Oops...',
        text: 'El precio debe estar entre 1000 y 10000'
      })
      return
    }
    if(product.stock < 1 || product.stock > 100) {
      Swal.fire({
        toast: true,
        icon: 'error',
        title: 'Oops...',
        text: 'El stock debe ser mayor a 0 y menor o igual a 100'
      })
      return
    }
    if (!product.title || !product.price || !product.stock || !product.description || !product.category || !product.image) {
      return
    }
    LoadNewProduct(product)
    setNameP('')
    setPrice('')
    SetStock('')
    setDescription('')
    setCategory('')
    setUrl('')
  }
  const loadImage = async () => {
    const { value: file } = await Swal.fire({
    title: "Select image",
    input: "file",
    inputAttributes: {
      "accept": "image/*",
      "aria-label": "Upload your profile picture"
    }
  });
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      setUrl(e.target.result)
      Swal.fire({
        title: "Your uploaded picture",
        imageUrl: e.target.result,
        imageAlt: "The uploaded picture"
      });
    };
    reader.readAsDataURL(file);
  }}
  return (
    <div className="bg-primary flex justify-center items-center p-2 rounded-md">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-2">
            <label name="name" id="name" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Nombre del Producto</label>
            <input required value={nameP} onChange={handleChange} className="rounded-sm bg-tertiary text-secondary placeholder:text-secondary" type="text" name="name" id="name" placeholder="Nombre del producto"/>
          </div>

          <div className="mb-2">
            <label name="price" id="price" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Precio</label>
            <input required max={10000} min={1000} value={price} onChange={handleChange} className="w-full rounded-sm bg-tertiary text-secondary text-[16px] placeholder:text-secondary" type="number" name="price" id="price" placeholder="Precio del producto" />
          </div>

          <div className="mb-2">
            <label name="stock" id="stock" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Stock</label>
            <input required max={100} min={1} value={stock} onChange={handleChange} className="w-full rounded-sm bg-tertiary text-secondary placeholder:text-secondary" type="number" name="stock" id="stock" placeholder="Stock del producto" />
          </div>

          <div className="mb-2">
            <label name="description" id="description" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Descripcion</label>
            <input required value={description} onChange={handleChange} className="rounded-sm bg-tertiary text-secondary placeholder:text-secondary" type="text" name="description" id="description" placeholder="Descripcion del producto" />
          </div>

          <div className="mb-2">
            <label name="category" id="category" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
            <input required value={category} onChange={handleChange} className="rounded-sm bg-tertiary text-secondary placeholder:text-secondary" type="text" name="category" id="category" placeholder="Categoria del producto" />
          </div>

          <div className="mb-2">
            <label name="image" id="image" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Imagen</label>
            <button type="button" onClick={loadImage} className="bg-tertiary w-full p-2 rounded-lg text-white hover:text-primary">Cargar Imagen</button>
          </div>
          <Button>Crear Producto</Button>
        </form>
    </div>
  )
}