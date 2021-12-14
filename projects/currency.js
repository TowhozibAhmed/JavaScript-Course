let amount = prompt('Enter Amount:');
let currency = prompt('Enter AmoCurrencyunt:');

if (amount == '' || currency == '') {
    alert('All fields are required');
} else {

    if (currency == 'dollar') {
        console.log(`${amount} ${currency} = ${amount * 84} BDT`)
    } else if (currency == 'pound') {
        console.log(`${amount} ${currency} = ${amount * 114} BDT`)
    } else if (currency == 'euro') {
        console.log(`${amount} ${currency} = ${amount * 97} BDT`)
    } else if (currency == 'lira') {
        console.log(`${amount} ${currency} = ${amount * 6.38} BDT`)
    } else {
        console.log(`Enter valid Information`)
    }

}