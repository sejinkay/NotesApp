(function(exports) {
  function Note() {
this.text = "My favourite language is JavaScript."
};

Note.prototype.return = function() {
  return this.text;
}
  exports.Note = Note;
})(this);
