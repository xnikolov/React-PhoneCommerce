import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';

export default class Product extends Component {
    render() {
        const {id, title, img, price, isInCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5" onClick={() => console.log('img-container cliked')}>
                        <Link to="/details">
                            <img src={img} alt="product " className="card-img-top"/>
                        </Link>
                        <button className="cart-btn" disabled={isInCart ? true : false}
                        onClick={() => console.log('added to the cart')}>

                            {isInCart?(<p className="text-capitalize mb-0">In cart</p>):
                            (<i className="fas fa-cart-plus" disabled/>)}

                        </button>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="card-title mb-0">{title}</p>
                        <h4 className="card-text mb-0">${price}</h4>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        isInCart:PropTypes.bool
    }).isRequired
}

const ProductWrapper = styled.div`{
    .card{
        border-color: tranparent;
        transition: all 1s linear;
    }
    
    .card-footer{
        background: transparent;
        transition: all .3s linear;
    }
    &:hover{
        .card{
            border: 0.04rem solid rgba(0, 0, 0, 0.2);
            box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
        }

        .card-footer{
            border-top: trasparent;
            background: var(--mainBlue);
            color: var(--mainWhite)
        }
    }

    .img-container{
        position: relative;
        overflow: hidden;
    }

    .img-container:hover .card-img-top{
        transform: scale(1.2);
        transition: all .3s linear;
    }

    .cart-btn{
        position: absolute; 
        bottom: .5rem;
        right: 0;
        padding .5rem .8rem;
        border: none;
        border-radius: .5rem 0 0 0;
        background: var(--lightBlue);
        color: var(--mainWhite);
        transform: translate(100%, 100%);
    }

    

    .img-container:hover .cart-btn{
        transform: translate(0, 0%);
        transition: all .3s linear;
    }

    .cart-btn:hover{
        color: var(--mainBlue);
    }
}`
