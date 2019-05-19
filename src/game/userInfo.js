import { TOO_LESS, TOO_MUCH} from './constans';

export default (num, expeced) =>{
    if (num > expeced){
        alert(TOO_MUCH);
    }else{
        alert(TOO_LESS);
    }
}
