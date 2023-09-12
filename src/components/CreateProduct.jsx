import React, { useState } from 'react'

const CreateProduct = () => {

    const [newProduct, setNewProduct] = useState({
        title: '',
        brand: '',
        price: 0,
    })

    const addNewProduct = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://dummyjson.com/products/add', {
                method: 'POST',
                body: JSON.stringify({
                  title: newProduct.title,
                  brand: newProduct.brand,
                  price: newProduct.price,
                }),
                headers: { 'Content-Type': 'application/json' },
              })
              const data = await response.json();
              console.log(`New product is added: ${data}`)
        } catch (error) {
            console.log(error)
        }
    }

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setNewProduct((prevState) => ({...prevState, [name]: value}))
    }

    return (
        <form onSubmit={addNewProduct} className='create-container'>
            <input className='input-container' type="text" name='title' value={newProduct.title} onChange={onChangeInput}/>
            <input className='input-container' type="text" name='brand' value={newProduct.brand} onChange={onChangeInput}/>
            <input className='input-container' type="number" name='price' value={newProduct.price} onChange={onChangeInput}/>
            <button>Add</button>
        </form>
    )
}

export default CreateProduct;