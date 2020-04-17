const convertNumberToString = (number) => {
    return String(number.toFixed(2)).replace('.', ',');
};

export default convertNumberToString;
