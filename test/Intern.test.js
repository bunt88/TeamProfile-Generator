const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('bob', 03, 'bob.bob@mail.com', 'UofU');

    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('bob', 03, 'bob.bob@mail.com', 'UofU');

    expect(intern.getSchool()).toEqual(expect.stringContainting(intern.school.toString()));

});

test('gets role of employee', () => {
    const intern = new Intern('bob', 03, 'bob.bob@mail.com', 'UofU');

    expect(intern.getRole()).toEqual('Intern');
});