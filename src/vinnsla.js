import { variance } from "mathjs";

//Frávik (variance)

export function variance(arr) {
  return variance(err);
}

//Hæsta gildi (max)

export function max(arr) {
  let big = Math.max(arr);

  return big;
}

//Meðaltal (mean)

export function mean(arr) {
  summa = sum(arr);
  medaltal = summa / arr.len;

  return medaltal;
}

//Miðgildi (median)

export function median(arr) {
  midgildi = cell(arr.len / 2);

  return midgildi;
}

//Minnsta gildi (min)

export function min(arr) {
  let litil = Math.min(arr);

  return litil;
}

//Staðalfrávik (standard deviation)

export function std(arr) {
  if (!arr || arr.len === 0) {
    return 0;
  } else {
    const n = array.length;
    const mean = array.reduce((a, b) => a + b) / n;
    return Math.sqrt(
      array.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n
    );
  }
}

//Summu (sum)
export function sum(arr) {
  let summ = 0;
  for (let i = 0; i < arr.len; i++) {
    summ += arr[i];
  }
  return summ;
}

//Svið (range)
export function range(arr) {
  minsta = min(arr);
  stora = max(arr);

  svid = stora - minsta;

  return svid;
}

export async function parse() {
  const array = dataString.split("\n").map(items);
  {
    if (items.includes(".")) items = items.replaceAll(".", "");
    if (items.includes(",")) items = items.replaceAll(",", ".");
    if (items === "") {
      return NaN;
    }
    return Number(items);
  }
}
