(function(exports) {
  function testText () {
var note = new Note();

    if (note.text !== "My favourite language is JavaScript.") {
      throw new Error("Wrong message displayed");
    }else {
      console.log("Test passed!");
    }

    if (note.return() !== "My favourite language is JavaScript.") {
      throw new Error("Wrong message2 displayed");
    }else {
      console.log("Test2 passed!");
    }
  };

  function testList() {
    var note = new NoteList();

    if (note.notes.length !== 0) {
      throw new Error("There are no array!");
    }else {
      console.log("NoteList test passed!")
    };

    if (note.return() !== note.notes) {
      throw new Error("There are no array!");
    }else {
      console.log("NoteList test2 passed!")
    };

    note.create("Favourite drink: seltzer")
    if (note.notes.includes("Favourite drink: seltzer") !== true) {
      throw new Error("There are no array!");
    }else {
      console.log("NoteList test3 passed!")
    };
  };
    testText();
    testList();
})(this);
