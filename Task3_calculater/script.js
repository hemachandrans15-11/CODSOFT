const screen = document.getElementById("screen");
const keys = document.getElementById("keys");

let expression = "";

keys.addEventListener("click", function(e) {
    if (e.target.tagName !== "BUTTON") return;

    const value = e.target.getAttribute("data-value");
    const type = e.target.getAttribute("data-type");

    if (value) {
        if (screen.textContent === "0") {
            expression = value;
        } else {
            expression += value;
        }
        screen.textContent = expression;
    }

    if (type === "clear") {
        expression = "";
        screen.textContent = "0";
    }

    if (type === "back") {
        expression = expression.slice(0, -1);
        screen.textContent = expression || "0";
    }

    if (type === "equal") {
        try {
            let result = Function("return " + expression)();
            screen.textContent = result;
            expression = result.toString();
        } catch {
            screen.textContent = "Invalid";
            expression = "";
        }
    }
});
