import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

export default class Produto extends Component{

    state = {
        product: {},
    }
   async componentDidMount(){

        const { id } = this.props.match.params;

        const response = await api.get(`http://localhost:8081/api/product/${id}`);

        this.setState({product: response.data})
    }

    render(){

        const { product } = this.state;

        return (
            <div className="container">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>
                    URL: <a href={product.url}>{product.url}</a>
                </p>
            </div>
        )
    }
}