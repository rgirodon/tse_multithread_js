'use strict';

const fs = require('fs');

const async = require("async");

const file0 = 'data/fichier0.txt';
const file1 = 'data/fichier1.txt';
const file2 = 'data/fichier2.txt';
const file3 = 'data/fichier3.txt';

function checkerFunction(file, callback) {

    fs.access(file, 
        fs.constants.F_OK,
        (err) => {
            if (err) {
                callback(`${file} does not exist, stop`);                    
            }
            else {
                console.log(`${file} exists, continue`);

                callback(null, file);
            }
        });
}


async.series([
    function(callback) {

        checkerFunction(file0, callback);
    },
    function(callback) {

        checkerFunction(file1, callback);
    },
    function(callback) {

        checkerFunction(file2, callback);
    },
    function(callback) {

        checkerFunction(file3, callback);
    }
], function(err, results) {

    if (err) {

        console.log(err);
    }
    else {
        results.forEach(
            (item) => { 
                console.log(item + ' verified');
            }
        );
    }
}
);


/*
let files = [file0, file1, file2, file3];

let seriesFunctions = [];

files.forEach(
    (file) => {
        seriesFunctions.push((callback) => {

            checkerFunction(file, callback);
        })
    }
);

async.series(
    seriesFunctions,
    function(err, results) {

        if (err) {
    
            console.log(err);
        }
        else {
            results.forEach(
                (item) => { 
                    console.log(item + ' verified');
                }
            );
        }
    }
);
*/
