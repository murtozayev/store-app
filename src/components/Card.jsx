import { useState } from "react"

const Card = ({ name, time, src, productId, price }) => {

    const [like, setLike] = useState(JSON.parse(localStorage.getItem("like")) || false)

    async function deleteProduct(id) {
        try {
            const req = await fetch("http://localhost:2005/api/products/" + id, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            })
            await req.json()
        } catch (error) {
            throw new Error(error)
        }
    }

    function onLike() {
        setLike(!like)
        return localStorage.setItem("like", JSON.stringify(!like))
    }

    return (
        <div className={`cart ${like && "gold"}`}>
            <img src={src} alt="" />
            <div className="title">
                <h1>{name}</h1>
                <h6>{price}$</h6>
            </div>
            <div>
                <button onClick={() => {
                    window.location.reload()
                    deleteProduct(productId)
                }} className="fas fa-trash" />
                <button onClick={() => onLike()} className="fas fa-heart" />
            </div>
            <h5>{time}</h5>
        </div>
    )
}

export default Card
