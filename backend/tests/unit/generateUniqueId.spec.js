const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
  it('should generate an unique ID', () => {
    const id = generateUniqueId();
    // expect(id).toBe(id);
    expect(id).toHaveLength(8);
  });
});