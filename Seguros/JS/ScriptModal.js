document.addEventListener("DOMContentLoaded", function() {
    const contactoBtn = document.getElementById("contactoBtn");
  
    contactoBtn.addEventListener("click", function() {
      showAlertModal();
    });
  
    function showAlertModal() {
      const modalContent = `
        <div class="modal-container">
          <div class="modal-content">
            <h2>Contacto</h2>
            <p>Comunícate con nosotros a los siguientes números de teléfono:</p>
            <ul>
              <li>Teléfono 1: +1 123 456 7890</li>
              <li>Teléfono 2: +1 987 654 3210</li>
              <!-- Puedes agregar más números de teléfono si es necesario -->
            </ul>
            <button type="button" class="modal-close-btn" onclick="closeAlertModal()">Cerrar</button>
          </div>
        </div>
      `;
  
      const modalContainer = document.createElement("div");
      modalContainer.innerHTML = modalContent;
      document.body.appendChild(modalContainer);
  
      document.querySelector(".modal-close-btn").addEventListener("click", function() {
        closeModal();
      });
    }
  
    function closeModal() {
      const modalContainer = document.querySelector(".modal-container");
      document.body.removeChild(modalContainer);
    }
  });