module.exports = function reverse(n) {
    const positiveN = Math.abs(n);

    return Number(
        positiveN
            .toString()
            .split("")
            .reverse()
            .join("")
    );
};
