import React from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Main extends React.Component {
    constructor() {
        super();

        this.state = {
            products: [],
            productInfo: {},
            page: 1,
        };

        this.loadProducts = this.loadProducts.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }
    componentDidMount() {
        this.loadProducts();
    }

    // Utilizando o modelo de arrow function evita usar o bind
    // Probelas com o escopo do "this" -> arrow function não o sobescreve, 
    // funções nomeadas precisam do "bind" (conforme freeCodeCamp)
    // As funções de ciclo de vida do componente não têm esse problema
    // loadProducts = () => { }

    async loadProducts(page = 1) {
        const response = await api.get(`/products?page=${page}`);

        const { docs , ...productInfo } = response.data;

        this.setState({ products: docs, productInfo, page} );
    }

    // fazer essa como função normal e a next como arrow
    nextPage() {
        const { page, productInfo } = this.state;
        
        if(page === productInfo.pages) return;
        
        const pageNumber = page + 1;
        
        this.loadProducts(pageNumber);
    }
    
    prevPage = () => {
        const { page } = this.state;
        
        if(page === 1) return;
        
        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    }

    render() {
        const { products, page, productInfo } = this.state;

        const lista = products.map( product => ( 
                            <article key={product._id}>
                                <strong>{product.title}</strong>
                                <p>{product.description}</p>
                                
                                <Link to={`/products/${product._id}`}>Acessar</Link>
                            </article>
                            ));

        return (
            <div className="product-list">
                {lista}               
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        )
    }
}