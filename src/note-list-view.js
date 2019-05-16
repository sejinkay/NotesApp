(function(exports) {
  function NoteView() {
};

NoteView.prototype.show = function(noteList) {
  return noteList.notes
    .map(function(note) {
      if(note.length > 20) {
        return "<h1><ul><li><div>" + `${note.substr(0, 20)}...` + "</div></li></ul></h1>"
      }else {
        return "<h1><ul><li><div>" + `${note.substr(0, 20)}` + "</div></li></ul></h1>"
      }
    }).join('');
}

  exports.NoteView = NoteView;
})(this);
