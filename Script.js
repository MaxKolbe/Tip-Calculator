var button = document.querySelectorAll(".btn")

button.forEach((btn)=>{
  btn.addEventListener("click", (e)=>{
    const number = e.currentTarget.innerHTML
    const realNumber = number.slice(0,2)
    const alsoRealNumber = parseInt(realNumber)

    const bill = document.getElementById("bill").value
    const people = document.getElementById("people").value
      
    const bills = parseInt(bill)
    const peoples = parseInt(people)

    const showAmount = document.getElementById("tipAmt")
    const showTotal = document.getElementById("totPsn") 

    let tip = ( (alsoRealNumber / 100) * bills) / peoples
    let total = ( (tip * peoples) + bills ) / peoples

    if (bill.length == 0 || people.length == 0) {
      return
    }
    
    showAmount.innerHTML = `$${tip.toFixed(2)}`
    showTotal.innerHTML = `$${total.toFixed(2)}`

  })
})

function showTip(){
  const custom = document.getElementById("custom").value
  const customs = parseInt(custom)

  
  const bill = document.getElementById("bill").value
  const people = document.getElementById("people").value
    
  const bills = parseInt(bill)
  const peoples = parseInt(people)

  const showAmount = document.getElementById("tipAmt")
  const showTotal = document.getElementById("totPsn") 

  let tip = ( (customs / 100) * bills) / peoples
  let total = ( (tip * peoples) + bills ) / peoples
  
  if(bill.length == 0 || people.length == 0 || custom.length == 0){
    return
  }
  
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
  if(!bill.match(/^[0-9]+$/)){
    document.getElementById("rf1").innerHTML = "Must be number"
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
  if(!people.match(/^[0-9]+$/)){
    document.getElementById("rf2").innerHTML = "Must be number"
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




