function changeMode() {
	const html = document.documentElement;
	const img = document.querySelector("img");
	html.classList.toggle("light");
	
	if (html.classList.contains("light")) {
		img.setAttribute("src", "./assets/avatar-light.png");
		img.setAttribute("alt", "imagem do perfil light");
	} else {
		img.setAttribute("src", "./assets/avatar.png");
		img.setAttribute("alt", "imagem do perfil dark");
	}
	
}