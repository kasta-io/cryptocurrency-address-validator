const { addressType } = require('./crypto/utils');

module.exports = {
  isValidAddress: function (address) {
    // Check for length requirements (2 to 64 characters)
    if (
      typeof address !== 'string' ||
      address.length < 2 ||
      address.length > 64
    ) {
      return false;
    }

    // Regular expression to validate NEAR address format
    const nearAddressRegex =
      /^(?![_\.])(?!.*[_\.]{2})[a-z0-9._-]{2,64}(?<![_\.])$/;

    // Validate the address against the regex
    if (!nearAddressRegex.test(address)) {
      return false;
    }

    return true;
  },

  getAddressType: function (address, currency, networkType) {
    if (this.isValidAddress(address, currency, networkType)) {
      return addressType.ADDRESS;
    }
    return undefined;
  },
};
