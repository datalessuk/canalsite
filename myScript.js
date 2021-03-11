
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    
    var instances = M.Dropdown.init(elems, {});
    
   
    
    
  });
  



  document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems, {});
  });


  let x = document.querySelector('#dropdown1');

  console.log(x.value);
  
  //function getLanguageCode(){

    //let x = document.getElementById('french');
    //x.addEventListener('click',languagefr);
  
//  }

  //let x = document.getElementById('french');
  //x.addEventListener('click',languagefr);
  
//  function languagefr(){
  //  window.alert('french');
  //}
