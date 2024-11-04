const multipleEvents = (element, eventNames, listener) => {
  const events = eventNames.split(" ");

  events.forEach((event) => {
    element.addEventListener(event, listener, false);
  });
};

function attachFile(id) {
  const dropBox = document.getElementById(id);
  if (dropBox) {
    const inputUpload = dropBox.querySelector("[data-upload-file]");
    const fileList = dropBox.querySelector("[data-file-list]");
    const loadFile = dropBox.querySelector("[data-load-file]");
    // const emptyList = dropBox.querySelector("[data-empty-list]");
    let file;
    let files = inputUpload?.files;
    // checkEmptyList(files);
    // multipleEvents(inputUpload, "click dragstart dragover", () => {
    //   loadFile.parentNode.classList.add("active");
    // });
    // multipleEvents(inputUpload, "dragleave dragend drop change", () => {
    //   loadFile.parentNode.classList.remove("active");
    // });
    function uploadFile(event) {
      if (event.target.closest("[data-upload-file]")) {
        file = event.target.files[0];
        renderFile(file);
        dropBox.classList.add("active");
      }
    }
    function deleteFile(event) {
      // Проверяем если клик был НЕ по кнопке "удалить файл"
      if (event.target.dataset.action !== "delete") return;
      const parentNode = event.target.closest(".file-item");
      // Удаляем файл из разметки
      parentNode.remove();
      checkEmptyList(files);
      dropBox.classList.remove("active");
    }
    function checkEmptyList(files) {
      if (files.length === 0) {
        const emptyListHTML = `
						<label class="form-container">
                            <span class="drop-box__icon"></span>
                            <span class="drop-box__text">Перетащите файлы, вставьте или <span class="red">выберите</span></span>
							<input type="file" id="upload_file" class="form-file" data-upload-file>
						</label>
					`;
        // fileList.insertAdjacentHTML('afterbegin', emptyListHTML);
        fileList.innerHTML = emptyListHTML;
      }
      if (files.length > 0) {
        const emptyListEl = document.querySelector("#emptyList");
        emptyListEl ? emptyListEl.remove() : null;
      }
    }
    function renderFile(file) {
      // Формируем разметку для нового файла
      let fileItem = `<div class="file-item">
						<span class="file-item__text">${file.name}</span>
						<button class="file-item__button" type="button" data-action="delete"></button>
					</div>`;
      // Добавляем данные файла (file.name) на страницу
      fileList.innerHTML = fileItem;
      loadFile.remove();
    }
    fileList.addEventListener("click", deleteFile);
    dropBox.addEventListener("change", uploadFile);
  }
}

attachFile("drop-one");
attachFile("drop-two");
attachFile("drop-free");
