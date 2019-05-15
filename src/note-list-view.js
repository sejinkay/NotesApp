(function(exports) {
  function NoteView() {
};

NoteView.prototype.show = function(noteList) {
  return noteList.notes
    .map(function(note) {
      return "<ul><li><div>" + note + "</div></li></ul>"
    }).join('');
}

  exports.NoteView = NoteView;
})(this);
