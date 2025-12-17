// Support file loaded before spec files
// Register cypress-axe for accessibility testing
const axe = require('cypress-axe');

// re-export commands
module.exports = axe;
