document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mapeando as Telas
    const boxLogin = document.getElementById('boxLogin');
    const boxCadastroVoluntario = document.getElementById('boxCadastroVoluntario');
    const boxCadastroOng = document.getElementById('boxCadastroOng');

    // 2. Mapeando os Formulários
    const formLogin = document.getElementById('formLogin');
    const formCadastroVoluntario = document.getElementById('formCadastroVoluntario');
    const formCadastroOng = document.getElementById('formCadastroOng');

    // === FUNÇÃO MESTRE DE NAVEGAÇÃO ===
    // Esconde todas as caixas e mostra apenas a que foi pedida
    function mostrarTela(telaParaMostrar) {
        boxLogin.classList.add('oculto');
        boxCadastroVoluntario.classList.add('oculto');
        boxCadastroOng.classList.add('oculto');
        
        telaParaMostrar.classList.remove('oculto');
    }

    // 3. Lógica de Roteamento pela URL inicial
    const parametrosUrl = new URLSearchParams(window.location.search);
    const telaSolicitada = parametrosUrl.get('tela');

    if (telaSolicitada === 'cadastro') {
        mostrarTela(boxCadastroVoluntario);
    } 

    // 4. Navegação pelos Links (Click)
    document.getElementById('linkIrParaCadastro').addEventListener('click', (e) => { e.preventDefault(); mostrarTela(boxCadastroVoluntario); });
    document.getElementById('linkIrParaCadastro2').addEventListener('click', (e) => { e.preventDefault(); mostrarTela(boxCadastroVoluntario); });
    
    document.getElementById('linkIrParaCadastroOng').addEventListener('click', (e) => { e.preventDefault(); mostrarTela(boxCadastroOng); });
    document.getElementById('linkIrParaCadastroOng2').addEventListener('click', (e) => { e.preventDefault(); mostrarTela(boxCadastroOng); });
    
    document.getElementById('linkIrParaLogin').addEventListener('click', (e) => { e.preventDefault(); mostrarTela(boxLogin); });
    document.getElementById('linkIrParaLogin2').addEventListener('click', (e) => { e.preventDefault(); mostrarTela(boxLogin); });

    // =========================================================
    // 5. SALVANDO VOLUNTÁRIO
    // =========================================================
    formCadastroVoluntario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        
        const usuario = {
            nome: document.getElementById('nomeVoluntario').value,
            cpf: document.getElementById('cpfVoluntario').value, // <-- AQUI ESTÁ O CPF
            email: document.getElementById('emailVoluntario').value,
            senha: document.getElementById('senhaVoluntario').value,
            tipo: 'voluntario' 
        };
        
        localStorage.setItem('usuarioConecta', JSON.stringify(usuario));
        alert(`Sucesso! Bem-vindo Voluntário(a) ${usuario.nome}.`);
        mostrarTela(boxLogin); 
    });

    // =========================================================
    // 6. SALVANDO ONG
    // =========================================================
    formCadastroOng.addEventListener('submit', (evento) => {
        evento.preventDefault();
        const ong = {
            nome: document.getElementById('nomeOng').value,
            cnpj: document.getElementById('cnpjOng').value,
            email: document.getElementById('emailOng').value,
            senha: document.getElementById('senhaOng').value,
            tipo: 'ong' // Fixado via código!
        };
        localStorage.setItem('usuarioConecta', JSON.stringify(ong));
        alert(`Sucesso! Instituição ${ong.nome} cadastrada.`);
        mostrarTela(boxLogin); 
    });

    // =========================================================
    // 7. LÓGICA DE LOGIN (Inteligente)
    // =========================================================
    formLogin.addEventListener('submit', (evento) => {
        evento.preventDefault();
        const emailDigitado = document.getElementById('emailLogin').value;
        const senhaDigitada = document.getElementById('senhaLogin').value;
        const usuarioSalvoString = localStorage.getItem('usuarioConecta');
        
        if (usuarioSalvoString) {
            const usuarioSalvo = JSON.parse(usuarioSalvoString);
            
            if (usuarioSalvo.email === emailDigitado && usuarioSalvo.senha === senhaDigitada) {
                if (usuarioSalvo.tipo === 'voluntario') {
                    alert(`Acesso liberado. Vamos encontrar uma vaga, ${usuarioSalvo.nome}?`);
                    window.location.href = 'oportunidades.html'; 
                } else {
                    alert(`Acesso Institucional liberado para: ${usuarioSalvo.nome}.`);
                    window.location.href = 'index.html'; 
                }
            } else {
                alert("❌ E-mail ou senha incorretos.");
            }
        } else {
            alert("❌ Nenhuma conta encontrada. Cadastre-se primeiro!");
        }
    });

});