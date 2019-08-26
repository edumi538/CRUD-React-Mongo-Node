import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css'
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol,MDBCardImage,MDBCard,MDBCardBody,MDBCardTitle } from "mdbreact";

export default class List extends Component {

    state = {
        products: [],
    }

componentDidMount() {
    this.loadProducts();
}

loadProducts = async () => {
    const response = await api.get('http://localhost:8081/api/product')
    console.log(response);
    this.setState({ products: response.data.docs })
}
render() {

    const { products } = this.state;

    return (
        <MDBContainer>
        <MDBRow>{products.map(product => (
            <MDBCol md="4">
               <MDBCard style={{ width: "18rem" }}>
               <MDBCardImage className="img-fluid" src={product.url} waves />
               <MDBCardBody>
                   <MDBCardTitle>{product.title}</MDBCardTitle>
                   <Link className="btn btn-primary" to={`/product/${product._id}`}>Detalhes</Link>
               </MDBCardBody>
               </MDBCard>
            </MDBCol>
        ))}</MDBRow>
        </MDBContainer>
        )
    }
}