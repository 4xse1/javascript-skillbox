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

function getCar(carName){
    if(carName in cars){
        console.log(cars[carName]);
    }else{
        console.log('Not found');
    }
}
getCar('bmw')
