const bcrypt = require('bcrypt');

const { User, userPreSaveHook } = require('../user');

// test equality
test('Testing user equality', () => {
  var user = new User({
    username: 'bigbob03', 
    password: 'beepers123',
    email: 'big.bob2@beepers.com', 
    gender: 'Male',
    birthday: '1971-05-06',
    height: 180, 
    weight: 230,
    firstname: 'Robert',
    lastname: 'Pataki'
  });

  expect(user).toEqual(
      expect.objectContaining({
        username: 'bigbob03', 
        password: 'beepers123',
        email: 'big.bob2@beepers.com', 
        gender: 'Male',
        birthday: '1971-05-06',
        firstname: 'Robert',
        lastname: 'Pataki',
        height: 180,
        weight: 230,
        _id: expect.any(Object)
      })
  );
});

describe('userPreSaveHook', () => {
  test('should execute next middleware when password is modified', async () => {
    const mNext = jest.fn();
    const mContext = {
      isModified: jest.fn()
    };
    mContext.isModified.mockReturnValueOnce(false);
    await userPreSaveHook.call(mContext, mNext);
    expect(mContext.isModified).toBeCalledWith('password');
    expect(mNext).toBeCalledTimes(1);
  });

  test('should hash password', async () => {
    const mNext = jest.fn();
    const mContext = {
      isModified: jest.fn(),
      password: '123456'
    };
    mContext.isModified.mockReturnValueOnce(true);
    await userPreSaveHook.call(mContext, mNext);
    expect(mContext.isModified).toBeCalledWith('password');
    expect(mNext).toBeCalledTimes(1);
    expect(mContext.password).not.toBe('123456'); // should have hashed
  });
});

describe('user login method tests', () => {
  test('confirm successful login', async () => {
    let thisPassword = 'beepers1234';
    const newUser = new User({
      username: 'biggerbob03', 
      password: await bcrypt.hash(thisPassword, 10),
      email: 'big.bob3@beepers.com', 
      gender: 'Other',
      birthday: '1971-07-06',
      height: 181, 
      weight: 232,
      firstname: 'Bobert',
      lastname: 'Hill'
    });

    // the .login method hashes the password to compare
    return expect(newUser.login(thisPassword)).resolves.toEqual(true);
  });

  test('confirm unsuccessful login', async () => {
    const newUser = new User({
      username: 'biggerbob03', 
      password: await bcrypt.hash('password1234', 10),
      email: 'big.bob3@beepers.com', 
      gender: 'Other',
      birthday: '1971-07-06',
      height: 181, 
      weight: 232,
      firstname: 'Bobert',
      lastname: 'Hill'
    });

    return expect(newUser.login('beeper1234')).rejects.toEqual(undefined);
  });
});
