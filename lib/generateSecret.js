// lib/generateSecret.js

const crypto = require('crypto');

/**
 * Generates a secure JWT secret.
 * @param {number} length - The length of the secret.
 * @returns {string} The generated secret in hexadecimal format.
 */
function generateSecret(length = 64) {
    if (length <= 0) {
        throw new Error('Length must be a positive integer');
    }
    return crypto.randomBytes(length).toString('hex');
}

module.exports = generateSecret;
