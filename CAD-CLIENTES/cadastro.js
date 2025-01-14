/* COMENTAR O CÓDIGO , ORGANIZAR O CÓDIGO.
createElement OU innerHtml para alterar a página 
addEventListener ou evento Click no elemento HTML
funções declarativas (function cadastro(){})
arrow function (const cadastro = () => {})
utilizar === para comparação (compara dado e o tipo)
for in, for of, for each */



// OBTER DADOS

const formulario = document.querySelector('.formulario');
const itemCadastro = document.querySelector('.itemNome');
const itemEmail = document.querySelector('.itemEmail');
const itemWhatsApp = document.querySelector('.itemWhatsApp');
const botaoCadastrar = document.querySelector('.btnCadastrar');
const tabela = document.querySelector('.tabela tbody');
const alert = document.querySelector('.alert');
const pesquisa = document.querySelector('.btnPesquisa');
const inputPesquisa = document.querySelector('.pesquisa');



// CRIAR FUNÇÕES

// FUNÇÃO PARA ADICIONAR UM NOVO ITEM NA TABELA 
const adicionarItem = () => {

    // PEGANDO O VALOR QUE A PESSOA DIGITAR
    const Nome = itemCadastro.value;
    const Email = itemEmail.value;
    const Whatsapp = itemWhatsApp.value;

    if(Whatsapp === '' || Email === '' || Nome === '' ){
        
        const alertInterface = document.createElement('h2');
        alertInterface.textContent = 'NÃO É POSSIVEL, CADASTRAR UM CLIENTE SE ALGUM CAMPO ESTIVER VAZIO';
        alert.appendChild(alertInterface);

    }else{

        // Aqui, estamos criando elementos HTML. linha é uma linha de tabela (tr), celulaItem e celulaAcao são células de tabela (td), e botaoExcluir é um botão (button).
        const linha = document.createElement('tr');
        const celulaNome = document.createElement('td');
        const celulaEmail = document.createElement('td');
        const celulaWhatsapp = document.createElement('td');
        const celulaAcao = document.createElement('td');
        const botaoExcluir = document.createElement('button');
        

        // CONFIGURANDO O BOTÃO EXCLUIR
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.addEventListener('click', removerItem);


        // ADICIONANDO CONTEÚDO ÁS CÉLULAS E Á LINHA
        celulaNome.textContent = Nome;
        celulaEmail.textContent = Email;
        celulaWhatsapp.textContent = Whatsapp;
        celulaAcao.appendChild(botaoExcluir);
        linha.appendChild(celulaNome);
        linha.appendChild(celulaEmail );
        linha.appendChild(celulaWhatsapp);
        linha.appendChild(celulaAcao);


        // ADICIONANDO A NOVA LINHA NA TABELA
        tabela.appendChild(linha);


        // LIMPANDO O CAMPO DE ENTRADA
        itemCadastro = '';
        itemEmail = '';
        itemWhatsApp = '';


    }
}



// FUNÇÃO PARA REMOVER UM ITEM 
const removerItem = (evento) => {

    // Função para remover um item da tabela


    // Obtém a linha que contém o item a ser removido
    const linha = evento.target.parentNode.parentNode; // O evento.target é o botão de exclusão, parentNode acessa o elemento pai (celulaAcao), e parentNode novamente acessa o elemento pai (linha)


     // Remove a linha da tabela
    tabela.removeChild(linha); // Remove a linha da tabela, removendo assim o item correspondente

}

// Definição da função buscarItem
const buscarItem = () => {

    // Obtém o valor do campo de pesquisa e converte para maiúsculas
    const pesquisaNome = inputPesquisa.value.toUpperCase();

    // Seleciona todas as linhas da tabela
    const linhas = tabela.querySelectorAll('tr');

    // Loop através de todas as linhas da tabela
    for (const linha of linhas) {
        // Seleciona todas as células da linha atual
        const celulas = linha.querySelectorAll('td');

        // Obtém o texto da primeira célula e converte para maiúsculas
        const clienteNome = celulas[0].textContent.toUpperCase();

        // Verifica se o nome do cliente contém o texto de pesquisa
        if (clienteNome.includes(pesquisaNome)) {
            // Se contém, mostra a linha
            linha.style.display = '';
        } else {
            // Se não contém, oculta a linha
            linha.style.display = 'none';
        }
    }
};

// Atribuição do evento de clique ao elemento 'pesquisa' que chama a função buscarItem
pesquisa.addEventListener('click', buscarItem);

// ADICIONANDO EVENTO DE CLIQUE AO BOTÃO DE ADICIONAR
botaoCadastrar.addEventListener('click', adicionarItem);