import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';


const ProductContext = React.createContext();

class ProductProvider extends Component{
    state ={
        products:[],
        detailProduct:detailProduct
    };

    componentDidMount(){
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item=>{
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        })

        this.setState(() =>{
            return {products:tempProducts}
        })
    }

    getItem = id =>{
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = () => {
        const product = this.getItem();
        this.setState( () => {
            return {detailProduct:product}
        })
    };

    addToCart = id => {
        console.log(`id is ${id}`);
    };

    render(){
        return(
            <ProductContext.Provider value={{
                ...this.state, 
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer};
