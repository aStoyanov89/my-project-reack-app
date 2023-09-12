import React from 'react'
import { useState } from "react";


export const useApi = (initialState) => {

    const [data, setData] = useState(initialState || {});
    const [error, setError] = useState(null)

    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            if(!response.ok) {
                throw new error('Network issues')
            }
            const data = await response.json()
            setData(data.products)
        } catch (error) {
            setError(error)
        }
    }

    return {
        data,
        error,
        fetchData,
    }
};