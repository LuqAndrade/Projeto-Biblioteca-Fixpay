var tbody = document.querySelector("tbody");
var pageU1 = document.querySelector(".pagination");
var itemShow = document.querySelector("#itemperpage");
var tr = tbody.querySelectorAll("tr");
var emptyBox = [];
var index = 1;
var itemParPage = 6;

for (let i = 0; i < tr.length; i++) {
    emptyBox.push(tr[i]);
}

itemShow.onchange = giveTrPerPage;

function giveTrPerPage() {
    itemParPage = Number(this.value);
    displayPage(itemParPage);
}

function displayPage(limit) {
    tbody.innerHTML = '';
    for (let i = 0; i < limit; i++) {
        tbody.appendChild(emptyBox[i]);
    }
}

displayPage(itemParPage);

function pageGenerator(getem){
    const num_of_tr = emptyBox.length;
    if (num_of_tr <= getem ){
        pageU1.style.display = 'none';
    }
    else {
        pageU1.style.display = 'flex';
        const num_of_page = Math.ceil(num_of_tr/getem);
        for(let i=1; i<num_of_page; i++){
            const li = document.createElement('li');
            li.className = 'list';
            const a = document.createElement('a');
            a.href = "#";
            a.innerText = i;
            a.setAttribute('data-page', i);
            li.appendChild(a);
            pageU1.insertBefore(li, pageU1.querySelector("next"));
        }
    }
}
pageGenerator(itemParPage);


//sidebar
/*este comando guardou todos os elemntos que tem a classe item-menu*/
var menuItem = document.querySelectorAll('.item-menu')

/*criando uma função que deixa o botão selecionado sozinho*/
function selectLink() {
    /**vamos usar o for each : serve para fazer uma varredura nos nossos arrays*/
    /*abaixo fizemos uma arrow function : As arrow functions permitem ter um retorno implícito, que são valores retornados sem ter que usar a palavar return.*/
    /*este itemm criado é o li itens do html*/menuItem.forEach((item) =>
    item.classList.remove('ativo')) /*remover uma classe de um elemento */
    /*adicionando a classe ativo quando eu clicar no item*/
    this.classList.add('ativo')
}

/*vamos criar um escutador de eventos,para que ele "escute" quando alguem clicar em algum item */
menuItem.forEach((item) =>
    item.addEventListener('click', selectLink) /*chamando a função que criei la em cima*/
)

//expandir menu
var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function () {
    menuSide.classList.toggle('expandir')
})
