import React from 'react'
import { Link } from 'react-router-dom'

const ProductBox = (props) => {
    return (
        <div className='product-box'>
            <Link to={`/products/${props.id}`}><h2>{props.title}</h2></Link>
            <h3>{props.brand}</h3>
            <h4>Price: {props.price} $</h4>
            <p>Thumbnail: {props.thumbnail}</p>
            <p>Stock: {props.stock}</p>
            <p>Discount: {props.discountPercentage} %</p>
            <span>Description: {props.description}</span>
            <Link to={`/${props.id}/edit`}><button>Edit</button></Link>
        </div>
    )
}

export default ProductBox