import React, { useEffect, useState } from 'react'
import ProductBox from './ProductBox';
import { useApi } from '../hooks/UseApi';

const Products = () => {

    // const [products, setProducts] = useState([]);

    const { data: products, error, fetchData } = useApi([]);
    
    useEffect(() => {
        fetchData('https://dummyjson.com/products');
    }, [])

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch('https://dummyjson.com/products')
    //         if(!response.ok) {
    //             throw new Error('Response ISSUE !')
    //         }
    //         const data = await response.json();
    //         setProducts(data.products);
    //     } 
    //     catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <div className='product-container'>
                {products.map((product) => {
                    return (<ProductBox
                    key={product.id}
                    id={product.id}
                    brand={product.brand}
                    description={product.description}
                    title={product.title}
                    price={product.price}
                    category={product.category}
                    discountPercentage={product.discountPercentage}
                    rating={product.rating}
                    stock={product.stock}
                    images={product.images}
                    thumbnail={product.thumbnail}
                    />)
                })}
        </div>
    )
}

export default Products