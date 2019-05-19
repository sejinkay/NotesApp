(function(exports) {
  var id = 0;
  function Note(string) {
    this.text = string
    this.id = id++;
};

Note.prototype.return = function() {
  return this.text
}
  exports.Note = Note;
})(this);
