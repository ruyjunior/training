  let comparaComThis = function (param){
    console.log(this === param)
  }
  comparaComThis(global) // No caso do Node global é o elemento global

  const obj = {}
  comparaComThis = comparaComThis.bind(obj)
  comparaComThis(global)
  comparaComThis(obj) 

  let comparaComThisArrow = param => console.log(this === param)
  comparaComThisArrow(global)
  comparaComThisArrow(module.exports)

  comparaComThisArrow = comparaComThisArrow.bind(obj)
  comparaComThisArrow(obj)
  comparaComThisArrow(module.exports)
  