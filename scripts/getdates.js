const year = document.querySelector("#currentYear");

const today = new Date();
const lastModified = new Date(document.lastModified);
const formattedDate = lastModified.toLocaleString();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
document.getElementById('lastModified').textContent = `Last modified: ${formattedDate}`;