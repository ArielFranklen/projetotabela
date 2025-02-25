function mostrar() {
    if (senha.type === "password") {
        senha.setAttribute("type", "text");
        mostrar_senha.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        senha.setAttribute("type", "password");
        mostrar_senha.innerHTML = '<i class="fas fa-eye"></i>';
    }
}

mostrar_senha.addEventListener("click", mostrar);

function formatarTelefone(event) {
            const telefone = event.target;
            let valor = telefone.value.replace(/\D/g, ''); 

            if (valor.length <= 2) {
                telefone.value = `(${valor}`;
            } else if (valor.length <= 7) {
                telefone.value = `(${valor.substring(0, 2)}) ${valor.substring(2)}`;
            } else {
                telefone.value = `(${valor.substring(0, 2)}) ${valor.substring(2, 7)}-${valor.substring(7, 11)}`;
            }
        }

document.querySelector('#telefone').addEventListener('input', formatarTelefone);