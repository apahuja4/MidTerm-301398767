import React, { useState } from 'react';
import './index.css';

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        category: '',
        quantity: '',
        price: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(product, null, 2));
        console.log(product);
    };

    return (
        <div className="form-container">
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        placeholder="Enter product name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        placeholder="Enter product description"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                        placeholder="Enter product category"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={product.quantity}
                        onChange={handleChange}
                        placeholder="Enter product quantity"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        placeholder="Enter product price"
                    />
                </div>
                <div className="form-buttons">
                    <button type="submit" className="submit-button">Submit</button>
                    <button type="button" className="cancel-button">Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
