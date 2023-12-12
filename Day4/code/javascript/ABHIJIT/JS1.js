//pass function as a parameter

function baby(abhi) {
    for (var i = 0; i < 4; i++) {
        abhi()
    }
}



baby(function () {
    console.log("saurabh dalal rocket man......")
})