const Calculate = {
    factorial (n) {
        result = 1;
        for(i=1; i < n; i++) {
            result += result * i;
        }
        return result;
    }
};

module.exports = Calculate;