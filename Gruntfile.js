module.exports = function (grunt) {  
  
    grunt.initConfig({  
        transport: {  
            options: {  
                paths: ['static'] // where is the module, default value is ['sea-modules']  
            },  
            app: {  
                options: {  
                    idleading: 'app/'  
                },  
                files: [  
                    {  
                        cwd: 'static/app',  
                        src: '**/*.js',  
                        dest: '.build/app'  
                    }  
                ]  
            },  
            main: {  
                options: {  
                    idleading: 'main/'  
                },  
                files: [  
                    {  
                        cwd: 'static/main',  
                        src: '**/*.js',  
                        dest: '.build/main'  
                    }  
                ]  
            },
            seajs : {
                options : {
                    idleading : 'static/3rd-lib'
                },
                files : [
                    {
                        cwd : 'static/3rd-lib',
                        src : '**/*.js',
                        dest : './build/3rd-lib'
                    }
                ]
            }  
        },  
        concat: {  
            options: {  
                include: 'self'  
            },  
            build: {  
                files: {  
                    'dist/app/hello.js': ['.build/app/hello.js', '.build/app/world.js'],  
                    'dist/main/main.js': ['.build/main/main.js']  
                }  
            }  
        },  
        uglify: {  
            main: {  
                files: {  
                    'dist/app/hello.js': ['dist/app/hello.js'],  
                    'dist/main/main.js': ['dist/main/main.js']  
                }  
            }  
        },  
        clean: {  
            build: ['.build'] // clean .build directory  
        }  
    });  
  
    grunt.loadNpmTasks('grunt-cmd-transport');  
    grunt.loadNpmTasks('grunt-cmd-concat');  
    grunt.loadNpmTasks('grunt-contrib-uglify');  
    grunt.loadNpmTasks('grunt-contrib-clean');  
  
    grunt.registerTask("test","my custom task",function(){  
        console.log("hello grunt");  
    })  
  
    grunt.registerTask('default', ['transport', 'concat', 'uglify', 'clean','test']);  
  
};  