input.onButtonPressed(Button.A, function () {
    steps = 0
    basic.showNumber(0)
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    basic.showNumber(steps)
})
let steps = 0
steps = 0
basic.forever(function () {
	
})
