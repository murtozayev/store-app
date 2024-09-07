import { useState } from "react"
import Navbar from "./Navbar"

const Form = () => {
    const [name, setName] = useState('')

    const [price, setPrice] = useState('')

    const [image, setImage] = useState('')

    async function onSendPostRequest(e) {
        e.preventDefault()
        try {
            const req = await fetch("http://localhost:2005/api/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: name, price: price, image: image })
            })

            await req.json()
            alert("Products Added successfully")
            setImage("")
            setName("")
            setPrice("")
        } catch (error) {
            throw new Error(error)
        }
    }

    return (
        <div>
            <Navbar />
            <form onSubmit={onSendPostRequest}>

                <h1>Add new product</h1>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="Enter title" />
                <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" name="price" placeholder="price" />
                <input value={image} onChange={(e) => setImage(e.target.value)} type="text" name="image" placeholder="Enter image" />
                <button>Add new Product</button>
            </form>
        </div>
    )
}

export default Form
