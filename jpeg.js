function compress() {
  var fileInput = document.getElementById('fileInput');
  var file = fileInput.files[0];

  var compressor = new ImageCompressor();
  
  compressor.compress(file, {
    mimeType: 'image/jpeg',
    success(result) {
      var compressedUrl = URL.createObjectURL(result);
      var downloadLink = document.getElementById('downloadLink');
      
      downloadLink.href = compressedUrl;
      downloadLink.download = 'compressed.jpg';
      downloadLink.style.display = 'inline';
    },
    error(e) {
      console.log(e.message);
    },
  });
}

function clearFile() {
  var fileInput = document.getElementById('fileInput');
  fileInput.value = null;
  
  var downloadLink = document.getElementById('downloadLink');
  downloadLink.style.display = 'none';
  
}
