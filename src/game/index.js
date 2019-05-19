import TO_FIND from './random';
import getNum from './input';
import suces from './suces';
import info from './userInfo'
 
// **export domyślny
export default () =>{

let num = getNum;
while (num !== TO_FIND){
    info(num, TO_FIND);
    num = getNum();
}

suces();
}