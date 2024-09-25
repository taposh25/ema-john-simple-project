import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
    const first20 = fakeData.slice(0,20);
    const [products, setProducts] = useState(first20);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) =>{
       

        const newCart = [...cart, product];
        setCart(newCart);
    }
    
    return (
        <div className='shop-container'>
           <div className='product-container'>
           
                {   
                products.map(product => <Product 
                    
                    handleAddProduct = {handleAddProduct}
                    product={product}>{product.name}</Product>)
                }
            
            </div>
            <div className="cart-container">
                
             <h3>This is cart</h3> 
             <Cart cart = {cart}></Cart>
            
            </div> 
           
        </div>
    );
};

export default Shop;