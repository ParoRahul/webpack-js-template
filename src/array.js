'use strict';

/**
 * Returns the last element of an array.
 * @param array The array.
 * @param n Which element from the end (default ist zero).
 */
export function tail(array, n = 0) {
    return array[array.length - (1 + n)];
}

export function equals(one, other, itemEquals = (a, b) => a === b) {
    if (one.length !== other.length) {
        return false;
    }
    for (let i = 0, len = one.length; i < len; i++) {
        if (!itemEquals(one[i], other[i])) {
            return false;
        }
    }
    return true;
}

/**
 * @returns a new array with all undefined or null values removed. The original array is not modified at all.
 */
export function coalesce(array) {
    if (!array) {
        return array;
    }
    return array.filter(e => !!e);
}
