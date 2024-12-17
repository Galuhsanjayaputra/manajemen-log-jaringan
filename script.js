document.addEventListener("DOMContentLoaded", () => {
    const logForm = document.getElementById("logForm");
    const logTableBody = document.getElementById("logTableBody");
    let logCounter = 1;

    // Event Listener untuk Form Submit
    logForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Ambil nilai input
        const ipAddress = document.getElementById("ipAddress").value;
        const activity = document.getElementById("activity").value;
        const status = document.getElementById("status").value;

        // Buat elemen waktu
        const currentTime = new Date().toLocaleString();

        // Tambahkan baris baru ke tabel
        const newRow = `
            <tr>
                <td>${logCounter}</td>
                <td>${ipAddress}</td>
                <td>${activity}</td>
                <td>${status}</td>
                <td>${currentTime}</td>
            </tr>
        `;
        logTableBody.insertAdjacentHTML("beforeend", newRow);

        // Reset form dan tingkatkan counter
        logForm.reset();
        logCounter++;
    });
});
