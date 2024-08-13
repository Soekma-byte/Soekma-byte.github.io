var calcDisplay = ""

function btnClick (e){
    if (e == "1" || e == "2" || e == "3" || e == "4" || e == "/" || e == "*")
        if (e == "AC") {
        calcDisplay =""
    } else {
    calcDisplay = calcDisplay + e
    console.log(calcDisplay)
    document.getElementById("display").value = calcDisplay
    } else {
    console.log("Input harus berupa angka dan simbol")
    }


}

document.getElementById("display").addEventListener('input', function displayChange() {
    console.log(this.value)
})