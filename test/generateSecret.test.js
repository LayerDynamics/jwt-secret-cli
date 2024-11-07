// test/generateSecret.test.js

const generateSecret = require('../lib/generateSecret');
const { describe, test, expect } = require('@jest/globals');

describe('generateSecret', () => {
		const secret = generateSecret();
		expect(secret).toHaveLength(128); // 64 bytes * 2 (hex)
	});

	test('should generate a secret of specified length', () => {
		const length = 32;
		const secret = generateSecret(length);
		expect(secret).toHaveLength(64); // 32 bytes * 2 (hex)
	});

	test('should throw an error for non-positive length', () => {
		expect(() => generateSecret(0)).toThrow(
			'Length must be a positive integer',
		);
		expect(() => generateSecret(-10)).toThrow(
			'Length must be a positive integer',
		);
	});

	test('should generate a unique secret each time', () => {
		const secret1 = generateSecret();
		const secret2 = generateSecret();
		expect(secret1).not.toEqual(secret2);
	});
