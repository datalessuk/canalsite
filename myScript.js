
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

function getLanguageName(pInput){
  if(pInput ==='en'){
    return 'english';
  }
  else if(pInput ==='fr'){
    return 'french';
  }
  return 'english';
    
}


function swapLanguage(){
  const HTMLID = ['nav_logo','nav_home','nav_about','nav_explore','small_heading','main_heading','main_button'
  ,'map_location','card_1','card_2','card_3','footer_logo','footer_copyright','footerright_h1','footerright_p1','footerright_p2']

  let currentLanguage =  getLanguageName();
  let jsonLanguage = getLanguageName(currentLanguage);
  
  let url = `/languages/${jsonLanguage}.json`;
  console.log(url);

  axios.get(url)
  .then(function(response){
    //code here

  })
  .catch(function(error){
    //error if any 
  })

  //for(let x=0;x<HTMLID.length;x++){
    //console.log(HTMLID[x]);
  //}

}



//3 languages English / German / French


window.onload =() =>{
  swapLanguage();
}