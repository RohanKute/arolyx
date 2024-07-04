


const checkIfNumberAndSet = (e , setToNumber) => {
    e.preventDefault();
    const value = e.target.value.trim(); 
    if (!isNaN(value) && value !== '') {
        setToNumber(parseInt(value));
    } else{
        setToNumber('')
    }
};

export default checkIfNumberAndSet;