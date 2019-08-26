import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './create.css'

class Create extends Component{

    constructor(){
        super();
        this.state = {
            title: '',
            description:'',
            url: '',
            valor:''
        };
    }   
    onChange = (e) =>{
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
     onSubmit = (e) =>{
        e.preventDefault();

        const {title, description, url, valor} = this.state;

        api.post('http://localhost:8081/api/salvar', {title, description, url, valor})
        .then((result) => {
            this.props.history.push("/list")
        });
    }
    render(){
        const {title , description , url, valor} = this.state;
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label className="nome-label" for="title">Nome do Produto</label>
                                <input type="text" className="form-control" name="title" value={title} onChange={this.onChange} placeholder="Digite o nome do produto aqui"/>
                            </div>
                            <div className="form-group">
                                <label for="description">Descrição do produto</label>
                                <input type="text" className="form-control" name="description" value={description} onChange={this.onChange} placeholder="Digite a descrição do produto"/>
                            </div>
                            <div className="form-group">
                                <label for="url">Url do produto</label>
                                <input type="text" className="form-control" name="url" value={url} onChange={this.onChange} placeholder="Digite aqui a url do seu produto"/>
                            </div>
                            <div className="form-group">
                                <label for="valor">Valor do produto</label>
                                <input type="number" className="form-control" name="valor" value={valor} onChange={this.onChange} placeholder="Digite o valor do seu produto aqui"/>
                            </div>
                            <div className="btn-group" role="group" aria-label="Buttons group">
                            <button className="salvar" type="submit" className="btn btn-primary">Salvar</button>
                            <Link className="btn btn-info" to="/list">Lista de Produtos</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Create