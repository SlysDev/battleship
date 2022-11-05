let ship = (function () {
    let length;
    let isSunk = false;
    let sinkShip = function () {
        if (isSunk == true) {
            console.log("Ship has already been sunk.");
        }
        isSunk = true;
    };
    return { length, isSunk, sinkShip };
})();

export default ship;
