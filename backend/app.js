'use strict';

const Koa = require('koa');
const mongoose = require('mongoose');

const app = new Koa();
mongoose.connect('mongodb://localhost:27017');

const db = mongoose.connection;

let reqponseUser = '';
db.once('open', function() {
    const userSchema = mongoose.Schema({
        name: String,
        status: String,
    });

    const User = mongoose.model('User', userSchema);
    const admin = new User({ name: 'Marina', status: 'admin' });

    admin.save((err, admin) => {});

    User.find((err, users) => {
        users.forEach(user => {
            if (user.status && user.status === 'admin') {
                reqponseUser = user.name;
            }
        });
    });
});

app.use(async ctx => {
    ctx.status = 200;
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', '*');

    ctx.body = { reqponseUser };

    console.log(ctx.request);
});

app.listen(8000);
