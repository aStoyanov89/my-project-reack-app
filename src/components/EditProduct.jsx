import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { routes } from '../utils/constants';
import DeleteModal from './DeleteModal';
import useFinalPrice from '../hooks/CalcDiscount';

const EditProduct = () => {

    const params = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [isEdit, setIsEdit] = useState(params.productId ? true : false)
    const discount = useFinalPrice(product)

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

    const editProduct = () => {
        try {
            const response = fetch(`https://dummyjson.com/products/${params.productId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: product.title,
                    brand: product.brand,
                    price: product.price,
                })
              })
              const data = response.json();
              editProduct(data);
        } catch (error) {
            console.log(error)
        }
        finally {
            setIsEdit(!isEdit)
        }
    }

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setProduct((prevState) => ({...prevState, [name]: value}))
    }

    return (
        <>
            <div className='edit-container'>
                {isEdit ? 
                    <div>
                        <input className='edit-container-edit' type="text" value={product.title} onChange={onChangeInput}/>
                        <input className='edit-container-edit' type="text" value={product.brand} onChange={onChangeInput}/>
                        <input className='edit-container-edit' type="number" value={product.price} onChange={onChangeInput}/>
                    </div>
                 :
                    <div>
                        <h2>Title: {product.title}</h2>
                        <p><b>Brand:</b> {product.brand}</p>
                        {product.images && product.images.length > 0 && (
                        <img src={product.images[0]} alt="tech" />
                        )}
                        <p><b>Description:</b> {product.description}</p>
                        <p><b>Price:</b> {product.price} $</p>
                        <p><b>Category:</b> {product.category}</p>
                        <p><b>Discount:</b> {product.discountPercentage} %</p>
                        <p><b>Rating:</b> {product.rating}</p>
                        <p><b>Stock:</b> {product.stock}</p>
                        <p><b>FINAL PRICE:</b> {Number(discount)} $</p>
                    </div>
                }
                {isEdit ? 
                    <div>
                        <button onClick={editProduct}>Complete Edit</button>
                        <button onClick={isVisibleModal}>DELETE</button>
                    </div> : 
                        <button onClick={isVisibleModal}>DELETE</button>
                }
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

export default EditProduct