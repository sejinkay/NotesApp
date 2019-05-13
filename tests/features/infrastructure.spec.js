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
    testText();
})(this);
