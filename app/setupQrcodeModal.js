function setupQrcodeModal() {
	const modal = document.getElementById("modal");
	const exits = modal.querySelectorAll(".modal-exit");
	exits.forEach(function (exit) {
		exit.addEventListener("click", function (event) {
			event.preventDefault();
			modal.classList.remove("open");
		});
	});
}
setupQrcodeModal();