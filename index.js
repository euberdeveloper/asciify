const block = require('./utils/block.js');
const blocks = {};

/**
 * Converts a UNICODE string into the best equivalent ASCII string
 * 
 * @param str The UNICODE string that you want to convert to ascii.
 * @returns The converted ascii string.
 */
function traduce(str) {
	let result = '';
	for (const c of str) {
		const codePoint = c.codePointAt(0);
		if (codePoint <= 0x7f) {
			result += c;
			continue;
		}
		const blockNum = codePoint >>> 8;
		const lo = codePoint & 0xff;
		let b = blocks[blockNum];
		if (b === undefined) {
			blocks[blockNum] = b = block(blockNum).split('\t');
		}
		if (b.length > lo) {
			result += b[lo];
		}
	}
	return result;
}

module.exports = {
    traduce
};