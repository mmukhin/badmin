var minimist = require('minimist');

var knownOptions = {
    string: ['env', 'foobar'],
    default: {
        env: 'local',
        foobar: 1
    }
};

module.exports = minimist(process.argv.slice(2), knownOptions);
