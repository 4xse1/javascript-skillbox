let cars = {}

cars.bmw = {
    model: 'm5',
    color: 'green',
    hp: 340,
    isStarted: true
}

cars.audi = {
    model: 'rs6',
    color: 'black',
    hp: 560,
    isStarted: true
}

cars.mercedes = {
    model: 'amg gt 63',
    color: 'white',
    hp: 340,
    isStarted: false
}

function getCarName(){
    for (const brand in cars) {
        console.log(brand);
    }
}
getCarName()
