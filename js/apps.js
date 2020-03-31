'use strict'
let ibrahim;
let majd;


$.get('./data/page-1.json')
    .then(galeryOfHorns => {
        galeryOfHorns.forEach((val) => {


            ibrahim = new Horns(val.image_url, val.title, val.description, val.keyword, val.horns);

            ibrahim.printOut();

        });

        renderSelect()
        // $('.hide').remove()

    });





    $.get('./data/page-2.json')
    .then(page2 => {
        page2.forEach((val) => {


             majd = new Page2(val.image_url, val.title, val.description, val.keyword, val.horns);

            // majd.printOut();

        });

        renderSelect()
        // $('.hide').remove()

    });







let hornsArray = []


function Horns(image_url, title, description, keyword, horns) {
    this.image_url = image_url;
    this.title = title;
    this.description = description;
    this.keyword = keyword;
    this.horns = horns;
    keywordArray.push(this.keyword)
    hornsArray.push(this)

}


let page2Array  =[]; 

function Page2(image_url, title, description, keyword, horns) {
    this.image_url = image_url;
    this.title = title;
    this.description = description;
    this.keyword = keyword;
    this.horns = horns;
    keywordArray.push(this.keyword)
page2Array.push(this)

}


var keywordArray = []

let unRepeatArray =[]

Horns.prototype.printOut = function () {

    // let options = $('#keywordstemplate').html();
    // var rendered = Mustache.render(options , this);
    // $('header select').append(rendered);
  

    let choose = $('#template').html();
let html = Mustache.render(choose,this)
console.log(choose)
let sections = $('#photo-template').append(html);
console.log(sections)
$('main').append(sections)


}


Page2.prototype.printOut = function () {

    // let options = $('#keywordstemplate').html();
    // var rendered = Mustache.render(options , this);
    // $('header select').append(rendered);
  

    let choose = $('#template').html();
let html = Mustache.render(choose,this)
console.log(choose)
let sections2 = $('#photo-template-page2').append(html);
console.log(sections2)
$('main').append(sections2)

}


$(`div`).hide()

$('#selectEle').on('change' ,function(){
    console.log($('#selectEle').val())

    for(let i =0 ;i< unRepeatArray.length ; i++)  {
    if ($(`#selectEle`).val() == unRepeatArray[i]){
            $(`div`).hide()

            console.log($(`div`).hide())
            $(`.${unRepeatArray[i]}`).show()
}

if ($('#selectEle').val() == 'default'){
    $(`div`).show()
}
    }
})


 function renderSelect(){
    for (let i = 0; i < keywordArray.length; i++) {
        if (unRepeatArray.indexOf(keywordArray[i]) === -1) {

            // This method returns -1 if the value to search for never occurs......................................................


            unRepeatArray.push(keywordArray[i]);

            

        }
    }
    for (let i = 0; i < unRepeatArray.length; i++) {
        $('#selectEle').append(`<option value ='${unRepeatArray[i]}'>${unRepeatArray[i]}</option>`);
    }

 }

 $('#button1').on('click',function(){
     $('#photo-template-page2').empty();
     let choose = $('#template').html();
    //  let html = Mustache.render(choose,this)
    //  console.log(choose)
    //  let sections = $('#photo-template').append(html);
    //  console.log(sections)
    //  $('main').append(sections)
    for ( let i = 0 ; i<hornsArray.length; i++){
        hornsArray[i].printOut();
    }
 })


 $('#button2').on('click',function(){
    $('#photo-template').empty();
    let choose = $('#template').html();
// let html = Mustache.render(choose,this)
// console.log(choose)
// let sections2 = $('#photo-template-page2')
// $('main').append(sections2)
for ( let i = 0 ; i<page2Array.length; i++){

    page2Array[i].printOut();
}
})

$('#sorting').on('change',function(){
    console.log(this.value)
    hornsArray.sort
    if(this.value=='by-title'){

    }

})
var  hornsByTitle  = hornsArray.sort((a,b) =>
a.title.toUpperCase() >b.title.toUpperCase()


);
