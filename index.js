const { sample } = require('lodash')
const Alice = require('yandex-dialogs-sdk')
const alice = new Alice()

const users = []
let fails = 0
const { sample } = require('lodash')
const Alice = require('yandex-dialogs-sdk')
const alice = new Alice()

const user = [];

alice.command('', ctx => {
    if (!user.includes(ctx.userId)) {
        fail = 0
        user.push(ctx.userId)

        ctx.reply(`Добро пожаловать! Здесь собираются идеи для самых веселых, полезных и классных навыков, которые вы хотели бы видеть в Алисе. Рассказывайте, я вся внимание.`)
        return
    }

    ctx.reply(`Ой, у вас уже появились новые идеи навыков? Ура! Ура!`);
})

alice.command(/навык/i, ctx => {
    fail = 0

    ctx.reply(`${sample(['Принимается!', 'Спасибо!'])} Идея интересная, ${sample(['я запомню', 'занесли в нашу базу'])}. Если есть еще идеи — ${sample(['я вас внимательно слушаю', 'рассказывайте'])}.`);
})

let fail = 0;

alice.any(ctx => {
    fail += 1;

    if (fail === 1) {
        return ctx.reply(`Нет, так не годится. Используйте в описании слово «навык» и опишите его хотя бы одной фразой из ста символов.`)
    }

    if (fail === 2) {
        return ctx.reply(
            ctx.replyBuilder
                .text(`Эх, не могу найти с вами общий язык... Давайте тогда вместе поштырим в навыки!`)
                .addButton(
                    ctx.buttonBuilder
                        .text('Каталог навыков')
                        .url('https://dialogs.yandex.ru/store')
                        .get()
                )
                .get()
        );
    }

    return ctx.reply(`...`);
})

alice.listen('/', 3000)

alice.command('', ctx => {
    fails = 0

    if (users.includes(ctx.userId)) {
        return ctx.reply('Рады видеть вас снова!')
    }

    users.push(ctx.userId)

    ctx.reply(`Добро пожаловать! Здесь собираются идеи для самых веселых, полезных и классных навыков, которые вы хотели бы видеть в Алисе. Рассказывайте, я вся внимание.`)
})

alice.command(/навык/, ctx => {
    fails = 0

    ctx.reply(`${sample(['Принимается!', 'Спасибо!'])} Идея интересная, ${sample(['я запомню', 'занесли в нашу базу'])}. Если есть еще идеи — ${sample(['я вас внимательно слушаю', 'рассказывайте'])}.`)
})

alice.any(ctx => {
    fails += 1

    if (fails === 1) {
        return ctx.reply(`Нет, так не годится. Используйте в описании слово «навык» и опишите его хотя бы одной фразой из ста символов.`)
    }

    if (fails === 2) {
        return ctx.reply(
            ctx.replyBuilder
                .text(`Жаль, что мы друг друга не поняли. Посмотрите пока на эти навыки!`)
                .addButton(
                    ctx.buttonBuilder
                        .text('Каталог навыков')
                        .url('https://dialogs.yandex.ru/store')
                        .get()
                )
                .get()
        )
    }

    ctx.reply('...')
})

alice.listen('/', 3000)
