const hours = [ 6, 9, 7, 8, 6, 6, 8, 5, 9, 8, 7, 6, 7, 7, 8, 6, 9 ]
let grumpyHours = 0
let happyHours = 0

for(const hour of hours){
    if (hour < 7){
        grumpyHours ++
    }
    else {
        happyHours ++
    }
}

console.log(`
I was grumpy on ${grumpyHours} days.
I was happy on ${happyHours} days.
`)