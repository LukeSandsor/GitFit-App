const goalModel = require("../goals");
const goalServices = require('../goals-services');
const sinon = require('sinon');

test('Test GoalList Equality', () => {
    var goal = new goalModel.GoalList({
        goal: 'Weight gain',
        calorie_multiplier: 1.2
    });

    expect(goal).toEqual(
        expect.objectContaining({
            goal: 'Weight gain',
            calorie_multiplier: 1.2
        })
    )
})

test('Test GoalList Equality (goal not equal)', () => {
    var goal = new goalModel.GoalList({
        goal: 'Weight gain',
        calorie_multiplier: 1.2
    });

    expect(goal).not.toEqual(
        expect.objectContaining({
            goal: 'Weight loss',
            calorie_multiplier: 1.2
        })
    )
})

test('Test GoalList Equality (calorie_multiplier not equal)', () => {
    var goal = new goalModel.GoalList({
        goal: 'Weight gain',
        calorie_multiplier: 1.2
    });

    expect(goal).not.toEqual(
        expect.objectContaining({
            goal: 'Weight gain',
            calorie_multiplier: 1.4
        })
    );
});

test('Test getGoalList', async () => {
    let goal = new goalModel.GoalList({
        goal: 'Maintain',
        calorie_multiplier: 1
    });

    sinon.stub(goalModel.GoalList, 'find').returns([goal, goal, goal])

    await goalServices.getGoalList().then((res) => {
        expect(res).toStrictEqual([goal, goal, goal]);
    });
});