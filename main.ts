let JY, JX, JYF, JXF,XZ:boolean,YZ:boolean;
radio.setGroup(1)
basic.forever(function () {
    // boolean used in case the x axis is 0
    XZ = false
    // same thing for axis y
    YZ = false
    // read Y
    JY = pins.analogReadPin(AnalogPin.P2)
    // read X
    JX = pins.analogReadPin(AnalogPin.P1)
    // JX or JY stands for "joystic X/Y"
    if (JX >= 500 && JX <= 512) {
        XZ = true
    }
    // in case the joystic is in the middle the XZ(X-ZERO) becomes true
    // thus not doing anything
    if (JY >= 500 && JY <= 510) {
        YZ = true
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
        radio.sendValue("movimentoX", JX)
    }
    if (!(XZ)) {
        radio.sendValue("movimentoY", JY)
    }
})