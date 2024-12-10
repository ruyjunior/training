const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break   // Para totalmente a repetoição e finaliza
    }
    console.log(`${x} = ${nums[x]}`)
}

for (x in nums) {
    if (x == 5) {
        continue    //Interrompe a repetição corrente
    }
    console.log(`${x} = ${nums[x]}`)
}

externo: for (a in nums){ //Rotulando for para que o break ou o continue seja relacionado para o mais externo.
    for (b in nums){
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}