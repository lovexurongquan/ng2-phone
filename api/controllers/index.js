const Pet = require('../data/model/pet');

var fn_index = async(ctx, next) => {

    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
};

var fn_signin = async(ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
};
var fn_add = async(ctx, next) => {

    var now = Date.now();

    (async() => {
        var dog = await Pet.create({
            id: 'd-' + now,
            name: 'Gaffey',
            gender: false,
            birth: '2008-08-08',
            createdAt: now,
            updatedAt: now,
            version: 0
        });
        console.log('created: ' + JSON.stringify(dog));
    })();
};
var fn_list = async(ctx, next) => {

    (async() => {
        var pets = await Pet.findAll({
            where: {}
        });
        console.log(`find ${pets.length} pets:`);

        console.log(JSON.stringify(pets));

        ctx.response.body = JSON.stringify(pets);
    })();
};

module.exports = {
    'GET /': fn_index,
    'POST /signin': fn_signin,
    'GET /add': fn_add,
    'GET /list': fn_list,
};