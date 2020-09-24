/**
 * Returns true if the given value is any of the following strictly
 * 
 * - true
 * - "true"
 * - 1
 * - "1"
 * 
 * @param {*} val to evaluate
 * @return {boolean} true/false accordingly
 */
function isTrueish(val) {
	return val === true || val === 1 || val === "1" || val === "true"
}

// Export the function
module.exports = isTrueish;