const weightsModels = require("../weights_history")

test("Test Workout Schema Entry Equality", () => {
    var entry = new weightsModels.UserWorkout({
        username: "bob123",
        workouts: [
            {
                name: 'Bench'
                
            }
        ]
    });

    expect(entry).toEqual(
        expect.objectContaining({
            username: "bob123",
            workouts: [
            {
                name: 'Bench'
            }
            ],
            _id: expect.any(Object)
        })
    );
});