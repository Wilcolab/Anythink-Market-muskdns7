


function toCamelCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string.');
    }
    if (input === null || input === undefined) {
        throw new Error('Input cannot be null or undefined.');
    }
    // Trim and check for empty string
    const str = input.trim();
    if (str.length === 0) return '';

    // Split by space, hyphen, or underscore
    const words = str.split(/[\s-_]+/);

    // Lowercase the first word, capitalize the rest
    return words
        .map((word, idx) => {
            if (idx === 0) return word.toLowerCase();
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
// console.log(toCamelCase("happy day")); // "happyDay"
// console.log(toCamelCase("happy-day")); // "happyDay"
// console.log(toCamelCase("happy_day")); // "happyDay"
// toCamelCase(happy day); // Throws error


function toDotCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string.');
    }
    if (input === null || input === undefined) {
        throw new Error('Input cannot be null or undefined.');
    }
    const str = input.trim();
    if (str.length === 0) return '';

    // Split by space, hyphen, or underscore
    const words = str.split(/[\s-_]+/);

    // Lowercase all words and join with dots
    return words.map(word => word.toLowerCase()).join('.');
}

// Example usage:
// console.log(toDotCase("happy day")); // "happy.day"
// console.log(toDotCase("happy-day")); // "happy.day"
// console.log(toDotCase("happy_day")); // "happy.day"

/**
 * Converts a given string to camelCase format.
 *
 * The function splits the input string by spaces, hyphens, or underscores,
 * lowercases the first word, capitalizes the first letter of each subsequent word,
 * and joins them together without separators.
 *
 * @param {string} input - The string to convert to camelCase.
 * @returns {string} The camelCase formatted string.
 * @throws {Error} Throws if the input is not a string, or if it is null or undefined.
 *
 * @example
 * toCamelCase("happy day"); // returns "happyDay"
 * toCamelCase("happy-day"); // returns "happyDay"
 * toCamelCase("happy_day"); // returns "happyDay"
 */
 
/**
 * Converts a given string to dot.case format.
 *
 * The function splits the input string by spaces, hyphens, or underscores,
 * lowercases all words, and joins them together with dots as separators.
 *
 * @param {string} input - The string to convert to dot.case.
 * @returns {string} The dot.case formatted string.
 * @throws {Error} Throws if the input is not a string, or if it is null or undefined.
 *
 * @example
 * toDotCase("happy day"); // returns "happy.day"
 * toDotCase("happy-day"); // returns "happy.day"
 * toDotCase("happy_day"); // returns "happy.day"
 */