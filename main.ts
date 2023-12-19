enum RadioMessage {
    message1 = 49434,
    Sike = 10816
}
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(2)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(4)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(3)
})
radio.setGroup(1)
basic.showLeds(`
    . . # . .
    # # # # #
    # . # . #
    . # # . .
    # # . # #
    `)
