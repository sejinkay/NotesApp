(function(exports) {
  function SingleNoteView(noteModel) {
    this.noteModel = noteModel
};

SingleNoteView.prototype.show = function() {
  return `<div> ${this.noteModel.return()} </div>`
};

  exports.SingleNoteView = SingleNoteView;
})(this);
