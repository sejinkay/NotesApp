(function(exports) {
  function NoteController() {
    this.noteList = new NoteList()
    this.create = this.noteList.create("Favourite drink: seltzer")
    this.noteListView = new NoteView()
  }

  NoteController.prototype = {
    displayNote: function() {
              var self = this;
      document.getElementById('app').innerHTML = this.noteListView.show(this.noteList);
      makeRedirection();

      function makeRedirection() {
        document.addEventListener("click", function(clickEvent) {

            function redirection() {
              var id = Number(window.location.href.split("#notes/")[1]);
              document.getElementById('singleNote').innerHTML = "<h2>"+ self.noteList.notes[id].text + "</h2>";
              console.log(id);
              console.log("its working!")
            }
            redirection();
        })
      }
    }

  }

  exports.NoteController = NoteController;
})(this);

var display = new NoteController();
display.noteList.create("Today is Friday!");
console.log(display.displayNote());
