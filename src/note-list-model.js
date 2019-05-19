(function(exports) {
  function NoteList() {
    this.notes = [];
};

NoteList.prototype.return = function() {
  return this.notes;
}

NoteList.prototype.create = function(text) {
  this.notes.push(new Note(text));
}

  exports.NoteList = NoteList;
})(this);
