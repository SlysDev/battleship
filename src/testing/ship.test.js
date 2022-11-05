import ship from "../modules/ship.js";
it("Test if the ship sinks", () => {
    ship.sinkShip();
    expect(ship.isSunk).toBe(true);
});
