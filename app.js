// Fungsi untuk Memuat Data dari proof.json
const loadProofs = async () => {
    try {
        const response = await fetch('proof.json');
        const proofs = await response.json();

        const container = document.getElementById('proofs');
        container.innerHTML = proofs.map(proof => `
            <div class="proof">
                <h3>Target: ${proof.target}</h3>
                <p>Port: ${proof.port}</p>
                <p>Duration: ${proof.duration}</p>
                <a href="${proof.report}" target="_blank">Check Report</a>
                <img src="images/${proof.screenshot}" alt="Screenshot of attack">
            </div>
        `).join('');
    } catch (error) {
        console.error("Failed to load proofs:", error);
        document.getElementById('proofs').innerHTML = `<p>Error loading proofs.</p>`;
    }
};

// Pencarian
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('input', async () => {
    try {
        const response = await fetch('proof.json');
        const proofs = await response.json();
        const query = searchBar.value.toLowerCase();
        const filtered = proofs.filter(proof => 
            proof.target.toLowerCase().includes(query) || 
            proof.port.toString().includes(query) ||
            proof.duration.includes(query)
        );
        const container = document.getElementById('proofs');
        container.innerHTML = filtered.map(proof => `
            <div class="proof">
                <h3>Target: ${proof.target}</h3>
                <p>Port: ${proof.port}</p>
                <p>Duration: ${proof.duration}</p>
                <a href="${proof.report}" target="_blank">Check Report</a>
                <img src="images/${proof.screenshot}" alt="Screenshot of attack">
            </div>
        `).join('');
    } catch (error) {
        console.error("Failed to filter proofs:", error);
    }
});

// Inisialisasi
document.addEventListener('DOMContentLoaded', loadProofs);
