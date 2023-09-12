import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { routes } from '../utils/constants';
import DeleteModal from './DeleteModal';
import useFinalPrice from '../hooks/CalcDiscount';
import { useApi } from '../hooks/UseApi';

const ProductPage = () => {

    const params = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const discount = useFinalPrice(product);
    // const { data: product, error, fetchData } = useApi([]);

    useEffect(() => {
        fetchData();
    }, [params.productId])

    const fetchData = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/products/${params.productId}`)
            if(!response.ok) {
                throw new Error('Response ISSUE !')
            }
            const data = await response.json();
            setProduct(data);
        } 
        catch (error) {
            console.log(error);
        }
    }

    const onDelete = () => {
        fetch(`https://dummyjson.com/products/${params.productId}`, {
        method: 'DELETE',
        });
        setIsActive(!isActive)
        navigate(routes.PRODUCTS.path)
    }

    const isVisibleModal = () => {
        setIsActive(!isActive)
    }

    return (
        <>
            <div>
                <h2>Title: {product.title}</h2>
                <p><b>Brand:</b> {product.brand}</p>
                {product.images && product.images.length > 0 && (
                <img src={product.images[0]} alt="tech" />
                )}
                <p><b>Description:</b> {product.description}</p>
                <p><b>Category:</b> {product.category}</p>
                <p><b>Rating:</b> {product.rating}</p>
                <p><b>Stock:</b> {product.stock}</p>
                <p><b>Price:</b> {product.price} $</p>
                <p><b>Discount:</b> {product.discountPercentage} %</p>                
                <p><b>FINAL PRICE:</b> {Number(discount)} $</p>
            </div>
            <div>
                <button onClick={isVisibleModal}>Delete</button>
            </div>
            {isActive && 
            <DeleteModal
            title={product.title}
            isVisible={isVisibleModal} 
            onDelete={onDelete}
            />}
        </>

    )
}

export default ProductPage