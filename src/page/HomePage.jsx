import Card from "../components/Card"
import { useFetch } from "../components/hook/useFetch"
import Navbar from "../components/Navbar"

const HomePage = () => {

    const { data, loading, error } = useFetch("http://localhost:2005/")

    return (
        <div className="home">
            <Navbar />
            <h1>This is our store</h1>
            {loading && <div id="loader">Loading...</div>}
            {(error || data.length < 1) && <h1 className="error">There is no products</h1>}
            <div className="card">
                {data && data.map((item, index) => {
                    return (
                        <Card productId={item._id} key={index} src={item.image} name={item.name} price={item.price} time={item.updatedAt} />
                    )
                })}
            </div>
        </div>
    )
}

export default HomePage
