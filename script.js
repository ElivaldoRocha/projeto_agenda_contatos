// script.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Previne o comportamento padrão do formulário (recarregar a página)

    const name = document.getElementById('name').value;
    // Obtém o valor do campo de nome
    const phone = document.getElementById('phone').value;
    // Obtém o valor do campo de telefone

    const contactList = document.getElementById('contact-list');
    // Obtém a referência ao corpo da tabela onde os contatos serão adicionados
    const row = document.createElement('tr');
    // Cria uma nova linha na tabela

    const nameCell = document.createElement('td');
    // Cria uma nova célula para o nome
    nameCell.textContent = name;
    // Define o texto da célula como o nome inserido
    row.appendChild(nameCell);
    // Adiciona a célula à linha

    const phoneCell = document.createElement('td');
    // Cria uma nova célula para o telefone
    phoneCell.textContent = phone;
    // Define o texto da célula como o telefone inserido
    row.appendChild(phoneCell);
    // Adiciona a célula à linha

    contactList.appendChild(row);
    // Adiciona a linha ao corpo da tabela

    // Limpa os campos do formulário após adicionar o contato
    document.getElementById('name').value = '';
    // Limpa o campo de nome
    document.getElementById('phone').value = '';
    // Limpa o campo de telefone
});
