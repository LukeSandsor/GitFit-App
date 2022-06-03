const nutritionModels = require('../nutrition');
const nutritionServices = require('../nutrition-services');
const sinon = require('sinon');
const nutrition = require('../nutrition');
const { update } = require('../../health_advice/advice');

test('Test Nutrition Table Entry Equality', () => {
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

test('Test Nutrition Table Equality (Not Equal)', () => {
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

test('Test User Nutrition Equality', () => {
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


test('Test User Nutrition Equality (Username not equal)', () => {
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

test('Test User Nutrition Equality (nutritionStats not equal)', () => {
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

test('Test getFoodList', async () => {
    let foodEntry = new nutritionModels.NutritionTable({
        food: 'food',
        average_portion: 150,
        calories: 150,
        protein: 150,
        fats: 150,
        carbs: 150
    })

    sinon.stub(nutritionModels.NutritionTable, 'find').returns([foodEntry, foodEntry, foodEntry]);

    await nutritionServices.getFoodList().then((res) => {
        expect(res).toStrictEqual([foodEntry, foodEntry, foodEntry])
    });
});

test('Test getUserNutrition', async () => {
    let user = new nutritionModels.UserNutrition({
        username: 'user2',
        nutritionStats: []
    });

    sinon.stub(nutritionModels.UserNutrition, 'findOne').withArgs({username: 'user2'}).returns(user);

    await nutritionServices.getUserNutrtition('user2').then((res) => {
        expect(res).toStrictEqual(user);
    });
});

test('Test createUserNutrition', async () => {
    sinon.stub(nutritionModels.UserNutrition, 'insertMany').withArgs({
        'username': 'testuser',
        'nutritionStats': []
    }).returns({
        acknowledged: true,
        insertedIds: {
            '0': '13924893798375y4'
        }
    })

    await nutritionServices.createUserNutrition('testuser').then((res) => {
        expect(res.acknowledged).toEqual(true);
    });
});

test('Test updateUserNutrition', async () => {
    const updatedUser = {
        username: "testuser13",
        nutritionStats: [
            {
                day: 30,
                month: 1,
                year: 2022,
                calories: 100,
                protein: 5,
                carbs: 0,
                fats: 0
            }
        ]
    };

    sinon.stub(nutritionModels.UserNutrition, 'updateOne').withArgs(
        { username: updatedUser.username },
        { $set: { nutritionStats: updatedUser.nutritionStats}}).returns({
            acknowledged: true,
            insertedId: null,
            matchedCount: 1,
            modifiedCount: 1,
            upsertedCount: 0
        })

    await nutritionServices.updateUserNutrition(updatedUser).then((res) => {
        expect(res).toEqual({
            acknowledged: true,
            insertedId: null,
            matchedCount: 1,
            modifiedCount: 1,
            upsertedCount: 0
        });
    });
});