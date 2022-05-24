input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
let JY, JX, JYF, JXF,XZ:boolean,YZ:boolean,STOP:boolean;
radio.setGroup(1)
// to check if there is a connection
basic.forever(function () {
    // boolean used in case the x axis is 0
    XZ = false
    // same thing for axis y
    YZ = false
    // read Y
    STOP = false
    // stop is used when no input is send, it prevents from
    // spamming packages
    JY = pins.analogReadPin(AnalogPin.P2)
    // read X
    JX = pins.analogReadPin(AnalogPin.P1)
    // JX or JY stands for "joystic X/Y"
    if (JX >= 500 && JX <= 512) {
        XZ = true
    } else {
        XZ = false
    }
    // in case the joystic is in the middle the XZ(X-ZERO) becomes true
    // thus not doing anything
    if (JY >= 500 && JY <= 510) {
        YZ = true
    } else {
        YZ = false
    }
    if (JX >= 1018) {
        JX = 1023
    }
    if (JY >= 1018) {
        JY = 1023
    }
    // this is used to have a static number, after "1018"
    // the value will result 1023.
    if (!(YZ)) {
        radio.sendValue("movimentoY", JY)
    }
    if (!(XZ)) {
        radio.sendValue("movimentoX", JX)
    }
    
    if (XZ && YZ) {
        STOP = true
    } else {
        STOP = false
    }
    if (STOP) {
        radio.sendString("STOP")
        STOP = false
    }
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) == 0) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
