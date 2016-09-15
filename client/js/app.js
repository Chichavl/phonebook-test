var readRecords = function() {
    $.getJSON('/api/v1/phones/', function(data) {
  console.log(data);
    if (data.status == "Ok") {
        var tableCode = '';
            tableCode += '<div class="table-responsive"><table id="mytable" class="table table-bordred table-striped">';
            tableCode += '<thead><th>Name</th><th>City</th><th>Street</th><th>Date of Birth</th><th>Phone</th>';
            tableCode += '<th>Edit</th><th>Delete</th></thead><tbody>';
        data.msg.forEach(function(element, index, array) {
            tableCode += '<tr><td>' + element.surname + " " + element.middleName + " " + element.name + '</rd>';
            tableCode += '<td>' + element.city + '</rd>';
            tableCode += '<td>' + element.street + '</rd>';
            tableCode += '<td>' + element.dob + '</rd>';
            tableCode += '<td>' + element.phone + '</rd>';
            tableCode += '<td><button class="btn btn-xs btn-warning" data-toggle="modal" data-target="#createModal" data-title="Edit record" data-id=' + '"' + element._id + '"' + '"><i class="fa fa-pencil" aria-hidden="true"></i></button></rd>';
            tableCode += '<td><button class="btn btn-xs btn-danger" onClick="removeRecord(' + "'" + element._id + "'" + ')"><i class="fa fa-minus" aria-hidden="true"></i></button></rd></tr>';
        });
        tableCode +='</tbody></table></div>';
        $("#result").html(tableCode)
    }
    else {
        $("#result").html('<h6>Api error</h6><p>'+ data.msg + '</p>');
    }
});  
};

var createRecord = function () {
    $("#createModal").modal('hide');
    $("#result").html('<div class="text-center">Working...</div>');
    var record = {
        "surname": $("#surname").val(),
        "name": $("#name").val(),
        "middleName": $("#middleName").val(),
        "city": $("#city").val(),
        "street": $("#street").val(),
        "dob": $("#dob").val(),
        "phone": $("#phone").val()
    };
    console.log(record)
    id = $("#_id").val()
    if (id == '') {
        // New record insert
        $.ajax({
        url: '/api/v1/phones/',
        type: 'POST',
        data: record,
        error: function (error) {
            console.log(error)
        },
        success: function(result) {
            readRecords();
        }
        });
    }
    else {
        // Old record update
        $.ajax({
        url: '/api/v1/phones/' + id,
        type: 'PUT',
        data: record,
        error: function (error) {
            console.log(error)
        },
        success: function(result) {
            readRecords();
        }
        });
    }
}

var removeRecord = function (id) {
    $("#result").html('<div class="text-center">Working...</div>');
    $.ajax({
    url: '/api/v1/phones/'+ id,
    type: 'DELETE',
    error: function (error) {
            console.log(error)
        },
    success: function(result) {
        readRecords();
    }
});
}

$(document).ready(function () {
    readRecords();
});


$('#createModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var modalTitle = button.data('title') // Extract info from data-* attributes
    var id = button.data('id') || '';
    var modal = $(this)
    //Reset form input fields
    $('form').get(0).reset();
    
  if (id != '') {
      $.getJSON('/api/v1/phones/'+id, function(data) {
        if (data.status == "Ok") {
            $("#surname").val(data.msg[0].surname),
            $("#name").val(data.msg[0].name),
            $("#middleName").val(data.msg[0].middleName),
            $("#city").html('<option value="'+ data.msg[0].city +'">' + data.msg[0].city + '</option>'),
            $("#street").html('<option value="'+ data.msg[0].street +'">' + data.msg[0].street + '</option>'),
            $("#dob").val(data.msg[0].dob),
            $("#phone").val(data.msg[0].phone)
            
            modal.find('.modal-title').text(modalTitle)
            $("#_id").val(id)
        }
        else {
            $("#createModal").modal('hide');
            $("#result").html('<h6>Api error</h6><p>'+ data.msg + '</p>');
        }
      });
  }
  else {
      modal.find('.modal-title').text(modalTitle)
      $("#_id").val(id)
  }
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text(modalTitle)
})

var readCities = function() {
    $.getJSON('/api/v1/cities/', function(data) {
  console.log(data);
    if (data.status == "Ok") {
        var code = '';
        data.msg.forEach(function(element, index, array) {
            code += '<option value="' + element.name + '">' + element.name + '</option>';
        });
        $("#city").append(code)
    }
    else {
        $("#city").append('Api error');
        console.log(data.msg);
    }
});  
};

$("#cityaddshowbtn").click(function(e){
    e.preventDefault();
    $("#cityadd").removeClass('hidden');
    $("#cityaddbtn").removeClass('hidden');
});

$("#cityaddbtn").click(function(e){
    e.preventDefault();
    var record = {
        "name": $("#cityadd").val()
    };
        // New record insert
        $.ajax({
        url: '/api/v1/cities/',
        type: 'POST',
        data: record,
        success: function(result) {
            $("#cityadd").addClass('hidden');
            $("#cityaddbtn").addClass('hidden');
            $("#cityadd").val("")
            console.log("City added")
        }
        });
});