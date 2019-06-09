import { combineReducers } from 'redux'
import { CARREGAR_CATEGORIAS, SELECIONAR_CATEGORIA, CARREGAR_POSTAGENS, CARREGAR_POSTAGENS_POR_CATEGORIA, CARREGAR_POSTAGEM, EXCLUIR_POSTAGEM, CARREGAR_COMENTARIOS, CARREGAR_COMENTARIO, EXCLUIR_COMENTARIO, SELECIONAR_ORDEM, VOTAR_POSTAGEM, VOTAR_POSTAGEM_FROMPOST, VOTAR_COMENTARIO } from '../actions'

function categorias(state = {}, action) {
  switch(action.type) {
    case CARREGAR_CATEGORIAS:
      return {
        ...state,
        categorias: action.categorias
      }
    case SELECIONAR_CATEGORIA:
      return {
        ...state,
        categoria: action.categoria
      }
    default:
      return state
  }
}

const initialStatePostagens = {
  postagens: []
}

function postagens(state = initialStatePostagens, action) {
  switch(action.type) {
    case CARREGAR_POSTAGENS:
      return {
        ...state,
        postagens: action.postagens
      }
    case CARREGAR_POSTAGENS_POR_CATEGORIA:
      return {
        ...state,
        categoria: action.categoria,
        postagens: action.postagens
      }
    case EXCLUIR_POSTAGEM:
      return {
        ...state,
        postagens: state.postagens.filter(post => post.id !== action.id)
      }
    case VOTAR_POSTAGEM:
      return {
        ...state,
        postagens: state.postagens.map(postagem => {
          if(postagem.id === action.id) {
            postagem.voteScore = postagem.voteScore + action.voto
          }

          return postagem;
        })
      }
    default:
      return state
  }
}

const initialStateOrdem = {
  ordem: 'id'
}

function ordem(state = initialStateOrdem, action) {
  switch(action.type) {
    case SELECIONAR_ORDEM:
      return {
        ...state,
        ordem: action.ordem
      }
    default:
      return state
  }
}

const initialStatePostagem = {
  postagens: [],
  postagem: {}
}

function postagem(state = initialStatePostagem, action) {
  switch(action.type) {
    case CARREGAR_POSTAGEM:
      return {
        ...state,
        postagem: action.postagem
      }
    case EXCLUIR_POSTAGEM:
      return {
        ...state,
        postagens: state.postagens.filter(post => post.id !== action.id)
      }
    case VOTAR_POSTAGEM_FROMPOST:
      return {
        ...state,
        postagem: {
          ...state.postagem,
          voteScore: state.postagem.voteScore + action.voto
        }
      }
    default:
      return state
  }
}

const initialStateComentarios = {
  comentarios: []
}

function comentarios(state = initialStateComentarios, action) {
  switch(action.type) {
    case CARREGAR_COMENTARIOS:
      return {
        ...state,
        comentarios: action.comentarios
      }
    case VOTAR_COMENTARIO:
      return {
        ...state,
        comentarios: state.comentarios.map(comentario => {
          if(comentario.id === action.id) {
            comentario.voteScore = comentario.voteScore + action.voto
          }

          return comentario;
        })
      }
    default:
      return state
  }
}

const initialStateComentario = {
  comentarios: [],
  comentario: {}
}

function comentario(state = initialStateComentario, action) {
  switch(action.type) {
    case CARREGAR_COMENTARIO:
      return {
        ...state,
        comentarios: state.comentarios.concat(action.comentario),
        comentario: action.comentario
      }
    case EXCLUIR_COMENTARIO:
      return {
        ...state,
        comentarios: state.comentarios.filter(comentario => comentario.id !== action.id)
      }
    default:
      return state
  }
}

export default combineReducers({
  categorias,
  postagens,
  ordem,
  postagem,
  comentarios,
  comentario
})