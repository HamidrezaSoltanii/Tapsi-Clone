   const toggler = document.querySelector(".nav__toggler");
   const navbar = document.querySelector(".nav");
   toggler.addEventListener("click", (e) =>  {
       navbar.classList.toggle("nav__expanded");
   }); 
// <section class="tab-section">
//  <ul class="tabs">
//      <li class="tab active" data-tab-target="tab-one">tab -1</li>
//      <li class="tab" data-tab-target="tab-two">tab -2</li>
//      <li class="tab" data-tab-target="tab-three">tab -3</li>
//  </ul>
//  <div class="">
//  <div class="tab-content active" id="tabe-one">tab one content</div>
//  <div class="tab-content" id="tabe-two">tab two content</div>
//  <div class="tab-content" id="tabe-three">tab three content</div>
//  </div>
// </section>

 
 const tabs = document.querySelectorAll(".tab");
 const tabContents = document.querySelectorAll(".tab-content");
 tabs.forEach((tab) => {
     tab.addEventListener("click", (e) => {
      const targeTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);

      // REMOVE PREVIOUS ACTIVED CLASSES
     tabs.forEach((tab) => tab.classList.remove("active"));
      tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

     //  ADD NEW ACTIVE ALASSES
     tab.classList.add("active");
     targeTabContent.classList.add("active");
     });   
 }); 


 

