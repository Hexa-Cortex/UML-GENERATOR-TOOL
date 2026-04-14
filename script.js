function encodePlantUML(text) {
    return btoa(unescape(encodeURIComponent(text)));
}

function generateDiagram() {
    let uml = document.getElementById("umlInput").value;

    let encoded = encodePlantUML(uml);

    let url = "https://www.plantuml.com/plantuml/png/" + encoded;

    document.getElementById("diagram").src = url;
}
