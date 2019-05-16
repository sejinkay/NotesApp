(function(exports) {
  function NoteController() {
    this.noteList = new NoteList()
    this.create = this.noteList.create("Favourite drink: seltzer")
    this.noteListView = new NoteView()
  }
  NoteController.prototype = {
    displayNote: function() {
      document.getElementById('app').innerHTML = this.noteListView.show(this.noteList);
    }
  }

  exports.NoteController = NoteController;
})(this);

var display = new NoteController();
console.log(display.displayNote());
