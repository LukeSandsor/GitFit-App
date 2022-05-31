const nutritionModels = require("../nutrition");

test("Test Nutrition Table Entry Equality", () => {
    var entry = new nutritionModels.NutritionTable({
        food: 'Chicken and rice',
        average_portion: 150,
        calories: 500,
        protein: 50,
        fats: 1.7,
        carbs: 120
    });

    expect(entry).toEqual(
        expect.objectContaining({
            food: 'Chicken and rice',
            average_portion: 150,
            calories: 500,
            protein: 50,
            fats: 1.7,
            carbs: 120,
            _id: expect.any(Object)
        })
    );
});

test("Test Nutrition Table Equality (Not Equal)", () => {
    var entry = new nutritionModels.NutritionTable({
        food: 'Chicken and rice',
        average_portion: 150,
        calories: 500,
        protein: 50,
        fats: 1.7,
        carbs: 120
    });

    expect(entry).not.toEqual(
        expect.objectContaining({
            food: 'Steak and eggs',
            average_portion: 150,
            calories: 800,
            protein: 60,
            fats: 30,
            carbs: 50,
            _id: expect.any(Object)
        })
    );
});

test("Test User Nutrition Equality", () => {
    var entry = new nutritionModels.UserNutrition({
        username: 'gitfituser900',
        nutritionStats: []
    });

    expect(entry).toEqual(
        expect.objectContaining({
            username: 'gitfituser900',
            nutritionStats: [],
            _id: expect.any(Object)
        })
    );
});


test("Test User Nutrition Equality (Username not equal)", () => {
    var entry = new nutritionModels.UserNutrition({
        username: 'gitfituser9001',
        nutritionStats: []
    });

    expect(entry).not.toEqual(
        expect.objectContaining({
            username: 'gitfituser900',
            nutritionStats: [],
            _id: expect.any(Object)
        })
    );
});

test("Test User Nutrition Equality (nutritionStats not equal)", () => {
    var entry = new nutritionModels.UserNutrition({
        username: 'gitfituser9001',
        nutritionStats: []
    });

    expect(entry).not.toEqual(
        expect.objectContaining({
            username: 'gitfituser9001',
            nutritionStats: [{
                day: 30,
                month: 4,
                year: 2022,
                calories: 0,
                protein: 0,
                carbs: 0,
                fats: 0
            }],
            _id: expect.any(Object)
        })
    );
});