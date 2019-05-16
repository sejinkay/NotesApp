(function(exports) {
  function Note(string) {
    this.text = string
};

Note.prototype.return = function() {
  return this.text
}
  exports.Note = Note;
})(this);
