(function () {
    var dragged, listener;

    dragged = null;

    listener = document.addEventListener;

    listener("dragstart", (event) => {
        return dragged = event.target;
    });

    listener("dragend", (event) => {
        return
    });

    listener("dragover", function (event) {
        return event.preventDefault();
    });

    listener("drop", (event) => {
        event.preventDefault();
        if (event.target.className === "dropzone") {
            dragged.parentNode.removeChild(dragged);
            return event.target.appendChild(dragged);
        }
    });

}).call(this);