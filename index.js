const os = require("os");

var OStype = os.type();

const returnOSType = () => {
  switch (OStype) {
    case "Darwin":
      return "MacOS";
    case "Linux":
      return "Linux operating system";
    case "Windows_NT":
      return "Windows operating system";
    default:
      return "Other operating system";
  }
};

module.exports = {
    returnOSType
}