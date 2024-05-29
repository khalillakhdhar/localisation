function initMap() {
    // Initialiser la carte
    const map = L.map('map').setView([33.8815, 10.0982], 14); // Centrer la carte sur Gabès avec un zoom plus élevé

    // Ajouter les tuiles OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Icône personnalisée pour la position de l'utilisateur
    const userIcon = L.icon({
        iconUrl: 'https://example.com/path/to/user-icon.png', // Remplacez par le chemin de votre icône personnalisée
        iconSize: [32, 32], // Taille de l'icône
        iconAnchor: [16, 32], // Point de l'icône correspondant à la position de la carte
        popupAnchor: [0, -32] // Point où le popup doit s'ouvrir par rapport à l'icône
    });

    // Icône par défaut pour les docteurs
    const doctorIcon = L.icon({
        iconUrl: 'https://example.com/path/to/doctor-icon.png', // Remplacez par le chemin de votre icône de docteur
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    // Obtenir la position actuelle de l'utilisateur
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const userLocation = [position.coords.latitude, position.coords.longitude];
            map.setView(userLocation, 14);

            // Marquer la position de l'utilisateur sur la carte
            L.marker(userLocation, { icon: userIcon }).addTo(map)
                .bindPopup('Vous êtes ici')
                .openPopup();

            // Liste des docteurs et cliniques, y compris les cabinets privés
            const doctors = [
                { name: 'Hopital Régional de Gabés Mohamed Ben Sassi', lat: 33.8815, lon: 10.0982 },
                { name: 'Institut supérieur des sciences infirmiéres de Gabes', lat: 33.8920, lon: 10.0975 },
                { name: 'Clinic Mtorrech', lat: 33.8900, lon: 10.1000 },
                { name: 'Les Urgences - Hôpital de Gabès', lat: 33.8840, lon: 10.1020 },
                { name: 'Clinique Elmanara', lat: 33.8860, lon: 10.0940 },
                { name: 'المستشفى العسكري بقابس', lat: 33.8790, lon: 10.0950 },
                { name: 'Cabinet Dr. Ali', lat: 33.8830, lon: 10.0930 }, // Exemple de cabinet privé
                { name: 'Cabinet Dr. Fatima', lat: 33.8850, lon: 10.0960 } // Exemple de cabinet privé
            ];

            // Ajouter les marqueurs sur la carte
            doctors.forEach(doctor => {
                L.marker([doctor.lat, doctor.lon], { icon: doctorIcon }).addTo(map)
                    .bindPopup(`<b>${doctor.name}</b>`);
            });
        }, () => {
            alert('La géolocalisation a échoué.');
        });
    } else {
        alert('Votre navigateur ne supporte pas la géolocalisation.');
    }
}

// Initialise la carte après le chargement de la page
window.onload = initMap;
