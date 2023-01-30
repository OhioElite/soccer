function show_scoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("player A:" + PA)
    OLED.newLine()
    OLED.writeStringNewLine("player A:" + PB)
    OLED.newLine()
    OLED.writeStringNewLine("player A:" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("player A:" + Rounds)
}
let Rounds = 0
let Ties = 0
let PB = 0
let PA = 0
OLED.init(128, 64)
PA = 0
PB = 0
Ties = 0
Rounds = 0
OLED.writeStringNewLine("shall we play a game")
basic.pause(2000)
show_scoreboard()
