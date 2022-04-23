const makeOutput = (arr) => arr.reduce((prev, current, index) => {
    if ((index + 1) % 2 === 0) {
        return `${prev}${current}\r\n`;
    }
    else {
        return `${prev}${current},`;
    }
}, '');
export default makeOutput;
