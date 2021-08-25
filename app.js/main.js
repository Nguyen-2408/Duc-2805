
alert("Warning⚠🔞 nội dung có thể ảnh hưởng đến con mắt.Bạn có mốn tiếp tục?");
alert("Hỏi thật đấy bạn chắc chắn với quyết định này");


var result = confirm("Thề lần cuối tiếp tục chứ!!!");
        if (result == true) {
            alert("😁");
        } else {
            alert("😗");
        }



document.getElementById("calc").addEventListener("submit", calculate); 	
	
function calculate(e){
var radios = document.getElementsByName('gender');
var height = Number(document.getElementById("num1").value);
var weight = Number(document.getElementById("num2").value);
var height2 = height * height;
var bmi = (weight / height2)*10000;	
		e.preventDefault();
		document.getElementById("result").innerHTML = bmi.toFixed(2);
	for (var i = 0, length = radios.length; i < length; i++)
{
 if (radios[i].checked)
 {
    break;
 }
}
if (radios[i].value == 0){
	  
  if(bmi <= 18.5) {
		document.getElementById("message").innerHTML = "Gầy nhá!";
	 return;
	}
		else if (bmi <= 24.9) {
		document.getElementById("message").innerHTML = "Chuẩn đấy😋!";
	return;
	}
	
  else if (bmi <= 27.3) {
		document.getElementById("message").innerHTML = "Sao nhỉ! Hơi béo nhá";
	return;
	}
	
  else if (bmi <= 32.3) {
		document.getElementById("message").innerHTML = "Bước đầu tiến hóa thành 🐖!";
	return;
	}
	
  else if (bmi <= 45.0) {
		document.getElementById("message").innerHTML = "Con lợn chính hiệu!";
	return;
	}
	
  else if (bmi => 45.1) {
	    document.getElementById("message").innerHTML = "Ảo quá nhập lại đi!";
	return;
	} 
  }
	else{
			if (bmi <= 20.5) {
		document.getElementById("message").innerHTML = "Gầy nhá!";
	 return;
	}
   else if (bmi <= 25.9) {
		document.getElementById("message").innerHTML = "Bình thường!";
	return;
	}
	
   else if (bmi <= 29.3) {
		document.getElementById("message").innerHTML = "Bước đầu trở thành 🐖";
	return;
	}
	
   else if (bmi <= 34.3) {
		document.getElementById("message").innerHTML = "Thừa cân!";
	return;
	}
	
  else if (bmi <= 45.0) {
		document.getElementById("message").innerHTML = "Béo phì rồi!";
	return;
	}
	
  else if (bmi => 45.1) {
	    document.getElementById("message").innerHTML = "Too béo phì!";
	return;
	}else{
		document.getElementById("message").innerHTML = "Hơi ảo nhập lại nào!!"
	}	
 }
}
