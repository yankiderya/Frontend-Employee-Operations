var selectedRow = null

$(document).ready(function() {

    $("#il").change(function() {
       var val = $(this).val();
        if (val == "İstanbul") {
             $("#ilce").prop("disabled",false);
            $("#ilce").html("<option value=''>Seçiniz</option><option value='Kadıköy'>Kadıköy</option><option value='Şişli'>Şişli</option>");
        } else if (val == "Ankara") {
            $("#ilce").prop("disabled",false);
            $("#ilce").html("<option value=''>Seçiniz</option><option value='Sincan'>Sincan</option><option value='Çankaya'>Çankaya</option>");

        } else if (val == "") {
            $("#ilce").prop("disabled",true);
        }
        
    });


});

// Restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}


// Install input filters.
setInputFilter(document.getElementById("isim"), function(value) {
  return /^[a-zA-ZğüışöçİĞÜŞÖÇ]*$/i.test(value); });
setInputFilter(document.getElementById("soyisim"), function(value) {
  return /^[a-zA-ZğüışöçİĞÜŞÖÇ]*$/i.test(value); });




    

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["isim"] = document.getElementById("isim").value;
    formData["soyisim"] = document.getElementById("soyisim").value;
    formData["dogumgunu"] = document.getElementById("dogumgunu").value;
    formData["cinsiyet"] = document.getElementById("cinsiyet").value;
    formData["girisTarihi"] = document.getElementById("girisTarihi").value;
    formData["cikisTarihi"] = document.getElementById("cikisTarihi").value;
    formData["il"] = document.getElementById("il").value;
    formData["ilce"] = document.getElementById("ilce").value;
    formData["aktiflik"] = document.getElementById("aktiflik").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.isim;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.soyisim;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.dogumgunu;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.cinsiyet;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.girisTarihi;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.cikisTarihi;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.il;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.ilce;
    cell9 = newRow.insertCell(8);
    if(data.aktiflik == "0" ){
        cell9 = newRow.insertCell(8);
      cell9.innerHTML = `<span style='height:25px; width:25px; 
                        background-color:red; border-radius:50%; display:inline-block;'class="dot"></span>`;  
    }
    else{
        cell9 = newRow.insertCell(8);
    cell9.innerHTML = `<span style='height:25px; width:25px; 
                        background-color:green; border-radius:50%; display:inline-block;'class="dot"></span>`;  
    }
    
     
    
    cell9 = newRow.insertCell(9);
    cell9.innerHTML = `<a onClick="onEdit(this)"><img alt="Edit" style="width:20px;"src="http://icons.iconarchive.com/icons/custom-icon-design/mono-general-2/256/edit-icon.png"</a>
                       <a onClick="onDelete(this)"><img alt="Delete" style="width:20px;"src="http://icons.iconarchive.com/icons/wwalczyszyn/android-style/256/Trash-empty-icon.png"</a>`;
}

function resetForm() {
    document.getElementById("isim").value = "";
    document.getElementById("soyisim").value = "";
    document.getElementById("dogumgunu").value = "";
    document.getElementById("cinsiyet").value = "";
    document.getElementById("girisTarihi").value = "";
    document.getElementById("cikisTarihi").value = "";
    document.getElementById("il").value = "";
    document.getElementById("ilce").value = "";
    document.getElementById("aktiflik").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
        document.getElementById("isim").value = selectedRow.cells[0].innerHTML;
        document.getElementById("soyisim").value = selectedRow.cells[1].innerHTML;
        document.getElementById("dogumgunu").value = selectedRow.cells[2].innerHTML;
        document.getElementById("cinsiyet").value = selectedRow.cells[3].innerHTML;
        document.getElementById("girisTarihi").value = selectedRow.cells[4].innerHTML;
        document.getElementById("cikisTarihi").value = selectedRow.cells[5].innerHTML;
        document.getElementById("il").value = selectedRow.cells[6].innerHTML;
        document.getElementById("ilce").value = selectedRow.cells[7].innerHTML;
        document.getElementById("aktiflik").value = selectedRow.cells[8].innerHTML;
    }
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.isim;
    selectedRow.cells[1].innerHTML = formData.soyisim;
    selectedRow.cells[2].innerHTML = formData.dogumgunu;
    selectedRow.cells[3].innerHTML = formData.cinsiyet;
    selectedRow.cells[4].innerHTML = formData.girisTarihi;
    selectedRow.cells[5].innerHTML = formData.cikisTarihi;
    selectedRow.cells[6].innerHTML = formData.il;
    selectedRow.cells[7].innerHTML = formData.ilce;
    if(formData.aktiflik == "0" ){
       
      selectedRow.cells[8].innerHTML  = `<span style='height:25px; width:25px; 
                        background-color:red; border-radius:50%; display:inline-block;'class="dot"></span>`;  

    }
    else{
       selectedRow.cells[8].innerHTML  = `<span style='height:25px; width:25px; 
                        background-color:green; border-radius:50%; display:inline-block;'class="dot"></span>`;  
    }
   
}

function onDelete(td) {
    if (confirm('Kaydı silmek istediğinizden emin misiniz?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
     var isim = document.getElementById("isim").value;
    var soyisim =document.getElementById("soyisim").value ;
    var cinsiyet = document.getElementById("cinsiyet").value ;
    var il = document.getElementById("il").value ;
    var ilce = document.getElementById("ilce").value ;
    var aktiflik = document.getElementById("aktiflik").value ;

    if (isim == ""  ) {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    if (soyisim == ""  ) {
        isValid = false;
        document.getElementById("surnameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("surnameValidationError").classList.contains("hide"))
            document.getElementById("surnameValidationError").classList.add("hide");
    }
    if (cinsiyet == ""  ) {
        isValid = false;
        document.getElementById("genderValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("genderValidationError").classList.contains("hide"))
            document.getElementById("genderValidationError").classList.add("hide");
    }
    if (il == ""  ) {
        isValid = false;
        document.getElementById("cityValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("cityValidationError").classList.contains("hide"))
            document.getElementById("cityValidationError").classList.add("hide");
    }
    if (ilce == ""  ) {
        isValid = false;
        document.getElementById("townValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("townValidationError").classList.contains("hide"))
            document.getElementById("townValidationError").classList.add("hide");
    }
    if (aktiflik == ""  ) {
        isValid = false;
        document.getElementById("activityValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("activityValidationError").classList.contains("hide"))
            document.getElementById("activityValidationError").classList.add("hide");
    }
    return isValid;
}


    window.onbeforeunload = function() {
        return "";
    }
