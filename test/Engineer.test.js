const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('bob', 02, 'bob.bob@mail.com','bob.bob');

    expect(engineer.github) .toEqual(expect.any(string));
});

test('gets engineer github value', () => {
    const engineer = new Engineer('bob', 02, 'bob.bob@mail.com', 'bob.bob');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const engineer = new Engineer('bob', 02, 'bob.bob@mail.com', 'bob.bob');

    expect(engineer.getRole()).toEqual('Engineer');
});