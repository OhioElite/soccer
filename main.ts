input.onButtonPressed(Button.A, function () {
    basic.showString("a")
    basic.pause(1000)
    PA += 1
    Rounds += 1
    show_scoreboard()
})
function show_scoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("player A:" + PA)
    OLED.newLine()
    OLED.writeStringNewLine("player B:" + PB)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + Rounds)
}
input.onButtonPressed(Button.AB, function () {
    basic.showString("t")
    basic.pause(1000)
    Ties += 1
    Rounds += 1
    show_scoreboard()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("b")
    basic.pause(1000)
    PB += 1
    Rounds += 1
    show_scoreboard()
})
input.onGesture(Gesture.Shake, function () {
    Reset()
})
function Reset () {
    OLED.init(128, 64)
    PA = 0
    PB = 0
    Ties = 0
    Rounds = 0
    OLED.writeStringNewLine("shall we play a game")
    basic.pause(2000)
    show_scoreboard()
}
let Ties = 0
let PB = 0
let Rounds = 0
let PA = 0
Reset()
