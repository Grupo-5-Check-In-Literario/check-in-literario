const listaDeCategorias = [ "AUTO AJUDA", "CIÊNCIAS BIOLÓGICAS", "CIÊNCIAS EXATAS", "CIÊNCIAS SOCIAIS", "DIDÁTICOS", "ENGENHARIA", "EDUCAÇÃO", "ESOTERISMO", "LITERATURA NACIONAL", "LITERATURA INTERNACIONAL", "QUADRINHOS", "SEXUALIDADE", "SAUDE E BEM ESTAR", "TECNOLOGIA", "VIAGEM", "BIOGRAFIA"]

const listaNaoOrdenada = document.querySelector('.catalog-menu')

let tituloCategoria = document.getElementById('titulo-categoria')

for(let i = 0; i < listaDeCategorias.length; i++) {
    const categoria = document.createElement('li')
    
    categoria.innerText = listaDeCategorias[i]
    listaNaoOrdenada.appendChild(categoria)
    
    categoria.addEventListener('click', () => tituloCategoria.innerText = listaDeCategorias[i])
}