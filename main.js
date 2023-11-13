class MenuButton {
    constructor(canvas, canvasOffset, menu) {
        this.canvasOffset = canvasOffset;
        this.menu = menu;
        this.width = 100;
        this.height = 25;
        this.x = 5;
        this.y = (canvas.height - this.height) - 5;
        this.backgroundColor = "#000000";
        this.textColor = "#ffffff";
        this.textFont = "sans-serif"
        this.textSize = 16;
        this.textOffsetX = 28;
        this.textOffsetY = 2;
        this.text = "Menu";
    }

    detectClick() {
        window.onclick = (e) => {
            if (
                e.clientX >= this.x + this.canvasOffset && 
                e.clientX <= (this.x + this.width) + this.canvasOffset &&
                e.clientY >= this.y + this.canvasOffset &&
                e.clientY <= (this.y + this.height) + this.canvasOffset
            ) {
                menu.show = !menu.show;
            }
        }
    }

    draw(context) {
        context.fillStyle = this.backgroundColor;
        context.fillRect(this.x, this.y, this.width, this.height);

        context.font = this.textSize + "px " + this.textFont;
        context.fillStyle = this.textColor;
        context.fillText(this.text, this.x + this.textOffsetX, (this.y + this.textSize) + this.textOffsetY);
    }
}

class Menu {
    constructor() {
        this.width = 300;
        this.height = 250;
        this.x = 100;
        this.y = 100;
        this.color = "rgb(160, 160, 160)";
        this.show = false;
        this.text = "*Nothing*";
        this.textFont = "sans-serif";
        this.textSize = 48;
        this.textColor = "#000000";
        this.textOffsetX = 45;
        this.textOffsetY = 95;
    }

    draw(context) {
        if (this.show) {
            context.fillStyle = this.color;
            context.fillRect(this.x, this.y, this.width, this.height);

            context.font = this.textSize + "px " + this.textFont;
            context.fillStyle = this.textColor;
            context.fillText(this.text, this.x + this.textOffsetX, (this.y + this.textSize) + this.textOffsetY);
        }
    }
}

let canvasOffset = 15;
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let menu = new Menu();
let menuButton = new MenuButton(canvas, canvasOffset, menu);

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    menuButton.detectClick();
    menuButton.draw(context);
    menu.draw(context);

    requestAnimationFrame(animate);
}

animate();