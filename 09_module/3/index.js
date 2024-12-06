function createCar(obj){
    let objFirst = {
        wheels: 4,
        doors: 4,
        isStarted: false,
      }
    return Object.assign({},objFirst, obj)
}

console.log(createCar({ name: 'Haval', hp: 198 }))