(function(exports) {
  function testNote () {
    var note = new Note("My favourite language is JavaScript.");

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
    var longlist = "<h1><ul><li><div>Moody blues</div></li></ul></h1><h1><ul><li><div>Crash</div></li></ul></h1><h1><ul><li><div>There must be some k...</div></li></ul></h1>";

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

    note.create("There must be some kind of way outta here")
    assert.isTrue(view.show(note) === longlist);
    console.log("View test3 passed!(long list)")

  };

  function testController() {
    var controller = new NoteController();

    assert.isTrue(controller !== undefined);
    console.log("Controller test passed!");

    // var hello = "<h1><ul><li><div>Hello</div></li></ul></h1>"
    // controller.noteList.create("Hello")
    //
    // assert.isTrue(controller.noteListView.show(controller.noteList.notes) === hello);
    // console.log("Controller test passed!");
  };

  function testSingleView() {
    var note = new Note("Favourite drink: seltzer");
    var singleNote = new SingleNoteView(note)

    assert.isTrue(singleNote.show() === `<div> ${note.return()} </div>`)
    console.log("Single View test passed!");
  };

    testNote();
    testList();
    testView();
    testController();
    testSingleView();
})(this);
