let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    let screen = document.getElementById('screen');
    let image = document.getElementById('image');

    let bool = false;

    // if Search Bar is empty
    if (screen.value === '') {
        alert("Enter any keyword to search");
    }

    // JSON - Javascript Object Notation
    const data = {
        "apple": "./image/apple.jpg",
        "orange": "./image/oranges.jpg",
        "tree": "./image/tree.jpg",
        "computer": "./image/computer.jpg",
        "dice": "./image/dice.jpg"
    }

    for (let x in data) {
        if (x === screen.value) {
            image.src = data[x];
            bool = true;
            break;
        }
    }

    // When image is not present
    if(bool === false) {
        alert("This image is not present");
    }

});