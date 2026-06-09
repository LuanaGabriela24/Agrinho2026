// 1. Botão "Saber Mais" rolar para a seção de Pilares
document.getElementById('btn-conhecer').addEventListener('click', function() {
    document.getElementById('pilares').scrollIntoView({ behavior: 'smooth' });
});

// 2. Gerador de Práticas Sustentáveis (Interatividade)
const praticas = [
    "Drones agrícolas: Monitoram a saúde da plantação e evitam o desperdício de água.",
    "Rotação de culturas: Alternar as plantas na lavoura mantém o solo rico em nutrientes de forma natural.",
    "Energia Solar no Campo: Uso de painéis solares para alimentar sistemas de irrigação.",
    "Biofertilizantes: Uso de resíduos orgânicos para nutrir a terra sem agredir o meio ambiente.",
    "Plantio Direto: Cultivo sobre os resíduos da colheita anterior, protegendo o solo contra erosão."
];

const btnDica = document.getElementById('btn-dica');
const textoDica = document.getElementById('texto-dica');

btnDica.addEventListener('click', function() {
    // Escolhe uma prática aleatória do array
    const indiceAleatorio = Math.floor(Math.random() * praticas.length);
    textoDica.innerText = praticas[indiceAleatorio];
    textoDica.style.color = "#2e7d32";
});

// 3. Envio do Formulário (Simulação)
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que a página recarregue
    
    const nome = document.getElementById('nome').value;
    
    alert(`Obrigado pelo apoio, ${nome}! Juntos faremos um agronegócio muito mais sustentável.`);
    
    // Limpa o formulário
    this.reset();
});