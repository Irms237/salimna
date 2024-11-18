// Data Bukti Serangan
const proofs = [
    {
        target: "192.168.1.1",
        port: 80,
        duration: "300s",
        report: "http://example.com/report/1",
        screenshot: "https://via.placeholder.com/400"
    },
    {
        target: "example.com",
        port: 443,
        duration: "600s",
        report: "http://example.com/report/2",
        screenshot: "https://via.placeholder.com/400"
    }
];

// Load Bukti ke Halaman
const loadProofs = () => {
    const container = document.getElementById('proofs');
    container.innerHTML = proofs.map(proof => `
        <div class="proof">
            <h3>Target: ${proof.target}</h3>
            <p>Port: ${proof.port}</p>
            <p>Duration: ${proof.duration}</p>
            <a href="${proof.report}" target="_blank">Check Report</a>
            <img src="${proof.screenshot}" alt="Screenshot of attack">
        </div>
    `).join('');
};

// Pencarian
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();
    const filtered = proofs.filter(proof => 
        proof.target.toLowerCase().includes(query) || 
        proof.port.toString().includes(query) ||
        proof.duration.includes(query)
    );
    document.getElementById('proofs').innerHTML = filtered.map(proof => `
        <div class="proof">
            <h3>Target: ${proof.target}</h3>
            <p>Port: ${proof.port}</p>
            <p>Duration: ${proof.duration}</p>
            <a href="${proof.report}" target="_blank">Check Report</a>
            <img src="${proof.screenshot}" alt="Screenshot of attack">
        </div>
    `).join('');
});

// Inisialisasi
document.addEventListener('DOMContentLoaded', loadProofs);
