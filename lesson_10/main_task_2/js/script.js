
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
			newDiv.style.cssText = `height: ${this.height}; 
															width: ${this.width}; 
															background-color: ${this.bg}; 
															font-size: ${this.fontSize}; 
															text-align: ${this.textAlign};`

		}
};

const newElement = new Options();
newElement.createNewDiv();

