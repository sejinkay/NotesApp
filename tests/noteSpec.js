(function(exports) {
  function testNote () {
    var note = new Note();

    assert.isTrue(note.text === "My favourite language is JavaScript.");
    console.log("Note test passed!");

    assert.isTrue(note.return() === "My favourite language is JavaScript.");
    console.log("Note test2 passed!");

  }

  function testList() {
    var note = new NoteList();

    assert.isTrue(note.notes.length === 0);
    console.log("List test passed!")

    assert.isTrue(note.return() === note.notes);
    console.log("List test2 passed!")

    note.create("Favourite drink: seltzer")
    assert.isTrue(note.notes.includes("Favourite drink: seltzer") === true);
    console.log("List test3 passed!")

  };

  function testView() {
    var note = new NoteList();
    var view = new NoteView();
    var htmlList = "<h1><ul><li><div>Moody blues</div></li></ul></h1><h1><ul><li><div>Crash</div></li></ul></h1>";

    if (view.show(note) !== "") {
      throw new Error("List and view doesn't match!");
    }else {
      console.log("View test0 passed!(no item)")
    };

    note.create("Moody blues")

    if (view.show(note) !== "<h1><ul><li><div>Moody blues</div></li></ul></h1>") {
      throw new Error("List and view doesn't match!");
    }else {
      console.log("View test1 passed!(one item)")
    };

    note.create("Crash")

    if (view.show(note) !== htmlList) {
      throw new Error("List and view doesn't match!");
    }else {
      console.log("View test2 passed!(several items)")
    };
  };

  // function testController() {
  //   var controller = new NoteController();
  //
  // };

    testNote();
    testList();
    testView();
    // testController();
})(this);
