
class Options {
		constructor(height = "100px", width = "100px", bg = "blue", fontSize = "14px", textAlign = "center") {
			this.height = height;
			this.width = width;
			this.bg = bg;
			this.fontSize = fontSize;
			this.textAlign = textAlign;
		};
		createNewDiv() {
			let newDiv = document.createElement("div");
			document.body.appendChild(newDiv);
			newDiv.textContent = "Текст";
			newDiv.style.height = this.height;
			newDiv.style.width = this.width;
			newDiv.style.backgroundColor = this.bg;
			newDiv.style.fontSize = this.fontSize;
			newDiv.style.textAlign = this.textAlign;
		}
};

const newElement = new Options();
newElement.createNewDiv();

