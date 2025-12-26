function salvar(){
 const carro={
  nome:nome.value,
  cor:cor.value,
  preco:preco.value,
  imagem:imagem.value,
  descricao:descricao.value
 };
 let lista=JSON.parse(localStorage.getItem("veiculos"))||[];
 lista.push(carro);
 localStorage.setItem("veiculos",JSON.stringify(lista));
 alert("Salvo!");
}
