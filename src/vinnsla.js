

//Frávik (variance)

export function variance(arr){
    if(!arr.len){
        return 0;
    }
    //þarf að laga þetta virkar ekki rétt skoða maps/reduce
    fravik = math.sqrt(((sum(arr)-mean(arr))^2)/arr.len - 1);
}

//Hæsta gildi (max)

export function max(arr){
    
    let big = Math.max(arr)

    return big;
}

//Meðaltal (mean)

export function mean(arr){
        summa = sum(arr);
        medaltal = summa / arr.len;

        return medaltal;
}

//Miðgildi (median)

export function median(arr){
    midgildi = cell(arr.len/2);

    return midgildi;
}

//Minnsta gildi (min)

export function min(arr){
    let litil = Math.min(arr);

    return litil;
}

//Staðalfrávik (standard deviation)

export function std(arr){
    if(!arr || arr.len === 0){
        return 0;
    }else{
    const n = array.length
    const mean = array.reduce((a, b) => a + b) / n
    return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
    }
}

//Summu (sum)
export function sum(arr){

    let summ = 0;
    for(let i = 0; i < arr.len; i++){
        summ += arr[i]
    }
    return summ;
}

//Svið (range)
export function range(arr){
    
    minsta = min(arr);
    stora = max(arr);

    svid = stora - minsta;

    return svid;
}