let fotos = [];

function uploadFotos(e) {
    const arquivos = Array.from(e.target.files);

    arquivos.forEach(file => {
        const reader = new FileReader();
        reader.onload = () => {
            fotos.push(reader.result);
            renderFotos();
        };
        reader.readAsDataURL(file);
    });
}

function renderFotos() {
    const preview = document.getElementById("preview");
    preview.innerHTML = "";
    fotos.forEach(imgSrc => {
        const img = document.createElement("img");
        img.src = imgSrc;
        preview.appendChild(img);
    });
}

function salvar() {
    const veiculos = JSON.parse(localStorage.getItem("veiculos")) || [];

    veiculos.push({
        nome: nome.value,
        potencia: potencia.value,
        zero: zero.value,
        cambio: cambio.value,
        combustivel: combustivel.value,
        motor: motor.value,
        torque: torque.value,
        tracao: tracao.value,
        porta: porta.value,
        descricao: descricao.value,
        imagens: fotos,
        tema: tema.value
    });

    localStorage.setItem("veiculos", JSON.stringify(veiculos));

    alert("✅ Veículo salvo com sucesso!");

    // limpar campos
    document.querySelectorAll("input, textarea").forEach(campo => {
        if (campo.type !== "color" && campo.type !== "file") campo.value = "";
    });

    document.getElementById("fotos").value = "";
    fotos = [];
    renderFotos();
}
