const convertStringToNumber = (string) => {
    const result = string.replace(',', '.');
    
    return parseFloat(result);
};

export default convertStringToNumber;