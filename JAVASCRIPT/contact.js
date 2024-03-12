const scriptURL =
	"https://script.google.com/macros/s/AKfycbyPC8lpY8sijuHTb5DCZMi2eGXP3DotFe7ReJ2L3-ZNc-0ek9yEuJ9mwB9Qk2pJwhUJ/exec";
const form = document.forms["ContactForm"];
const normal = document.querySelector(".tbl-normal");
const loading = document.querySelector(".tbl-load");
const pesanTerkirimku = document.querySelector(".pesanku");

const inputName = document.querySelector(".inputname");
const inputEmail = document.querySelector(".inputEmail");
const inputPesan = document.querySelector(".inputPesan");

normal.disabled = true;

inputEmail.addEventListener("change", stateHandle);
inputName.addEventListener("change", stateHandle);
inputPesan.addEventListener("change", stateHandle);

function stateHandle() {
	if (inputEmail && inputName && inputPesan.value === "") {
		normal.disabled = true;
	} else normal.disabled = false;
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	normal.classList.toggle("d-none");
	loading.classList.toggle("d-none");
	fetch(scriptURL, { method: "POST", body: new FormData(form) })
		.then((response) => {
			normal.classList.toggle("d-none");
			loading.classList.toggle("d-none");
			pesanTerkirimku.classList.toggle("d-none");
			ContactForm.reset();
			console.log("Success!", response);
		})
		.catch((error) => console.error("Error!", error.message));
});
