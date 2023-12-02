fetch('data.txt')
  .then((response) => {
    if (response.status !== 200) {
      alert(`Error: Unable to load preview, HTTP response ${response.status}.`);
    }
    response.text();
  })
  .then((data) => {
    const arr = data.split(/\r|\n/);
    getCalibrationVal(arr);
  })
  .catch((error) => alert(`Error: ${error}`));

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
