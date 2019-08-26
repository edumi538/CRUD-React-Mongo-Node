import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom'

export default class Create extends Component {
    constructor(props) {
      super(props);
      this.onChangeTitleName = this.onChangeTitleName.bind(this);
      this.onChangeDescription = this.onChangeDescription.bind(this);
      this.onChangeUrlData = this.onChangeUrlData.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        product_name: '',
        description: '',
        url_data:''
      }
    }
    onChangeTitleName(e) {
      this.setState({
        product_name: e.target.value
      });
    }
    onChangeDescription(e) {
      this.setState({
        description: e.target.value
      })  
    }
    onChangeUrlData(e) {
      this.setState({
        url_data: e.target.value
      })
    }
    onSubmit(e) {
      e.preventDefault();
      
      console.log('Formulario Confirmado:');
      console.log(`CRUD Product_name: ${this.state.product_name}`);
      console.log(`CRUD Description: ${this.state.description}`);
      console.log(`CRUD Url_Data: ${this.state.url_data}`);

      const newCRUD = {
        product_name: this.state.product_name,
        description: this.state.description,
        url_data: this.state.url_data
      }

      axios.post('http://localhost:8080/produtos/add', newCRUD).then(res => console.log(res.data));

      this.setState({
        product_name: '',
        description: '',
        url_data: ''
      })
    }
   
    render() {
      return (
          <div style={{ marginTop: 10 }} className="formulario">
              <h1>Cadastro de Produto</h1>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label><p>Nome do meu Produto:</p></label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.product_name}
                        onChange={this.onChangeTitleName}
                        />
                  </div>
                  <div className="form-group">
                      <label><p>Descrição do produto:</p></label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                        />
                  </div>
                  <div className="form-group">
                      <label><p>Url do produto:</p></label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.url_data}
                        onChange={this.onChangeUrlData}
                        />
                  </div>
                  <div className="form-group">
                      <input type="submit" value="Cadastra Produto" className="btn btn-primary"/>
                        <NavLink className="btn btn-primary" to="/">Pagina de listagem</NavLink>
                  </div>
              </form>
          </div>
      )
    }
  }
