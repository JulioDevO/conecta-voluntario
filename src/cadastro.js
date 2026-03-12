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
    formCadastroData.addEventListener('submit', (evento) =>{
        evento.preventDefault();

        const nome = document.getElementById('nomeCadastro').value;
        const email = document.getElementById('emailCadastro').value;
        const senha = document.getElementById('senhaCadastro').value;
        const tipo = document.getElementById('tipoUsuario').value;

        const novoUsuario = {
            nome: nome,
            email: email,
            senha: senha,
            tipo: tipo
        };

        localStorage.setItem('usuarioConecta', JSON.stringify(novoUsuario));

        alert(`Cadastro realizado com sucesso! Bem-Vindo(a), ${nome}`);

        window.location.href = 'cadastro.html?tela=login';
    })

    // 6. Envio do Form de Cadastro
    formLogin.addEventListener('submit', (evento) =>{
        evento.preventDefault();

        const emailDigitado = document.getElementById('emailLogin').value;
        const senhaDigitado = document.getElementById('senhaLogin').value;

        const usuarioSalvoString = localStorage.getItem('usuarioConecta');

        if(usuarioSalvoString){
            const usuarioSalvo = JSON.parse(usuarioSalvoString);
            
            if(usuarioSalvo.email === emailDigitado && usuarioSalvo.senha === senhaDigitado){
                alert(`Login aprovado! Olá novamente, ${usuarioSalvo.nome}.`);

                window.location.href = 'index.html';
            } else{
                alert("E-mail ou senha incorretos. Tente novamente.");
            }       
        } else{
            alert("Nenhuma conta encontrada com este e-mail. Cadaste-se primeiro!");
        }
    });
});