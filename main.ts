let x = 0
let bright = 255
basic.forever(function () {
    if (bright <= -200) {
        bright = 255
        music.play(music.stringPlayable("C5 - G E B - G - ", 120), music.PlaybackMode.UntilDone)
        basic.clearScreen()
    }
    if (x == 0) {
        led.setBrightness(bright)
        basic.showLeds(`
            . # . # .
            # . # . #
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.pause(10)
        x = 1
        bright = bright - 50
    } else {
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(10)
        x = 0
    }
})
