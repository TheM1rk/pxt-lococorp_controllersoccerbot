pins.onPulsed(DigitalPin.P14, PulseValue.High, function () {
    serial.writeLine("oh the misery")
    radio.sendNumber(4)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
let XZero = false
let STOPX = false
let STOPY = false
let YZero = false
let grup = 40
let a = 0, team
let joystickY, joystickX, joystickYS, joystickXS;
radio.setGroup(grup)
let movimento: Array<number>
basic.showNumber(grup / 10)
// to check if there is a connection
// this is used to have a static number, after "1020"
// the value will result 1023.
basic.forever(function () {
    serial.writeLine("" + (pins.digitalReadPin(DigitalPin.P14)))
    if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        pins.digitalWritePin(DigitalPin.P14, 1)
    }
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
    radio.sendString("" + joystickX + " " + joystickY)
})
