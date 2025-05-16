const { addressType } = require('../src/crypto/utils');

function isValidTONAddress(address) {
  // TON addresses are base64 strings starting with 'EQ', 'UQ', or 'kQ'
  // followed by 44 base64 characters
  const tonAddressRegex = /^(-1|0):[0-9a-fA-F]{64}$|^[A-Za-z0-9_-]{48}$/;
  return tonAddressRegex.test(address);
}

module.exports = {
  isValidAddress: function (address) {
    return isValidTONAddress(address);
  },
  getAddressType: function (address) {
    if (this.isValidAddress(address)) {
      return addressType.ADDRESS;
    }
    return undefined;
  },
};
