const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('bob', 03, 'bob.bob@mail.com', 502);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('bob', 03, 'bob.bob@mail.com');

    expect(manager.getRole()).toEqual('Manager');
});