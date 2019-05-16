(function(exports) {
  function NoteView() {
};

NoteView.prototype.show = function(noteList) {
  return noteList.notes
    .map(function(note) {
      return "<h1><ul><li><div>" + note + "</div></li></ul></h1>"
    }).join('');
}

  exports.NoteView = NoteView;
})(this);
