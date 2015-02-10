var dest = "./build";
var src = './src';

module.exports = {
    browserSync: {
        server: {
            baseDir: [dest, src]
        },
        files: [
            dest + "/**",
            "!" + dest + "/**.map"
        ],
        port: 5000
    },
    sass: {
        sassSrc: src + "/sass/*",
        cssSrc: src + "/css/*",
        dest: dest + "/css"
    },
    images: {
        src: src + "/images/**",
        dest: dest + "/images"
    },
    markup: {
        src: src + "/htdocs/**",
        dest: dest
    },
    ajaxfixtures: {
        src: src + "/ajaxfixtures/**",
        dest: dest + "/ajaxfixtures"
    },
    browserify: {
        extensions: ['.hbs'],
        bundleConfigs: [{
            entries: './src/js/app.js',
            dest: dest,
            outputName: 'app.js'
        }]
    }
};