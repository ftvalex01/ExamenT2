
export const fizzbuzz = (number) => {
    if(typeof number != 'number') throw new Error('paramater provided must be a number')
    if(Number.isNaN(number)) throw new Error('paramater provided must be a number')

    //if(number % 3 == 0 && number % 5 == 0) return 'fizzbuzz'
    if(number % 11 == 0) return 'sarabia'
    if(number % 2 == 0) return 'alejandro'
    if(number % 3 == 0) return 'suarez'
    const multiplies = {2:'alejandro',3:'suarez',11:'sarabia'}
    let output = ''

   /*  Object
        .entries(multiplies)
        .forEach(([multiplier,word]) => {
            if(number % multiplier == 0) output += word
        }) */

    return output == '' ? number : output
}