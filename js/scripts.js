$(document).ready(function(){
  $("form#stress_test").submit(function(event){
    event.preventDefault();
    $("#stress-responses").show();
    $("input:checkbox[name=stress-affect]:checked").each(function(){
      var stressaffect = $(this).val();
      $('#stress-responses').append(stressaffect + "<br>");
    });
    $("#health-responses").show();
    $("input:checkbox[name=health-symptom]:checked").each(function(){
      var stressaffect = $(this).val();
      $('#health-responses').append(stressaffect + "<br>");
    });
    $("#treatment-responses").show();
    $("input:checkbox[name=treatment]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $('#treatment-responses').append(funTransportationMode + "<br>");
    });
    $('#stress_test').hide();
  });
});
