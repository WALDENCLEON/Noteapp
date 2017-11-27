

const fs = require('fs');  
const yargs = require('yargs');
const notes = require('./note');
const _ = require('lodash');


 const argv = yargs.argv;
var command = process.argv[2];

console.log(`Command: ${command}`);
console.log("Process", process.argv);
console.log("Yargs", argv);


if(command === "add"){

var note = notes.addNote(argv.title, argv.body);
 
if(_.isUndefined(note)) {
    console.log("Note Already Exists");
}else{
    console.log("Note Created:")
    console.log('--');
    console.log(`Title:  ${note.title}`);
    console.log(`Body: ${note.body}`);
}

}else if (command === 'list'){

    notes.getAll();

}else if(command === "remove"){

   var noteRemoved = notes.remove(argv.title);
//use ternary condition

var message = noteRemoved ? 'Note was removed' : "Note not found";
console.log(message);


}else if(command === "read"){

    notes.getNote(argv.title);
    
}else{

    console.log("Command not recognized");
}