import React from 'react';
import '../App.css';
import Cards from './Cards';

const Product = () => {
    return (
        <div className='App-header' style={{ paddingTop: '90px' }}>
            <h1 className='Appp'>Productos</h1>
            <Cards></Cards>
            <h1 className='Appp'>Productos</h1>
            <Cards></Cards>
            <h1 className='Appp'>Productos</h1>
            <Cards></Cards>
            <h1 className='Appp'>Productos</h1>
            <Cards></Cards>
        </div>
    );
}

export default Product;
