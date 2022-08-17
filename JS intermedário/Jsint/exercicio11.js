//setup
const valoresNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
criaPares(...valoresNum)

function criaPares(){
    for(i=1; i<=valoresNum.length; i+=2){
        console.log(valoresNum[i])
    }
}