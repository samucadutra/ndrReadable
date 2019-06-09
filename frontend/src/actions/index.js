import * as API from '../utils/api'

export const CARREGAR_CATEGORIAS = 'CARREGAR_CATEGORIAS'
export const CARREGAR_POSTAGENS = 'CARREGAR_POSTAGENS'
export const CARREGAR_POSTAGENS_POR_CATEGORIA = 'CARREGAR_POSTAGENS_POR_CATEGORIA'
export const CARREGAR_POSTAGEM = 'CARREGAR_POSTAGEM'
export const EDITAR_POSTAGEM = 'EDITAR_POSTAGEM'
export const EXCLUIR_POSTAGEM = 'EXCLUIR_POSTAGEM'
export const CARREGAR_COMENTARIOS = 'CARREGAR_COMENTARIOS'
export const CARREGAR_COMENTARIO = 'CARREGAR_COMENTARIO'
export const EXCLUIR_COMENTARIO = 'EXCLUIR_COMENTARIO'
export const SELECIONAR_CATEGORIA = 'SELECIONAR_CATEGORIA'
export const SELECIONAR_ORDEM = 'SELECIONAR_ORDEM'
export const VOTAR_POSTAGEM = 'VOTAR_POSTAGEM'
export const VOTAR_POSTAGEM_FROMPOST = 'VOTAR_POSTAGEM_FROMPOST'
export const VOTAR_COMENTARIO = 'VOTAR_COMENTARIO'

export function carregarCategorias(categorias) {
  return {
    type: CARREGAR_CATEGORIAS,
    categorias
  }
}

export function callCarregarCategorias() {
  return (dispatch) => {
    API.getCategories().then(
      (response) => dispatch(carregarCategorias(response))
    )
  }
}

export function selecionarCategoria(categoria) {
  return {
    type: SELECIONAR_CATEGORIA,
    categoria
  }
}

export function carregarPostagens(postagens) {
  return {
    type: CARREGAR_POSTAGENS,
    postagens
  }
}

export function carregarPostagensPorCategoria(categoria, postagens) {
  return {
    type: CARREGAR_POSTAGENS_POR_CATEGORIA,
    categoria,
    postagens
  }
}

export function callCarregarPostagens() {
  return (dispatch) => {
    API.getPosts().then(
      (response) => dispatch(carregarPostagens(response))
    )
  }
}

export function callCarregarPostagensPorCategoria(categoria) {
  return (dispatch) => {
    API.getPostsByCategory(categoria).then(
      (response) => dispatch(carregarPostagensPorCategoria(categoria, response))
    )
  }
}

export function selecionarOrdem(ordem) {
  return {
    type: SELECIONAR_ORDEM,
    ordem
  }
}

export function carregarPostagem(postagem) {
  return {
    type: CARREGAR_POSTAGEM,
    postagem
  }
}

export function callCarregarPostagem(id) {
  return (dispatch) => {
    API.getPost(id).then(
      (response) => dispatch(carregarPostagem(response))
    )
  }
}

export function callCriarPostagem(postagem) {
  return (dispatch) => {
    API.createPost(postagem).then(
      (response) => dispatch(carregarPostagem(response))
    )
  }
}

export function callEditarPostagem(postagem) {
  return (dispatch) => {
    API.editPost(postagem).then(
      (response) => dispatch(carregarPostagem(response))
    )
  }
}

export function excluirPostagem(id) {
  return {
    type: EXCLUIR_POSTAGEM,
    id
  }
}

export function callExcluirPostagem(id) {
  return (dispatch) => {
    API.deletePost(id).then(
      () => dispatch(excluirPostagem(id))
    )
  }
}

export function carregarComentarios(id, comentarios) {
  return {
    type: CARREGAR_COMENTARIOS,
    id,
    comentarios
  }
}

export function callCarregarComentarios(id) {
  return (dispatch) => {
    API.getComments(id).then(
      (response) => dispatch(carregarComentarios(id, response))
    )
  }
}

export function carregarComentario(id, comentario) {
  return {
    type: CARREGAR_COMENTARIO,
    id,
    comentario
  }
}

export function callCarregarComentario(id) {
  return (dispatch) => {
    API.getComment(id).then(
      (response) => dispatch(carregarComentario(id, response))
    )
  }
}

export function callCriarComentario(id) {
  return (dispatch) => {
    API.createComment(id).then(
      (response) => dispatch(carregarComentario(id, response))
    )
  }
}

export function callEditarComentario(comentario) {
  return (dispatch) => {
    API.editComment(comentario).then(
      (response) => dispatch(carregarComentario(comentario.id, response))
    )
  }
}

export function excluirComentario(id) {
  return {
    type: EXCLUIR_COMENTARIO,
  }
}

export function callExcluirComentario(id) {
  return (dispatch) => {
    API.deleteComment(id).then(
      () => dispatch(excluirComentario(id))
    )
  }
}

export function votar(id, voto, path, fromPost) {
  let type

  if(fromPost === true) {
    type = VOTAR_POSTAGEM_FROMPOST
  } else {
    type = (path === 'posts') ? VOTAR_POSTAGEM : VOTAR_COMENTARIO
  }

  return {
    type: type,
    id,
    voto
  }
}

export function callVotar(id, data, path, fromPost) {
  let voto = (data.option === 'upVote') ? 1 : -1

  return (dispatch) => {
    API.votePost(id, data, path).then(
      () => dispatch(votar(id, voto, path, fromPost))
    )
  }
}
