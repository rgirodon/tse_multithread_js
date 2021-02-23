'use strict';

const fs = require('fs');

const file0 = 'data/fichier0.txt';
const file1 = 'data/fichier1.txt';
const file2 = 'data/fichier2.txt';
const file3 = 'data/fichier3.txt';


let follow = true;

// Check if the file exists in the current directory.
fs.access(file0, fs.constants.F_OK, (err) => {

    if (err) {
        follow = false;
    }
    console.log(`${file0} ${err ? 'does not exist, stop' : 'exists, continue'}`);

    if (follow) {
        fs.access(file1, fs.constants.F_OK, (err) => {
    
            if (err) {
                follow = false;
            }
            console.log(`${file1} ${err ? 'does not exist, stop' : 'exists, continue'}`);

            if (follow) {
                fs.access(file2, fs.constants.F_OK, (err) => {
            
                    if (err) {
                        follow = false;
                    }
                    console.log(`${file2} ${err ? 'does not exist, stop' : 'exists, continue'}`);

                    if (follow) {
                        fs.access(file3, fs.constants.F_OK, (err) => {
                    
                            if (err) {
                                follow = false;
                            }
                            console.log(`${file3} ${err ? 'does not exist, stop' : 'exists, continue'}`);
                        });
                    }
                });
            }
        });
    }
});