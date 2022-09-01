const form = document.querySelector("form")
const error = document.querySelector("#error")
const resetBtn = document.querySelector(".reset")

resetBtn.addEventListener("click", (e) =>{
    let bill = form.inBill.value
    let numberOfPeople = form.inNumberOfPeople.value
    console.log(bill)
    console.log(numberOfPeople)

    if (numberOfPeople == 0 || isNaN(numberOfPeople)) {
        error.textContent = "Can`t be zero!"
        numberOfPeople.focus()
        return
    }
})
