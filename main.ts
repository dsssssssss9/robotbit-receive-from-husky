input.onButtonPressed(Button.B, function () {
    RightRot()
})
function RightRot () {
    robotbit.MotorRun(robotbit.Motors.M1A, -75)
    robotbit.MotorRun(robotbit.Motors.M2A, 75)
    basic.pause(1000)
    robotbit.MotorStopAll()
}
function Lights () {
    for (let index = 0; index < 4; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(500)
        strip.clear()
        strip.show()
        basic.pause(1000)
    }
}
radio.onReceivedNumber(function (receivedNumber) {
    Command = receivedNumber
    if (Command == 0) {
        robotbit.MotorStopAll()
    } else if (Command == 1) {
        AllFwd()
    } else if (Command == 2) {
        AllBck()
    } else if (Command == 3) {
        LeftRot()
    } else if (Command == 4) {
        RightRot()
    } else if (Command == 5) {
        Servo()
    } else if (Command == 6) {
        Lights()
    }
})
input.onButtonPressed(Button.A, function () {
    AllFwd()
})
function AllFwd () {
    robotbit.MotorRun(robotbit.Motors.M1A, 100)
    robotbit.MotorRun(robotbit.Motors.M2A, 100)
    basic.pause(1000)
    robotbit.MotorStopAll()
}
function Servo () {
    robotbit.Servo(robotbit.Servos.S1, 90)
    basic.pause(1000)
    robotbit.Servo(robotbit.Servos.S1, 180)
    basic.pause(2000)
    robotbit.Servo(robotbit.Servos.S1, 0)
}
function LeftRot () {
    robotbit.MotorRun(robotbit.Motors.M1A, 90)
    robotbit.MotorRun(robotbit.Motors.M2A, -90)
    basic.pause(1000)
    robotbit.MotorStopAll()
}
function AllBck () {
    robotbit.MotorRun(robotbit.Motors.M1A, -100)
    robotbit.MotorRun(robotbit.Motors.M2A, -100)
    basic.pause(1000)
    robotbit.MotorStopAll()
}
let strip: neopixel.Strip = null
let Command = 0
radio.setGroup(1)
Command = 0
basic.showIcon(IconNames.LeftTriangle)
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.setBrightness(8)
strip.showColor(neopixel.colors(NeoPixelColors.Green))
robotbit.MotorStopAll()
basic.forever(function () {
	
})
