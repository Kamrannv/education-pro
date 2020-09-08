//Img preview
      
$(document).ready(function() {
    if (window.File && window.FileList && window.FileReader) {
      $("#files").on("change", function(e) {
        var files = e.target.files,
          filesLength = files.length;
        for (var i = 0; i < filesLength; i++) {
          var f = files[i]
          var fileReader = new FileReader();
          fileReader.onload = (function(e) {
            var file = e.target;
            var del = `<`
           
            $("<span class=\"pip\">" +
              "<img class=\"imageThumb\" src=\"" + e.target.result + "\" title=\"" + file.name + "\"/>" +
              "<br/><span class=\"remove\"><img class=\"imageThumb\" src=\"images/rem.png" +  + "\" title=\"" + + "\"/></span>" +
              "</span>").insertAfter("#files");
            $(".remove").click(function(){
              $(this).parent(".pip").remove();
            });
            
            // Old code here
            /*$("<img></img>", {
              class: "imageThumb",
              src: e.target.result,
              title: file.name + " | Click to remove"
            }).insertAfter("#files").click(function(){$(this).remove();});*/
            
          });
          fileReader.readAsDataURL(f);
        }
        console.log(files);
      });
    } else {
      alert("Your browser doesn't support to File API")
    }
  });
  
  
  
  
          //second tab
    function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  //Add new field//
  
  $('.multi-field-wrapper').each(function() {
      var $wrapper = $('.multi-fields', this);
     
     
      $(".add-field", $(this)).click(function(e) {
          $('.multi-field:first-child', $wrapper).clone(true).appendTo($wrapper).find('input').val('').focus();
          
          $(".multi-field").removeClass('.del');
          console.log('axaxaxaxax')
      });
     
      $('.multi-field .remove-field', $wrapper).click(function() {
          if ($('.multi-field', $wrapper).length > 1)
         
              $(this).parent('.multi-field').remove();
      });
  });
          //file upload
          
  $(document).on('click', '.upload-field', function(){
    var file = $(this).parent().parent().parent().find('.input-file');
    file.trigger('click');
  });
  $(document).on('change', '.input-file', function(){
    $(this).parent().find('.form-control').val($(this).val().replace(/C:\\fakepath\\/i, ''));
  });
          //drag-drop
          let dropArea = document.getElementById('drop-area');
          ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false)
  })
  
  function preventDefaults (e) {
    e.preventDefault()
    e.stopPropagation()
  }
  ;['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false)
  })
  
  ;['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false)
  })
  
  function highlight(e) {
    dropArea.classList.add('highlight')
  }
  
  function unhighlight(e) {
    dropArea.classList.remove('highlight')
  }
  dropArea.addEventListener('drop', handleDrop, false)
  
  function handleDrop(e) {
    let dt = e.dataTransfer
    let files = dt.files
  
    handleFiles(files)
  }
  function handleFiles(files) {
    ([...files]).forEach(uploadFile)
  }
  function uploadFile(file) {
    let url = 'YOUR URL HERE'
    let formData = new FormData()
  
    formData.append('file', file)
  
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(() => { /* Done. Inform the user */ })
    .catch(() => { /* Error. Inform the user */ })
  }
  
   
  //select
  jQuery(function($) {
    $('.select2-multiple').select2MultiCheckboxes({
      placeholder: "Choose multiple elements",
      width: "auto"
    })
    $('.select2-multiple2').select2MultiCheckboxes({
      templateSelection: function(selected, total) {
        return "Selected " + selected.length + " of " + total;
      }
    })
    $('.select2-original').select2({
      placeholder: "Choose elements",
      width: "100%"
    })
  });
  //tab
  $(document).ready(function(){ 
      $('.tab-a').click(function(){  
        $(".tab").removeClass('tab-active');
        $(".tab[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
        $(".tab-a").removeClass('active-a');
        $(this).parent().find(".tab-a").addClass('active-a');
       });
  });
  //upload
  $(document).ready(function() {
  
      
  var readURL = function(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();
  
          reader.onload = function (e) {
              $('.profile-pic').attr('src', e.target.result);
          }
  
          reader.readAsDataURL(input.files[0]);
      }
  }
  
  
  $(".file-upload").on('change', function(){
      readURL(this);
  });
  
  $(".upload-button").on('click', function() {
     $(".file-upload").click();
  });
  });
  