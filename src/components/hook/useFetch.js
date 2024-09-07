import { useEffect, useState } from "react";

export function useFetch(api) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    async function getData() {
        setLoading(true)
        try {
            const req = await fetch(api)
            const res = await req.json()
            setData(res)
            setLoading(false)
        } catch (error) {
            setError(true)
            setLoading(false)
            throw new Error(error)
        }
    }

    useEffect(() => {
        getData()
    }, [api])

    return { loading, data, error }
}