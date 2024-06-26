// Funções necessárias para inicializar 
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// Configurações do banco de dados Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBPwfnx9zFECxSvau9WThOgqDGrhny3YPI",
  authDomain: "cadastro-de-ongs-c37e9.firebaseapp.com",
  projectId: "cadastro-de-ongs-c37e9",
  storageBucket: "cadastro-de-ongs-c37e9.appspot.com",
  messagingSenderId: "245151527343",
  appId: "1:245151527343:web:02b0e57fd397585e457f5a"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

// Envio de formulário
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('form');

  form.addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const formData = new FormData(form);

    const nomeONG = formData.get('nomeONG');
    const email = formData.get('email');
    const logomarcaFile = formData.get('logomarca');
    const horarioFuncionamento = formData.get('horarioFuncionamento');
    const categoria = formData.get('categoria');
    const pixDoacoes = formData.get('pixDoacoes');
    const contatosRedesSociais = formData.get('contatosRedesSociais');
    const oQueDoar = formData.get('oQueDoar');
    const sobreONG = formData.get('sobreONG');

    try {
      // Upload da logomarca
      const logomarcaRef = ref(storage, 'logomarcas/' + logomarcaFile.name);
      await uploadBytes(logomarcaRef, logomarcaFile);
      const logomarcaURL = await getDownloadURL(logomarcaRef);

      // Salvar dados no Firestore
      await addDoc(collection(db, 'ongs'), {
        nome: nomeONG,
        email: email,
        logomarca: logomarcaURL,
        horario: horarioFuncionamento,
        categoria: categoria,
        pix: pixDoacoes,
        contatos: contatosRedesSociais,
        doacao: oQueDoar,
        sobre: sobreONG
      });

      alert('Dados enviados com sucesso!');
      form.reset();
    } catch (error) {
      console.error("Erro ao enviar os dados: ", error);
      alert('Erro ao enviar os dados. Tente novamente.');
    }
  });
});
