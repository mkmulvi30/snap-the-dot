input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.removeLife(1)
    }
})
let sprite: game.LedSprite = null
game.setLife(3)
sprite = game.createSprite(2, 2)
basic.forever(function () {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    basic.pause(200)
})
