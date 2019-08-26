import React, { Component } from 'react';
import axios from 'axios';
import './styles.css'
import { Link } from 'react-router-dom';

const Produtos = props =>(
    <tr>
        <td>{props.todo._id}</td>
        <td>{props.todo.product_name}</td>
        <td>{props.todo.description}</td>
        <td>{props.todo.url_data}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Editar</Link>
        </td>
    </tr>
)

export default class Main extends Component {

    constructor(props){
        super(props);
        this.state = {produtos:[]};
    }
    componentDidMount(){
        axios.get('http://localhost:8080/produtos').then(response => {
            this.setState({
                produtos:response.data
            });
        })
    }
    produtoList(){
        return this.state.produtos.map(function(atualProduto, i){
            return <Produtos todo={atualProduto} key={i}/>
        });
    }
    deleteTodo = (id) =>{
        axios.delete(`http://localhost:8080/produtos/delete/${id}`).then(res =>{
            if(res.data){
                this.produtoList()
            }
        }).catch(err => console.log(err))
    }
    render() {

        return (
                <div className="body">
                <h3>Lista de Produtos</h3>
                <table className="table">
                    <thead>
                        <tr>
                           <th scope="col">#</th> 
                           <th scope="col">Nome do Produto</th> 
                           <th scope="col">Descrição do Produto</th>
                           <th scope="col">Url do Produto</th>
                           <th scope="col">Ações</th>  
                        </tr>
                    </thead>
                    <tbody>
                        {this.produtoList()}
                    </tbody>
                    </table>        
            </div>
        )
    }
}

