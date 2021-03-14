  //mobile nav bar 
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

  let JOSNRESPONSE= {};
  let index =[];

  let currentLanguage =  getLanguageCode();
  
  
  let jsonLanguage = getLanguageName(currentLanguage);
  
  let url = `/languages/${jsonLanguage}.json`;
  console.log(url);

  fetch(url).then(function(result){
    return result.json();

  }).then(function(data){
    JOSNRESPONSE = data;
    for(let i in JOSNRESPONSE){
      index.push(JOSNRESPONSE[i]);
      
    }
    
        for(let x=0; x<HTMLID.length;x++){
        document.getElementById(HTMLID[x]).innerHTML = index[x];
    }
  }).catch(function(error){
    console.log(error);
  })


}

window.onload =() =>{
  swapLanguage();
  
}
