import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { capitalize } from '../utils/helpers'
import { callCarregarCategorias, selecionarCategoria } from '../actions'
import { connect } from 'react-redux'

class CategoriasList extends Component {
  componentDidMount() {
    this.props.callCarregarCategorias()
  }

  handleSelecionarCategoria = (e) => {
    e.preventDefault()

    let categoria = e.target.attributes.getNamedItem('categoria').value

    this.props.selecionarCategoria(categoria)

    window.location = '/' + categoria
  }

  render() {
    let categorias = this.props.categorias.categorias

    return (
      <section className="categorias-wrapper">
        <div><h4>Categorias:</h4>
        <ul className="categorias-list">
          <li><Link to="/">Todas</Link></li>
          {categorias !== undefined && categorias.map((categoria) => (
            <li key={categoria.name}><Link to="#" onClick={this.handleSelecionarCategoria} categoria={categoria.name}>{capitalize(categoria.name)}</Link></li>
          ))}
        </ul>
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({ categoria, categorias }) => ({
  categoria,
  categorias
})

export default connect(mapStateToProps, { callCarregarCategorias, selecionarCategoria })(CategoriasList)