// Importando as funções necessárias do SDK do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDfVxyUIzWRkhiCP0D5DKGLom4gjUaykcQ",
  authDomain: "frases-bye.firebaseapp.com",
  projectId: "frases-bye",
  storageBucket: "frases-bye.firebasestorage.app",
  messagingSenderId: "672596242053",
  appId: "1:672596242053:web:bd55d2dad4399a908103ec",
  measurementId: "G-8R7HBNMTBB"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app); // Obtém a instância do banco de dados Firebase

// Função que busca a mensagem
window.buscarMensagem = function() {
  const chave = document.getElementById("chave").value; // Obtém a chave digitada no campo de input

  if (!chave) {
    document.getElementById("mensagem").innerText = "Por favor, insira uma chave válida.";
    return; // Impede que a busca seja feita
  }
  const dbRef = ref(db, chave); // Cria uma referência para a chave no banco de dados

  get(dbRef).then((snapshot) => {
    if (snapshot.exists()) {
      // Se a chave existir no banco de dados, exibe o valor
      document.getElementById("mensagem").innerText = snapshot.val();
    } else {
      // Caso a chave não exista
      document.getElementById("mensagem").innerText = "Chave não encontrada.";
    }
  }).catch((error) => {
    console.error("Erro ao buscar a mensagem:", error);
  });
}
