
  document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems, {});
  });


//Getting the language code off browser 

function getLanguageCode(){
  let language =  window.navigator.language
  return language;
  //return language code 
}



//3 languages English / German / French

