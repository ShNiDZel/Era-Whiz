function loadInstance(id, url) {
  fetch(url)
    .then(Response => Response.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
      document.getElementById("year").textContent = new Date().getFullYear();
    })
    .catch(err => console.error("Failed to load module:", err));
}

loadInstance('footer-container', 'components/footer.html');
loadInstance('cta-container', 'components/cta.html');


// Wait for the page to fully load
window.onload = loadInstance;