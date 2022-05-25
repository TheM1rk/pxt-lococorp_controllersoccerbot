input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
let STOPX = false
let STOPY = false
let YZero = false
let XZero = false
let joystickY, joystickX, joystickYS, joystickXS;
radio.setGroup(111)
// to check if there is a connection
basic.forever(function () {
    // read y
    joystickY = pins.analogReadPin(AnalogPin.P2)
    // read X
    joystickX = pins.analogReadPin(AnalogPin.P1)
    if (joystickX >= 490 && joystickX <= 620) {
        // its in the center of the joystick. so no input
        XZero = true
    } else {
        XZero = false
    }
    // in case the joystic is in the middle the XZERO becomes true
    // thus not doing anything
    if (joystickY >= 490 && joystickY <= 620) {
        // is in the center of the joystick, so no input
        YZero = true
    } else {
        YZero = false
    }
    if (joystickX >= 1012) {
        joystickX = 1023
    }
    if (joystickY >= 1012) {
        joystickY = 1023
    }
    // this is used to have a static number, after "1020"
    // the value will result 1023.
    if (!(YZero)) {
        radio.sendValue("m-Y", joystickY)
    } else {
        STOPY = true
    }
    if (!(XZero)) {
        radio.sendValue("m-X", joystickX)
    } else {
        STOPX = true
    }
    // to reset the x value
    if (STOPX) {
        radio.sendString("STOPX")
    }
    // to stop the y value
    if (STOPY) {
        radio.sendString("STOPY")
    }
})
