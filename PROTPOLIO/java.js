// import React from 'react';
// import Typed from 'typed.js';

// function MyComponent() {
//   // Create reference to store the DOM element containing the animation
//   const el = React.useRef(null);

//   React.useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
//       typeSpeed: 50,
//     });

//     return () => {
//       // Destroy Typed instance during cleanup to stop animation
//       typed.destroy();
//     };
//   }, []);

//   return (
//     <div className="App">
//       <span ref={el} />
//     </div>
//   );
// }
var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
  for(tablinks of tablinks){
    tablinks.classlist.remove("active-links");
  }
  for(tabcontents of tabcontents){
    tabcontents.classlist.remove("active-tab");
  }
}
