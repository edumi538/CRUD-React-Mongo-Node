import React, { Component, Fragment } from 'react';
import api from '../../services/api';
import './styles.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

export default class Produto extends Component{

    state = {
        product: {},
    }
   async componentDidMount(){

        const { id } = this.props.match.params;

        const response = await api.get(`http://localhost:8081/api/product/${id}`);

        this.setState({product: response.data})
    }
   async delete(id){
       console.log(id);
    
       await api.delete(`http://localhost:8081/api/deletebyid/${id}`).then((result) => {
           this.props.history.push("/list")
       })
   } 

    render(){

        const { product } = this.state;

        return (
            <MDBCard className="listcard" style={{ width: "18rem" }}>
              <MDBCardImage className="img-fluid" src={product.url} waves />
              <MDBCardBody>
                <MDBCardTitle>{product.title}</MDBCardTitle>
                <MDBCardText>
                {product.description}
                </MDBCardText>
                <MDBCardText>
                    {product.valor}
                </MDBCardText>
                <Fragment>
                <MDBBtn className="deletebtn" onClick={this.delete.bind(this, product._id)} color="danger">Cancelar</MDBBtn>
                </Fragment>
              </MDBCardBody>
            </MDBCard>
        )
    }
}