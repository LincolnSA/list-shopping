const generateHash = (name) => {
    return `${name.toLowerCase()}-${Math.floor(Math.random() * 1000)}`;
};

export default generateHash;