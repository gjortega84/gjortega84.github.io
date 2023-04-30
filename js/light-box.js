const descarga = document.querySelector('.download-cv');
const pdfUrl = 'others/cv.pdf';
  const pdfName = 'cv.pdf';

descarga.addEventListener('click', ()=>{
  // Crea un enlace oculto para descargar el archivo
  const downloadElement = document.createElement('a');
  downloadElement.setAttribute('href', pdfUrl);
  downloadElement.setAttribute('download', pdfName);
  downloadElement.style.display = 'none';
  document.body.appendChild(downloadElement);

  // Simula un clic en el enlace oculto
  downloadElement.click();

  // Elimina el enlace oculto
  document.body.removeChild(downloadElement);
});
