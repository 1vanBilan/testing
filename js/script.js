"use strict";

const tab = document.querySelectorAll('.tab'),
      tabContent = document.querySelectorAll('.text_container'),
      tabsParent = document.querySelector('.header_tabs');


      function hideTabsContent() {
        tabContent.forEach(e=>{
            e.classList.remove('show');
            e.classList.add('hide');
        });
        tab.forEach(e=>{
            e.classList.remove('active_tab');
        });
        }
        let n;
        let curItem = localStorage.getItem('active_tab');
        function showTabsContent(n=0) {
        //  tabContent[n].classList.remove('hide');
         tabContent[n].classList.add('show');
         tab[n].classList.add('active_tab');
        }
        
hideTabsContent();
showTabsContent(curItem);

let tabsLength = 100 / tab.length;
console.log(tabsLength);

tab.forEach(e=>{
    e.style =`
    width:${tabsLength}%;
    `;
});


tabsParent.addEventListener('click', function(event) {
    const target = event.target;
    if(target && target.classList.contains('.tab'.slice(1)) ) {
        tab.forEach((item, n) => {
            if (target == item) {
                hideTabsContent();
                showTabsContent(n);
                localStorage.setItem('active_tab', n);
            }
        });
    }
});


    

