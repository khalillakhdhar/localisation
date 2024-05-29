function initMap() {
    // Initialiser la carte
    const map = L.map('map').setView([33.8815, 10.0982], 12); // Centrer la carte sur Gabès

    // Ajouter les tuiles OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Liste des docteurs et cliniques
    const doctors = [
        { name: 'Hopital Régional de Gabés Mohamed Ben Sassi', lat: 33.8815, lon: 10.0982 },
        { name: 'Institut supérieur des sciences infirmiéres de Gabes', lat: 33.8920, lon: 10.0975 },
        { name: 'Clinic Mtorrech', lat: 33.8900, lon: 10.1000 },
        { name: 'Les Urgences - Hôpital de Gabès', lat: 33.8840, lon: 10.1020 },
        { name: 'Clinique Elmanara', lat: 33.8860, lon: 10.0940 },
        { name: 'المستشفى العسكري بقابس', lat: 33.8790, lon: 10.0950 }
    ];

    // Ajouter les marqueurs sur la carte
    doctors.forEach(doctor => {
        L.marker([doctor.lat, doctor.lon]).addTo(map)
            .bindPopup(`<b>${doctor.name}</b>`);
    });
}

// Initialise la carte après le chargement de la page
window.onload = initMap;
