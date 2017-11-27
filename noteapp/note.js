

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('note-data.json');
        return JSON.parse(notesString);
    } catch (e) {
return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('note-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
var notes = fetchNotes(); //array is constrcuted 

var note = { //creating new note/object structure to be pushed if title does not exist
title,
body
};

var duplicateNotes = notes.filter((note) => note.title === title);

if (duplicateNotes.length === 0){
    notes.push(note);
  saveNotes(notes);
  return note;
}

};

var getAll = () => {
  var allNotes = fetchNotes();  
var i = 0;
for (; i < allNotes.length; i ++){
    console.log(allNotes[i].title);
    console.log('--');
    console.log(allNotes[i].body);
}

};

var getNote = (title) => {

var fetch = fetchNotes();
var findNote = fetch.filter((note) => note.title == title);
console.log(title);
console.log('--');
console.log(findNote[0].body);

};

var remove = (title) => {

  var notes = fetchNotes();
    //fetch notes array from JSON file
  var filteredNotes = notes.filter((note) => note.title !== title); //each item that is being looped through the array is used as the arg. 
    //filter array so that you return only items that doe not have the same title as the one requested
    saveNotes(filteredNotes);
    //save new notes array to file.
   return notes.length !== filteredNotes.length;
};

module.exports = {
addNote,
getAll,
getNote,
remove

// with ES6 you can modify a name value pair when they are the same to be singular ex. addNote: addNote == addNote
};