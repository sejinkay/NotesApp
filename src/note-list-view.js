(function(exports) {
  function NoteView() {
};

NoteView.prototype.show = function(noteList) {
  return noteList.notes
    .map(function(note) {
      if(note.text.length > 20) {
        return "<h1><ul><li><div>" + `<a href = "http://localhost:8080#notes/${note.id}">` + `${note.text.substr(0, 20)}...` + "</a>" + "</div></li></ul></h1>"
      }else {
        return "<h1><ul><li><div>" + `<a href = "http://localhost:8080#notes/${note.id}">` + `${note.text.substr(0, 20)}` + "</a>" + "</div></li></ul></h1>"
      }
    }).join('');
}

  exports.NoteView = NoteView;
})(this);
