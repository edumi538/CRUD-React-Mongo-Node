import React,{Component} from 'react';
import './styles.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';


  class Header extends Component{
    constructor(props){
      super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }
    onClick(){
      this.setState({
        collapse: !this.state.collapse, 
      });
    }
    render(){
    return (
      <div>
      <header>
        <MDBView>
          <Router>
            <MDBNavbar color="indigo" dark expand="md">
              <MDBContainer>
              <a class="navbar-brand" href="/">
                  <strong className="color-title">Project MCA</strong>
                </a>
                <MDBNavbarToggler onClick={this.onClick} />
                <MDBCollapse isOpen={this.state.collapse} navbar>
                  <MDBNavbarNav left>
                    <li className="nav-item">
                      <a className="nav-link" href="/list">Comprar Produto </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/create">Criar Produto</a>
                    </li>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
          </Router>
        </MDBView>
      </header>
    </div>
  );
}
  }

export default Header;