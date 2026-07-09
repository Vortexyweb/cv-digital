const QRCode = require('qrcode');
const fs = require('fs');

// O link que queremos codificar no QR Code
// Pode ser o seu LinkedIn, ou futuramente o link do seu GitHub Pages
const link = process.argv[2] || 'https://linkedin.com/in/gabriel-bueno-67ab79383';

const fileOutput = 'qrcode-cv.png';

QRCode.toFile(fileOutput, link, {
  color: {
    dark: '#000000',  // Pontos pretos
    light: '#ffffff' // Fundo branco
  },
  width: 500,
  margin: 2
}, function (err) {
  if (err) throw err;
  console.log(`\n✅ QR Code gerado com sucesso!`);
  console.log(`🔗 Link embutido: ${link}`);
  console.log(`📁 Imagem salva em: ${fileOutput}`);
});
