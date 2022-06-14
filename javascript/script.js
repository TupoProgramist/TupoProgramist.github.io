$(document).ready(function (){
    long.onclick = function(){
        var in_val = input.value.toLowerCase();
        open('https://www.ldoceonline.com/dictionary/'+in_val,'_blank');}
    oxf.onclick = function(){
        var in_val = input.value.toLowerCase();
        window.open('https://www.oxfordlearnersdictionaries.com/definition/english/'+in_val,'_blank');}
    oxf_col.onclick = function(){
        var in_val = input.value.toLowerCase();
        window.open('https://www.freecollocation.com/search?word='+in_val,'_blank');}
    thes.onclick = function(){
        var in_val = input.value.toLowerCase();
        window.open('https://www.thesaurus.com/browse/'+in_val,'_blank');}
    youglish.onclick = function(){
        var in_val = input.value.toLowerCase();
        window.open('https://youglish.com/pronounce/'+in_val,'_blank');}
    etym.onclick = function(){
        var in_val = input.value.toLowerCase();
        window.open('https://www.etymonline.com/search?q='+in_val,'_blank');}
    gTrans.onclick = function(){
        var in_val = input.value.toLowerCase();
        window.open('https://translate.google.com/?sl=en&tl=uk&text='+in_val,'_blank');}
    deepl.onclick = function(){
        var in_val = input.value.toLowerCase();
        window.open('https://www.deepl.com/translator#en/ru/'+in_val,'_blank');}

});