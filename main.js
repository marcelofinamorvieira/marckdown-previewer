$(document).ready(function(){
  updatePreview();
  $("#editor").keyup(function(){
    updatePreview();
  });
  function updatePreview() {
  $("#preview").html(marked($("#editor").val(), {gfm: true, breaks: true}));
  };
});