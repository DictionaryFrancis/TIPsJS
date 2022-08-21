
        const form = document.querySelector("form")
        const tipAmount = document.getElementById("tip-amount")
        const totalCost = document.getElementById("total-cost")

        form.addEventListener("submit", (e) => {
            const cost = Number(form.costElem.value)
            const percentage = Number(form.percentageElem.value)

            const sum = cost * (percentage/100)
            const sum2 = cost + sum
           
            tipAmount.textContent = "$" + sum.toFixed(2)
            totalCost.textContent = "$" + sum2.toFixed(2)

            e.preventDefault()
        })