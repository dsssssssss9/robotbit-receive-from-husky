// Use Button B to test any funtion without need for the transmitter
input.onButtonPressed(Button.B, function () {
    RightRot()
})
// Rotate Robot right for 1 second & then stop
function RightRot () {
    robotbit.MotorRun(robotbit.Motors.M1A, -75)
    robotbit.MotorRun(robotbit.Motors.M2A, 75)
    basic.pause(1000)
    robotbit.MotorStopAll()
}
// Turn Onboard neopixels red & blink 4 times
// then turn them off
function Lights () {
    for (let index = 0; index < 4; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(500)
        strip.clear()
        strip.show()
        basic.pause(1000)
    }
}
// When a "number " is received from the transmitter , find its value & select correct function depending on this 
// 
// 
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
// Use Button A to test any funtion without need for the transmitter
input.onButtonPressed(Button.A, function () {
    AllFwd()
})
// All Motors Forward for 1 second & then stop
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
// Rotate Robot left for 1 second & then stop
function LeftRot () {
    robotbit.MotorRun(robotbit.Motors.M1A, 90)
    robotbit.MotorRun(robotbit.Motors.M2A, -90)
    basic.pause(1000)
    robotbit.MotorStopAll()
}
/**
 * generic RobotCar based around RobotBit motor controller
 * 
 * Receives "commands" from HuskyLens
 * 
 * 1 = go forward
 * 
 * 2 = go backwards
 * 
 * 3 = rotate left
 * 
 * 4 = rotate right
 * 
 * 5 = demo servo
 * 
 * 6 = demo RobotBit Neopixels
 * 
 * all timings & speed will need to be adjusted to suit your particular setup
 */
// All Motors Backwards for 1 second & then stop
function AllBck () {
    robotbit.MotorRun(robotbit.Motors.M1A, -100)
    robotbit.MotorRun(robotbit.Motors.M2A, -100)
    basic.pause(1000)
    robotbit.MotorStopAll()
}
// Define Radio group  = bothe transmitter & receiver must be on same group for this to work
// 
// configure & light up green RobotBit onboard Neopixels 
// 
// Stop all motors 
let strip: neopixel.Strip = null
let Command = 0
radio.setGroup(1)
Command = 0
basic.showIcon(IconNames.LeftTriangle)
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.setBrightness(8)
strip.showColor(neopixel.colors(NeoPixelColors.Green))
robotbit.MotorStopAll()
