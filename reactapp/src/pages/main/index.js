import React, { Component } from 'react';
import api from '../../services/api'
import './styles.css'
import { Link } from 'react-router-dom';

export default class Main extends Component {

    state = {
        products: [],
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('http://localhost:8081/api/product')

        this.setState({ products: response.data.docs })
    }
    deleteProducts = async () => {

        const { id } = this.props.match.params;

        const response = await api.delete(`http://localhost:8081/api/deletebyid/${id}`)

        this.setState({product: response.data})
    }

    render() {

        const { products } = this.state;

        return (
      
                    <ul className="list-group">{products.map(product => (
                        <li className="list-group-item">
                            <span className="nes-text" key={product._id}>
                            {product.title}
                            </span>
                            <h6>
                            {product.description}
                            </h6>
                            <Link className="btn btn-primary" to={`/product/${product._id}`}>Acessar</Link>
                        </li>
                    ))}</ul>
        )
    }
}

