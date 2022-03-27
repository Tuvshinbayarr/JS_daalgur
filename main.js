<script>
$('.Name').keyup(function() {
    $('span.error-keyup-2').remove();
    var inputVal = $(this).val();
    var characterReg = /^\s*[a-zA-Z,\s]+\s*$/;
    if(!characterReg.test(inputVal)) {
        $(this).after('<span class="error error-keyup-2" style="color:red">No special characters and numbers allowed.</span>');
    }
});


$('#email').keyup(function() {
    $('span.error-keyup-7').remove();
    var inputVal = $(this).val();
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,8})?$/;
    if(!emailReg.test(inputVal)) {
        $(this).after('<span class="error error-keyup-7" style="color:red">Invalid Email Format.</span>');
    }
});



$('#number').keyup(function() {
    $('span.error-keyup-8').remove();
    var inputVal = $(this).val();
    var emailReg = [0-9];
    if(!emailReg.test(inputVal)) {
        $(this).after('<span class="error error-keyup-8" style="color:red">Enter your number.</span>');
    }
 });
</script>

$('#msg').keyup(function() {
  $('span.error-keyup-8').remove();
  var inputVal = $(this).val();
  var emailReg = /^\s*[a-zA-Z,\s]+\s*$/;
  if(!emailReg.test(inputVal)) {
      $(this).after('<span class="error error-keyup-8" style="color:red">Enter your msg.</span>');
  }
});
</script>