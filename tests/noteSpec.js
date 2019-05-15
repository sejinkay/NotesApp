(function(exports) {
  function testNote () {
var note = new Note();

    if (note.text !== "My favourite language is JavaScript.") {
      throw new Error("Wrong message displayed");
    }else {
      console.log("Note test passed!");
    }

    if (note.return() !== "My favourite language is JavaScript.") {
      throw new Error("Wrong message2 displayed");
    }else {
      console.log("Note test2 passed!");
    }
  };

  function testList() {
    var note = new NoteList();

    if (note.notes.length !== 0) {
      throw new Error("There are no array!");
    }else {
      console.log("List test passed!")
    };

    if (note.return() !== note.notes) {
      throw new Error("There are no array!");
    }else {
      console.log("List test2 passed!")
    };

    note.create("Favourite drink: seltzer")
    if (note.notes.includes("Favourite drink: seltzer") !== true) {
      throw new Error("There are no array!");
    }else {
      console.log("List test3 passed!")
    };
  };

  function testView() {
    var note = new NoteList();
    var view = new NoteView();
    var htmlList = "<ul><li><div>Moody blues</div></li></ul><ul><li><div>Crash</div></li></ul>";

    if (view.show(note) !== "") {
      throw new Error("List and view doesn't match!");
    }else {
      console.log("View0 test passed!(no item)")
    };

    note.create("Moody blues")

    if (view.show(note) !== "<ul><li><div>Moody blues</div></li></ul>") {
      throw new Error("List and view doesn't match!");
    }else {
      console.log("View1 test passed!(one item)")
    };

    note.create("Crash")

    if (view.show(note) !== htmlList) {
      throw new Error("List and view doesn't match!");
    }else {
      console.log("View2 test passed!(several items)")
    };
  };
    testNote();
    testList();
    testView();
})(this);
