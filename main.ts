input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
let YZero = false
let STOPY = false
let STOPX = false
let XZero = false
let a = 0, team, group
let joystickY, joystickX, joystickYS, joystickXS;
radio.setGroup(111)
let movimento:Array<number>
// to check if there is a connection
// this is used to have a static number, after "1020"
// the value will result 1023.
basic.forever(function () {
    // read y
    joystickY = pins.analogReadPin(AnalogPin.P2)
    // read X
    joystickX = pins.analogReadPin(AnalogPin.P1)
    if (joystickX >= 490 && joystickX <= 530) {
        // its in the center of the joystick. so no input
        joystickX = 500
    }
    // in case the joystic is in the middle the XZERO becomes true
    // thus not doing anything
    if (joystickY >= 490 && joystickY <= 530) {
        // is in the center of the joystick, so no input
        joystickY = 500
    }
})
