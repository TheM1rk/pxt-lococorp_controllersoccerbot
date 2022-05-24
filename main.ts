input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
let joystickY, joystickX, joystickYS, joystickXS,XZero:boolean = false,YZero:boolean = false,STOP:boolean = false;
radio.setGroup(1)
// to check if there is a connection
basic.forever(function () 
{
    joystickY = pins.analogReadPin(AnalogPin.P2) //read y
    joystickX = pins.analogReadPin(AnalogPin.P1) // read X

    if (joystickX >= 500 && joystickX <= 512) {
        XZero = true
    } else {
        XZero = false
    }
    // in case the joystic is in the middle the XZERO becomes true
    // thus not doing anything
    if (joystickY >= 500 && joystickY <= 510) {
        YZero = true
    } else {
        YZero = false
    }

    if (joystickX >= 1018) {
        joystickX = 1023
    }
    if (joystickY >= 1018) {
        joystickY = 1023
    }
    // this is used to have a static number, after "1018"
    // the value will result 1023.

    if (!(YZero)) {
        radio.sendValue("movimentoY", joystickY)
    }
    if (!(XZero)) {
        radio.sendValue("movimentoX", joystickX)
    }
    
    if (XZero && YZero) {
        STOP = true
    } else {
        STOP = false
    }

    if (STOP) {
        radio.sendString("STOP")
        STOP = false //to reset the values in the soccer bot
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
