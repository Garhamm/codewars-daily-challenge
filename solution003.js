//8 kyu Holiday VI - Shark Pontoon
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    let mySwimTime = pontoonDistance/youSpeed
    let sharkSwimTime = sharkDistance/sharkSpeed
    if(mySwimTime < sharkSwimTime && dolphin == false){
      return 'Alive!'
    }else if (mySwimTime >= sharkSwimTime && dolphin == false){
      return 'Shark Bait!'
    }else if(mySwimTime < (sharkSwimTime*2) && dolphin == true){
      return 'Alive!'
    }else if(mySwimTime >= (sharkSwimTime*2) && dolphin == true){
      return 'Shark Bait!'
    }
  }