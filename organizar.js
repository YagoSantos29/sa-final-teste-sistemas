const fs = require('fs');
const path = require('path');

// Caminho absoluto baseado em onde o script está rodando (dentro de src)
const srcDir = __dirname; 

function trazerDeVolta(subpasta) {
  const pastaOrigem = path.join(srcDir, subpasta);

  if (fs.existsSync(pastaOrigem)) {
    const arquivos = fs.readdirSync(pastaOrigem);

    arquivos.forEach(arquivo => {
      const caminhoAntigo = path.join(pastaOrigem, arquivo);
      const caminhoNovo = path.join(srcDir, arquivo);

      // Move o arquivo de volta para a raiz de src
      fs.renameSync(caminhoAntigo, caminhoNovo);
      console.log(`⏪ Voltou para a raiz: ${arquivo}`);
    });

    // Tenta apagar a pasta vazia que sobrou
    try {
      fs.rmdirSync(pastaOrigem);
      console.log(`🗑️ Pasta vazia deletada: src/${subpasta}`);
    } catch (e) {
      // Ignora se a pasta não estiver totalmente vazia
    }
  }
}

console.log('🔄 Desfazendo alterações e voltando arquivos para a raiz...');

// Executa a restauração nas duas pastas
trazerDeVolta('components');
trazerDeVolta('pages');

console.log('✨ Estrutura restaurada para o estado original!');