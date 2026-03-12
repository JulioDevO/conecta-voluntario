document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mapeando Elementos
    const boxLogin = document.getElementById('boxLogin');
    const boxCadastro = document.getElementById('boxCadastro');
    const linkIrParaCadastro = document.getElementById('linkIrParaCadastro');
    const linkIrParaLogin = document.getElementById('linkIrParaLogin');
    const formLogin = document.getElementById('formLogin');
    const formCadastroData = document.getElementById('formCadastroData');

    // 2. Lógica de Roteamento pela URL 
    const parametrosUrl = new URLSearchParams(window.location.search);
    const telaSolicitada = parametrosUrl.get('tela');

    if (telaSolicitada === 'cadastro') {
        boxLogin.classList.add('oculto');
        boxCadastro.classList.remove('oculto');
    } 

    // 3. Alternar para Cadastro (Link azul dentro do formulário)
    linkIrParaCadastro.addEventListener('click', (evento) => {
        evento.preventDefault();
        boxLogin.classList.add('oculto');
        boxCadastro.classList.remove('oculto');
    });

    // 4. Alternar para Login (Link azul dentro do formulário)
    linkIrParaLogin.addEventListener('click', (evento) => {
        evento.preventDefault();
        boxCadastro.classList.add('oculto');
        boxLogin.classList.remove('oculto');
    });

    // 5. Envio do Form de Login
    formLogin.addEventListener('submit', (evento) => {
        evento.preventDefault();
        const email = document.getElementById('emailLogin').value;
        alert(`Login simulado com sucesso para: ${email}`);
        window.location.href = 'index.html'; 
    });

    // 6. Envio do Form de Cadastro
    formCadastroData.addEventListener('submit', (evento) => {
        evento.preventDefault();
        const nome = document.getElementById('nomeCadastro').value;
        const tipo = document.getElementById('tipoUsuario').value;
        
        alert(`Cadastro simulado! Bem-vindo(a) ${nome} (${tipo})`);
        window.location.href = 'cadastro.html?tela=login'; 
    });

});