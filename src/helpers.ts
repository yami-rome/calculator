const numberAllowedList: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']

const operatorAllowedList: string[] = ['+', '-', '/', '*']

const characterAllowedList: string[] = [...numberAllowedList, ...operatorAllowedList]


export const validateIfIsAllowedCharacter = (value: string) => {
    return value.split('')
    .filter(anyCharacter => characterAllowedList.includes(anyCharacter))
    
}






