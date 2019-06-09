import React from 'react'
import { Link } from 'react-router-dom'

const Erro404 = () => (
 <div className="erro404-wrapper">
   <p>Este conteúdo foi removido.</p>
   <Link to="/">Retornar para a página inicial</Link>
 </div>
)

export default Erro404