import { Component, OnInit } from '@angular/core';

declare const alphaone: any;
declare const document: any;
declare const keyboard: any;
declare const context: any;
declare const getResponse: any;
declare const translateToEnglish: any;
declare const translateToTamil: any;
declare const getTamilResponse: any;
declare const keyboard_tamil: any;
declare const keyboard_sinhala: any;
declare const keyboard_english: any;
declare const getEnglishResponse: any;
declare const response: any;
declare const BASEURL: any;
declare const getCookie: any;



@Component({
  selector: 'app-si',
  templateUrl: './si.component.html',
  styleUrls: ['./si.component.scss']
})
export class SiComponent  {


  constructor()

  {   document.addEventListener('DOMContentLoaded', (event) => {
    alphaone.validateLicence('JYxaUD5sTYv0yRmledXNsucaxZVQIivMJYyN7bcenwEWGcPTGU5ZiwdQ21NKRxW9rRlzjINSXtQJqorPpMvISwtiWVqm8L9GTecKtTSUFqBtmbqarvuQdXBsSXy/Cx/hziS8FErlpS9PCXy5CzbDh+fWv5wWoNiIrIBrltl9U', this.callback);

});




}



  callback(){

  // const xhr = new XMLHttpRequest();
  if ( status === 'OK')
  {

}

}




   loadKeyboard(lang, textbox) {
    keyboard.KeyboardLayoutPlaceHolder = 'kb';
    keyboard.TextBox = textbox;
    document.getElementById('kb').innerHTML = keyboard.getKeyboard(lang);
   }

     speak(control) {
       alphaone.speech(control, 'si-LK');

  }


   suggest() {
    // document.getElementById("english_name").value = "";
    document.getElementById('english').innerHTML = '';
    document.getElementById('sinhala').innerHTML = '';
    document.getElementById('tamil').innerHTML = '';
    const word = document.getElementById('sinhala_name').value;
    alphaone.suggestion(1, 1, word, this.getResponse(), this.callback);
}





getResponse() {



  // const xhr = new XMLHttpRequest();
  const wordArray =  response.wordList;
    // document.getElementById("english_name").value = wordArray[0];
  wordArray.forEach((element) => {
        document.getElementById('sinhala').innerHTML +=
            '<option>' + element + '</option>';
    });
  translateToEnglish();
  translateToTamil();
}



 translateToEnglish() {
    document.getElementById('english_name').value = '';
    document.getElementById('english').innerHTML = '';
    const word = document.getElementById('sinhala_name').value;
    alphaone.translate(1, 3, word, 3, 'FirstName', 'AWS', getEnglishResponse, this.callback);
}
 getEnglishResponse() {


  const wordArray = response.wordList;
  document.getElementById('english_name').value = wordArray[0];
  wordArray.forEach((element) => {
        document.getElementById('english').innerHTML +=
            '<option>' + element + '</option>';
    });
}
 translateToTamil() {
    document.getElementById('tamil_name').value = '';
    document.getElementById('tamil').innerHTML = '';
    const word = document.getElementById('sinhala_name').value;
    alphaone.translate(1, 2, word, 3, 'FirstName', 'AWS', getTamilResponse, this.callback);
}
 getTamilResponse() {


  const wordArray = response.wordList;
  document.getElementById('tamil_name').value = wordArray[0];
  wordArray.forEach((element) => {
        document.getElementById('tamil').innerHTML +=
            '<option>' + element + '</option>';
    });
}













}














