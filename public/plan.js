const toggle = (event) => {
    var currentElement = event.parentElement
    if(currentElement.classList.contains('disabled') ){
        console.log('do nothing. toggle is disabled');
    }
    else {
        if(event.nextSibling.nextSibling.style.display !== 'none') {
            event.children[1].style.transform = 'rotate(360deg)'
                document.getElementById(event.parentElement.id).getElementsByClassName('options')[0].style.display = 'none'
        }
        else {
            event.children[1].style.transform = 'rotate(180deg)'
            document.getElementById(event.parentElement.id).getElementsByClassName('options')[0].style.display = 'flex'
        }
    }
}


var weeklySpan = document.getElementById('weekly-span')
var biweeklySpan = document.getElementById('biweekly-span')
var monthlySpan = document.getElementById('monthly-span')

var modal = document.getElementById('order-summary-modal');
var modalContent = document.getElementById('modal-content')
var total = document.getElementById('total')
var total2 = document.getElementById('total2')


var summary = {
                howDrink: "", 
                type: "", 
                amount: "",
                grind: "",
                delivery: ""
            }

//how do you drink your coffee?
var selectedDrink = []
const drinkSelection = (clickedId) => {
    selectedDrink.push(clickedId)
    if(selectedDrink.length > 1) {
        document.getElementById(selectedDrink[0]).classList.remove('item-box-active');
        selectedDrink.shift()
        console.log(selectedDrink);
    }
    else {
        console.log(selectedDrink);
    }
    document.getElementById(clickedId).classList.add('item-box-active');

    if(clickedId === 'capsule') {
        document.getElementById('grind').classList.add('disabled')
        document.getElementById('grind-span').innerHTML = "_____"
        document.getElementById('grind-span2').innerHTML = "_____"
        document.getElementById('pv').innerHTML = 'using'
        document.getElementById('pv2').innerHTML = 'using'
    }
    else {
        document.getElementById('grind').classList.remove('disabled')
        if(summary.grind !== '') {
            var grindTitle = document.getElementById(summary.grind).children[0].innerHTML;  
            document.getElementById('grind-span').innerHTML = grindTitle
            document.getElementById('grind-span2').innerHTML = grindTitle
        }
        
        document.getElementById('pv').innerHTML = 'as'
        document.getElementById('pv2').innerHTML = 'as'
    }

    summary.howDrink = clickedId;
    var title = document.getElementById(clickedId).children[0].innerHTML;
    var typeSpan = document.getElementById('drink-span');
    typeSpan.innerHTML = title;
    var typeSpan2 = document.getElementById('drink-span2');
    typeSpan2.innerHTML = title;
}

//what type of coffee?
var selectedType = []
const typeSelection = (clickedId) => {
    selectedType.push(clickedId)
    if(selectedType.length > 1) {
        document.getElementById(selectedType[0]).classList.remove('item-box-active');
        selectedType.shift()
        console.log(selectedType);
    }
    else {
        console.log(selectedType);
    }
    document.getElementById(clickedId).classList.add('item-box-active');

    summary.type = clickedId;
    var title = document.getElementById(clickedId).children[0].innerHTML;
    var typeSpan = document.getElementById('type-span');
    typeSpan.innerHTML = title;
    var typeSpan2 = document.getElementById('type-span2');
    typeSpan2.innerHTML = title;
}

//how much would you like?
var selectedAmount = []
const amountSelection = (clickedId) => {
    selectedAmount.push(clickedId)
    if(selectedAmount.length > 1) {
        document.getElementById(selectedAmount[0]).classList.remove('item-box-active');
        selectedAmount.shift()
        console.log(selectedAmount);
    }
    else {
        console.log(selectedAmount);
    }
    document.getElementById(clickedId).classList.add('item-box-active');

    
    //if 250g is selected
    if(clickedId === '250g') {
        //Every Week price per shipment is $7.20
        weeklySpan.innerHTML = "7.20"
        //Every 2 Weeks price per shipment is $9.60
        biweeklySpan.innerHTML = "9.60"
        //Every Month price per shipment is $12.00
        monthlySpan.innerHTML = "12.00"
    }
    //if 500g is selected
    else if(clickedId === '500g') {
        //Every Week price per shipment is $13.00
        weeklySpan.innerHTML = "13.00"
        //Every 2 Weeks price per shipment is $17.50
        biweeklySpan.innerHTML = "17.50"
        //Every Month price per shipment is $22.00
        monthlySpan.innerHTML = "22.00"
    }
    //if 1000g is selected
    else if(clickedId === '1000g') {
        //Every Week price per shipment is $22.00
        weeklySpan.innerHTML = "22.00"
        //Every 2 Weeks price per shipment is $32.00
        biweeklySpan.innerHTML = "32.00"
        //Every Month price per shipment is $42.00
        monthlySpan.innerHTML = "42.00"
    }

    summary.amount = clickedId;
    var title = document.getElementById(clickedId).children[0].innerHTML;
    var typeSpan = document.getElementById('amount-span');
    typeSpan.innerHTML = title;
    var typeSpan2 = document.getElementById('amount-span2');
    typeSpan2.innerHTML = title;
}

//want us to grind them?
var selectedGrind = []
const grindSelection = (clickedId) => {
    selectedGrind.push(clickedId)
    if(selectedGrind.length > 1) {
        document.getElementById(selectedGrind[0]).classList.remove('item-box-active');
        selectedGrind.shift()
        console.log(selectedGrind);
    }
    else {
        console.log(selectedGrind);
    }
    document.getElementById(clickedId).classList.add('item-box-active');

    summary.grind = clickedId;
    var title = document.getElementById(clickedId).children[0].innerHTML;
    var typeSpan = document.getElementById('grind-span');
    typeSpan.innerHTML = title;
    var typeSpan2 = document.getElementById('grind-span2');
    typeSpan2.innerHTML = title;
}

//how often should we deliver?
var selectedDelivery = []
const deliverySelection = (clickedId) => {
    selectedDelivery.push(clickedId)
    if(selectedDelivery.length > 1) {
        document.getElementById(selectedDelivery[0]).classList.remove('item-box-active');
        selectedDelivery.shift()
        console.log(selectedDelivery);
    }
    else {
        console.log(selectedDelivery);
    }
    document.getElementById(clickedId).classList.add('item-box-active');

    summary.delivery = clickedId;
    var title = document.getElementById(clickedId).children[0].innerHTML;
    var typeSpan = document.getElementById('delivery-span');
    typeSpan.innerHTML = title;
    var typeSpan2 = document.getElementById('delivery-span2');
    typeSpan2.innerHTML = title;
}

const openModal = () => {
    
    //If Every Week is selected, the Order Summary modal should show the per shipment 
    //price multiplied by 4. For example, if 250g weight is selected, the price would be $28.80/month
    if(selectedDelivery[0] === 'weekly') {
        total.innerHTML = (parseFloat(weeklySpan.innerHTML) * 4).toFixed(2)
        total2.innerHTML = (parseFloat(weeklySpan.innerHTML) * 4).toFixed(2)
    }
    
    //If Every 2 Weeks is selected, the Order Summary modal should show the per shipment 
    //price multiplied by 2. For example, if 250g weight is selected, the price would be $19.20/month
    else if(selectedDelivery[0] === 'biweekly') {
        total.innerHTML = (parseFloat(biweeklySpan.innerHTML) * 2).toFixed(2)
        total2.innerHTML = (parseFloat(biweeklySpan.innerHTML) * 2).toFixed(2)
    }

    //If Every Month is selected, the Order Summary modal should show the per shipment 
    //price multiplied by 1. For example, if 250g weight is selected, the price would be $12.00/month
    else if(selectedDelivery[0] === 'monthly') { 
        total.innerHTML = (parseFloat(monthlySpan.innerHTML) * 1).toFixed(2)
        total2.innerHTML = (parseFloat(monthlySpan.innerHTML) * 1).toFixed(2)
    }
    
    modal.style.display = 'block'

    //close modal on outside click
    document.addEventListener('click', (event) => {
        var target = event.target // clicked element
        
        if(target === modalContent.parentElement) {
            modal.style.display = 'none'
        }
    })
}

