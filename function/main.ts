function addTwo(num: number): number {
    return num + 2
}

let result: number = addTwo(5)
console.log(result);

function getValue(myVal: number) {
    if(myVal > 5) {
        return true
    }
    return "200 OK"
}

const getHello = (name:string):string => {
    return ""
}

const heros = ["thor", "ironman", "batman", "superman"]
// const heros = [1, 2, 3, 4]

heros.map(hero => {
    return `He is ${hero}`
})