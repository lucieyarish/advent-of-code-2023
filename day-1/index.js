async function fetchData() {
  const response = await fetch('data.txt');
  const text = await response.text();
  return text.split(/\r|\n/);
}

fetchData().then((arr) => console.log(getCalibrationVal(arr)));

const getCalibrationVal = (arr) => {
  let numsArr = [];
  let calibrationVal = 0;

  for (let x of arr) {
    let numToArr = '';
    const firstNum = x.match(/[0-9]/);
    numToArr += firstNum;

    const splitStr = x.split('');
    const splitArr = splitStr.reverse();
    const reversedStr = splitArr.join('');
    const lastNum = reversedStr.match(/[0-9]/);
    numToArr += lastNum;

    numsArr.push(numToArr);
  }

  numsArr.forEach((num) => (calibrationVal += +num));

  return calibrationVal;
};
