'use strict'
let ibrahim;
$.get('./data/page-1.json')
    .then(galeryOfHorns => {
        galeryOfHorns.forEach((val) => {


            let ibrahim = new Horns(val.image_url, val.title, val.description, val.keyword, val.horns);

            ibrahim.render();

        });

        renderSelect()
        $('.hide').remove()

    });

function Horns(image_url, title, description, keyword, horns) {
    this.image_url = image_url;
    this.title = title;
    this.description = description;
    this.keyword = keyword;
    this.horns = horns;
    keywordArray.push(this.keyword)


}
var keywordArray = []

let unRepeatArray =[]
let p;

Horns.prototype.render = function () {

    let choose = $('#photo-template').clone();
    choose.find('h2').text(this.title);
    choose.attr('class', this.keyword)
    choose.find('img').attr({ 'src': this.image_url, 'width': 300, 'class': 'cssClass', 'hight': 250 });
    choose.find('p').text(this.description);
    $('main').append(choose);

    // keywordArray.push(this.keyword)

}

$('#selectEle').on('change' ,function(){
    console.log($('#selectEle').val())

    for(let i =0 ;i< unRepeatArray.length ; i++)  {
    if ($('#selectEle').val() == unRepeatArray[i]){
            $(`section`).hide()
            $(`.${unRepeatArray[i]}`).show()

    }
    if ($('#selectEle').val() == unRepeatArray[i]){

    
}

if ($('#selectEle').val() == 'default'){
    $(`section`).show()
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
        $('select').append(`<option value ='${unRepeatArray[i]}'>${unRepeatArray[i]}</option>`);
        console.log('mmmmm  ' + unRepeatArray[i])
    }

 }
