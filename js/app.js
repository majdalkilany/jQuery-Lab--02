'use strict'
$(document).ready(function () {

  let animalsObj = [];

  function Img(img) {
    this.image_url = img.image_url;
    this.title = img.title;
    this.description = img.description;
    this.keyword = img.keyword;
    this.horns = img.horns;
  }

  $("select").change(function () {

    let selectValue = $("select")[0].value;
    let children = $('section');

    for (let i = 0; i < 21; i++) {
      if (selectValue === children[i].children[1].alt) {
        let parent = children[i];
        parent.style.display = 'block';
      }

      else if (selectValue === 'Filter by Keyword') {
        let parent = children[i];
        parent.style.display = 'block';
      }

      else {
        let parent = children[i];
        parent.style.display = 'none';
      }

    }
  });

  Img.prototype.render = function () {

    let $keywordstemplate = $('#keywordstemplate').html();
    var rendered = Mustache.render($keywordstemplate, this);
    $('header select').append(rendered);

    let $hornsTemplate = $('#horns-template').html();
    var rendered = Mustache.render($hornsTemplate, this);
    $('main').append(rendered);
  };

  let readJson = () => {
    $.ajax("data/page-1.json", { method: "GET", dataType: "JSON" }).then(data => {
      data.forEach(imgItem => {
        let img = new Img(imgItem);
        img.render();
        animalsObj.push(img);
      });
    });
  };


  let readJson2 = () => {
    $.ajax("data/page-2.json", { method: "GET", dataType: "JSON" }).then(data => {
      data.forEach(imgItem => {
        let img = new Img(imgItem);
        img.render();
        animalsObj.push(img);
      });
    });
  };
  readJson();


  $('button').click(function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    if ($(this).attr('id') === 'button1') {
      $('main').empty();
      $('select').empty();
      let $keywordstemplate = $('#keywordstemplate').html();
      var rendered = Mustache.render($keywordstemplate, { keyword: 'Filter by Keyword' });
      $('select').append(rendered);
      readJson();
    }

    else if ($(this).attr('id') === 'button3'){
      var list = $("main > section").get();
      list.sort(sort_by_title);
      for (var i = 0; i < list.length; i++) {
        list[i].parentNode.appendChild(list[i]);
      }
    }
      else if ($(this).attr('id') === 'button4'){
        var list = $("main > section").get();
        list.sort(sort_by_horns);
        for (var i = 0; i < list.length; i++) {
          list[i].parentNode.appendChild(list[i]);
        }
  
    }

    else {
      $('main').empty();
      $('select').empty();
      let $keywordstemplate = $('#keywordstemplate').html();
      var rendered = Mustache.render($keywordstemplate, { keyword: 'Filter by Keyword' });
      $('select').append(rendered);
      readJson2();
    }

  });

  var sort_by_title = function (a, b) {
    return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
  }
  var sort_by_horns = function (a, b) {
    // console.log(a.children[2].children[1].children[0].textContent)
    if (Number(a.children[2].children[1].children[0].textContent) > Number(b.children[2].children[1].children[0].textContent)){
      return 1;
    }

    else if (Number(a.children[2].children[1].children[0].textContent) < Number(b.children[2].children[1].children[0].textContent)){
      return -1;
    }

    else {
      return 0;
    }
  }

});

