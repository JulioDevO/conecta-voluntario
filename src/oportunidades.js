document.addEventListener('DOMContentLoaded', () => {

    // 1. PADRONIZAÇÃO 

    const estilosOportunidades = `
        .oportunidades-section { 
            width: 100%; 
            padding: 3rem 5%; 
            background-color: var(--bg-color); 
            text-align: center; 
        }

        .oportunidades-section h2 { 
            font-size: 2.5rem; 
            color: var(--primary-color); 
            margin-bottom: 0.5rem; 
        }

        .oportunidades-section p { 
            color: #666; 
            font-size: 1.1rem; 
            margin-bottom: 2rem; 
        }

        .busca-container { 
            display: flex; 
            justify-content: center; 
            margin-bottom: 3rem; 
        }

        #inputBusca { 
            width: 100%; 
            max-width: 600px; 
            padding: 1rem 1.5rem; 
            border: 2px solid transparent; 
            border-radius: 50px; 
            box-shadow: 0 4px 15px rgba(0,0,0,0.08); 
            font-size: 1.1rem; 
            transition: all 0.3s ease; 
        }

        #inputBusca:focus { 
            border-color: var(--primary-color); 
            box-shadow: 0 4px 20px rgba(62, 126, 164, 0.25); 
            outline: none; 
        }

        .vagas-grid { 
            display: grid; 
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); 
            gap: 2rem; 
        }

        .vaga-card { 
            background-color: #ffffff; 
            padding: 2rem; 
            border-radius: 12px; 
            box-shadow: 0 5px 15px rgba(0,0,0,0.05); 
            text-align: left; 
            border-top: 5px solid var(--primary-color); 
            transition: transform 0.3s ease, box-shadow 0.3s ease; 
            display: flex; 
            flex-direction: column; 
            align-items: flex-start; 
        }

        .vaga-card:hover { 
            transform: translateY(-8px); 
            box-shadow: 0 12px 24px rgba(0,0,0,0.12); 
        }

        .vaga-card h3 { 
            font-size: 1.4rem; 
            color: var(--text-dark); 
            margin-bottom: 1rem; 
            line-height: 1.3; 
        }

        .vaga-card p { 
            color: #555; 
            margin-bottom: 0.8rem; 
            font-size: 1rem; 
        }

        .vaga-nao-encontrada { 
            color: #d9534f; 
            font-size: 1.2rem; 
            font-weight: bold; 
            grid-column: 1 / -1; 
            margin-top: 2rem; 
        }

        .badge-area { 
            display: inline-block; 
            background-color: #eaf3f8; 
            color: var(--primary-color); 
            padding: 0.3rem 0.8rem; 
            border-radius: 20px; 
            font-size: 0.85rem; 
            font-weight: bold; 
            margin-top: 0.5rem; 
        }
    `;

    const styleTag = document.createElement('style');
    styleTag.innerHTML = estilosOportunidades;
    document.head.appendChild(styleTag);


    // 2. INFORMAÇÕES DO CARD

    const vagasVoluntariado = [
        { id: 1, titulo: "Apoio Escolar em Matemática", ong: "Instituto Educar+", area: "Educação" },
        { id: 2, titulo: "Plantio de Árvores", ong: "Verde Cidade", area: "Meio Ambiente" },
        { id: 3, titulo: "Recreação Infantil", ong: "Sorriso de Criança", area: "Social" },
        { id: 4, titulo: "Mentoria de Programação", ong: "Code for All", area: "Tecnologia" }
    ];

    const inputBusca = document.getElementById('inputBusca');
    const listaVagasContainer = document.getElementById('listaVagas');

    // 3.RENDERIZAÇÃO

    function renderizarVagas(vagas) {
        listaVagasContainer.innerHTML = '';

        if (vagas.length === 0) {
            const mensagemErro = document.createElement('p');
            mensagemErro.textContent = "Nenhuma vaga encontrada para esta busca.";
            mensagemErro.classList.add('vaga-nao-encontrada'); 
            listaVagasContainer.appendChild(mensagemErro);
            return; 
        }

        vagas.forEach(vaga => {
            const card = document.createElement('div');
            card.classList.add('vaga-card');
            card.innerHTML = `
                <h3>${vaga.titulo}</h3>
                <p><strong>ONG:</strong> ${vaga.ong}</p>
                <span class="badge-area">${vaga.area}</span>
            `;
            listaVagasContainer.appendChild(card);
        });
    }
    // 4. SISTEMA DE FILTRO 
    if (inputBusca) {
        inputBusca.addEventListener('input', (evento) => {
            const termoBusca = evento.target.value.toLowerCase();
            const vagasFiltradas = vagasVoluntariado.filter(vaga => 
                vaga.area.toLowerCase().includes(termoBusca) || 
                vaga.titulo.toLowerCase().includes(termoBusca)
            );
            renderizarVagas(vagasFiltradas);
        });
    }

    // Renderiza a lista completa ao abrir a página
    renderizarVagas(vagasVoluntariado);
});