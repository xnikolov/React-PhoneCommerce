import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=> {
                    const {
                        id, 
                        company, 
                        img, info, 
                        price, 
                        title, 
                        isInCart
                    } = value.detailProduct;

                    return(
                        <div className="container py-5">
                            {/*title*/}
                            <div className="row">
                                <div className="col-10 mx-auto text-center 
                                text-slanted my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/*end of title*/}
                            {/*product info*/} 
                            <div className="row">
                                {/*image*/}
                                <div className="col-10 mx-auto col-md-6 my-3
                                 text-capitalize">
                                     <img src={img} className="img-fluid" alt="product"/>
                                </div>
                                {/*description*/}
                                <div className="col-10 mx-auto col-md-6 my-3
                                 text-capitalize">
                                     <h4>Manufacturer: {company}</h4><hr/>
                                     <h4>Price: <span>$</span>{price}</h4><hr/>
                                     <h4>Descirtion:</h4>
                                     <p>{info}</p>
                                     {/*buttons*/}
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>Back to products</ButtonContainer>
                                        </Link>
                                        <ButtonContainer
                                        cart
                                         disabled={isInCart?true:false}
                                        onClick={()=>{
                                            value.addToCart(id); 
                                        }}>
                                            {isInCart ? "In Cart" : "Add to Cart"}
                                        </ButtonContainer>
                                    </div>
                                 </div>
                            </div>
                            {/*end of product info*/}
                            
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
