import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import './Orders.css';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div>
            <h1>This is orders page-{products.length}</h1>
            <p>Cart has: {cart.length}</p>
        </div>
    );
};

export default Orders;