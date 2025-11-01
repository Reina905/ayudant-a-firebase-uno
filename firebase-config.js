// Este archivo conecta tu HTML con Firebase
// Solo necesitas configurarlo UNA VEZ

// 1️⃣ Importar las funciones de Firebase desde CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

// 2️⃣ Tu configuración de Firebase (obtenida desde Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyCUs9pRlghjK1jB8knOf0ghzL50RFf6pOk",
    authDomain: "ayudantia-3c928.firebaseapp.com",
    projectId: "ayudantia-3c928",
    storageBucket: "ayudantia-3c928.firebasestorage.app",
    messagingSenderId: "789652681532",
    appId: "1:789652681532:web:cf08521a3e2404a3bf6439",
    measurementId: "G-721RMZMYMK"
};

// 3️⃣ Inicializar Firebase con tu configuración
const app = initializeApp(firebaseConfig);

// 4️⃣ Obtener servicios de Firebase
const analytics = getAnalytics(app); // Para estadísticas (opcional)
const db = getFirestore(app); // Para la base de datos Firestore

// 5️⃣ Exportar para usar en otros archivos JavaScript
export { app, analytics, db };
