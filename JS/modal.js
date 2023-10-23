
       //modais 
       const getElement = (...queries) => document.querySelector(...queries);
       //button
       const button = getElement('.open-modal-button');
       //container
       const container = getElement('.modal-container');
       //modal
       const modal = getElement('.modal');
       
       //guardando uma variavel
       const activeModalClass = 'modal-show';
       
       //Funçoes
       
       //funçao open-modal
       const openModal = () => container.classList.add (activeModalClass);
       
       //funçao close-modal
       const closeModal = () => container.classList.remove (activeModalClass);
       
       //adicionando um evento no butao
       button.addEventListener('click', openModal );
       container.addEventListener('click', (event) => {
          if(modal.contains(event.target)) return;
          closeModal();
       });