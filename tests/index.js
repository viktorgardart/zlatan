var expect = require('chai').expect,
    zlatan = require('zlatan'),
    pkg = require('../package.json');

describe("zlatan " + pkg.version + " tests:", function(args) {
    var params = ['npm', 'bower', 'zlatan'];

    it('should return a random value from array', function(done) {
        expect(params.toString()).to.contain(zlatan(params));
        done();
    });

    it('should return a random value from multiple arguments', function(done) {
        expect(params.toString()).to.contain(zlatan('npm', 'bower', 'zlatan'));
        done();
    });
});
