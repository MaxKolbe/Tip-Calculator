var button = document.querySelectorAll(".btn")

button.forEach((btn)=>{
  btn.addEventListener("click", (e)=>{
    const number = e.currentTarget.innerHTML
    const realNumber = number.slice(0,2)
    const alsoRealNumber = parseInt(realNumber)

    const bill = document.getElementById("bill").value
    const people = document.getElementById("people").value

    const showAmount = document.getElementById("tipAmt")
    const showTotal = document.getElementById("totPsn") 

    let tip = ( (alsoRealNumber / 100) * bill) / people
    let total = ( (tip * people) + bill ) / people

    if (bill.length == 0 || people.length == 0) {
      return
    }
    // if (total == NaN) {
    //   showTotal.innerHTML = `$0.00`
    //   return false
    // }
    
    showAmount.innerHTML = `$${tip.toFixed(2)}`
    showTotal.innerHTML = `$${total.toFixed(2)}`

  })
})

function showTip(){
  const custom = document.getElementById("custom").value

  const bill = document.getElementById("bill").value
  const people = document.getElementById("people").value

  const showAmount = document.getElementById("tipAmt")
  const showTotal = document.getElementById("totPsn") 

  let tip = ( (custom / 100) * bill) / people
  let total = ( (tip * people) + bill ) / people
  
  if (bill.length == 0 || people.length == 0 || custom.length == 0) {
    return
  }
  // if (total == NaN) {
  //   showTotal.innerHTML = `$0.00`
  // }

  showAmount.innerHTML = `$${tip.toFixed(2)}`
  showTotal.innerHTML = `$${total.toFixed(2)}`

}

function validateInputMoney(){
  let bill = document.getElementById("bill").value
  if (bill.length == 0) {
    document.getElementById("rf1").innerHTML = "Can't be blank"
    document.getElementById("rf1").style.display = "block"
    document.getElementById("bill").style.borderColor = "red"
    return false
  }
  document.getElementById("rf1").style.display = "none"
  document.getElementById("bill").style.borderColor = "hsl(172, 67%, 45%)"
  return true
}

function validateInputPeople(){
  let people = document.getElementById("people").value
  if (people.length == 0) {
    document.getElementById("rf2").innerHTML = "Can't be blank"
    document.getElementById("rf2").style.display = "block"
    document.getElementById("people").style.borderColor = "red"
    return false
  }
  document.getElementById("rf2").style.display = "none"
  document.getElementById("people").style.borderColor = "hsl(172, 67%, 45%)"
  return true
}

function resetFunction(){
  document.getElementById('frm1').reset()
  document.getElementById('frm2').reset()
}




