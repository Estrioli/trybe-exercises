const techList = (array, nome) => {
    const arrayTech = [];
    if (array.length === 0) {
        return 'Vazio!'
    }
    const arrayOrdenado = array.sort()
    for (let index = 0; index < array.length; index+=1) {
       arrayTech.push({
    tech:arrayOrdenado[index], 
    name: 'Lucas'
    })
        
    }
    return arrayTech
}
module.exports = techList



