import Tos from './src/to.js';

let tos_first =
    new Tos(
    false,
    'privet'
);

tos_first.setMessage("_new_message_");

let joinString =
    tos_first
        .newString('_now') // .newString('_now') === tos_first
        .getJoinString();

console.log(joinString);