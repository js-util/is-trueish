# Is Trueish

A very relaxed varient of `=== true`. Validate that the given param is true, 'true', 1, or '1'

# npm install

```.bash
npm install --save @js-util/is-trueish
```

# Example usage

```.js
// Importing the module
const isTrueish = require("@js-util/is-trueish");

// Validate if isTrueish
if( isTrueish(someConfig) ) {
    // does something
}
```

# Its code

```.js
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
```
