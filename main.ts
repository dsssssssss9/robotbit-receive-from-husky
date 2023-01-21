radio.onReceivedNumber(function (receivedNumber) {
    Command = receivedNumber
    if (Command == 0) {
        robotbit.MotorStopAll()
    } else if (Command == 1) {
        AllFwd()
    } else if (Command == 2) {
        Servo()
    } else if (Command == 3) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(1000)
        strip.clear()
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    AllFwd()
})
function AllFwd () {
    robotbit.MotorRun(robotbit.Motors.M1A, 100)
    robotbit.MotorRun(robotbit.Motors.M2A, 100)
    basic.pause(2000)
    robotbit.MotorStopAll()
}
function Servo () {
    robotbit.Servo(robotbit.Servos.S1, 90)
    basic.pause(1000)
    robotbit.Servo(robotbit.Servos.S1, 180)
    basic.pause(2000)
    robotbit.Servo(robotbit.Servos.S1, 0)
}
input.onButtonPressed(Button.B, function () {
    Servo()
})
let strip: neopixel.Strip = null
let Command = 0
radio.setGroup(1)
Command = 0
basic.showIcon(IconNames.Happy)
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.setBrightness(8)
strip.showColor(neopixel.colors(NeoPixelColors.Green))
robotbit.MotorStopAll()
basic.forever(function () {
	
})
