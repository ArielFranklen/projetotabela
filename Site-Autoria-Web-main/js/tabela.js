
document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById("meuFormulario").addEventListener("submit", function(event) {
        event.preventDefault(); 
      
        let nome = document.getElementById("nome").value;
        let campus = document.getElementById("campus").value;

        
        let tabela = document.getElementById("tabela-corpo");
        let novaLinha = document.createElement("tr");

        novaLinha.innerHTML = `
            <td>${nome}</td>
            <td>${campus}</td>
        `;

        
        tabela.appendChild(novaLinha);

        
        document.getElementById("meuFormulario").reset();
    });

    
    const button = document.getElementById("meuBotao");
    if (button) {
        button.addEventListener("click", function() {
            
            
        });
    } else {
        console.log("Botão não encontrado!");
    }
});

function sortTable(columnIndex) {
    let table = document.querySelector("table tbody");
    let rows = Array.from(table.rows);

    
    let ascending = table.getAttribute("data-sort") === columnIndex.toString();

    rows.sort((rowA, rowB) => {
        let cellA = rowA.cells[columnIndex].textContent.trim().toLowerCase();
        let cellB = rowB.cells[columnIndex].textContent.trim().toLowerCase();

        if (!isNaN(cellA) && !isNaN(cellB)) {
           
            return ascending ? cellB - cellA : cellA - cellB;
        }

        return ascending ? cellB.localeCompare(cellA) : cellA.localeCompare(cellB);
    });

    
    table.setAttribute("data-sort", ascending ? "" : columnIndex.toString());

    
    table.innerHTML = "";
    rows.forEach(row => table.appendChild(row));
}