document.addEventListener('DOMContentLoaded', function () {
    // Lista de ferramentas e recursos (pode ser obtida de uma API)
    const tools = [
        { name: 'Ferramenta 1', description: 'Descrição da Ferramenta 1' },
        { name: 'Ferramenta 2', description: 'Descrição da Ferramenta 2' },
        { name: 'Ferramenta 3', description: 'Descrição da Ferramenta 3' },
        // Adicione mais ferramentas conforme necessário
    ];

    const toolsSection = document.getElementById('tools');

    // Adiciona cada ferramenta à seção de ferramentas
    tools.forEach(tool => {
        const toolDiv = document.createElement('div');
        toolDiv.classList.add('tool');

        const toolTitle = document.createElement('h2');
        toolTitle.textContent = tool.name;

        const toolDescription = document.createElement('p');
        toolDescription.textContent = tool.description;

        toolDiv.appendChild(toolTitle);
        toolDiv.appendChild(toolDescription);
        toolsSection.appendChild(toolDiv);
    });
});
