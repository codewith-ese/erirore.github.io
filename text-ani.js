var wss_i = 0;
var wss_array = [ "welcome to ese blessed",

				  "<img src='slideimage2/0a.jpg'>",
                  "<img src='slideimage2/0h.jpg'>",
				   "<img src='slideimage2/0j.jpg'>",
                     "<img src='slideimage2/0b.jpg'>",
                    "<img src='slideimage2/0a.jpg'>",
                  "<img src='slideimage2/0c.jpg'>",
				  "<img src='slideimage2/0d.jpg'>",
                     "<img src='slideimage2/0e.jpg'>",
                    "<img src='slideimage2/0f.jpg'>",
                  "<img src='slideimage2/0c.jpg'>",
				  "<img src='slideimage2/0g.jpg'>",
                     "<img src='slideimage2/0a.jpg'>",
                    "<img src='slideimage2/0i.jpg'>",
                  "<img src='slideimage2/0c.jpg'>",
                  "FURNITURE AND INTIRIOR DECORATION",
                  "CUSTOMAR IS A KING ",
                  "WE DELIVER TO YOUR DOOR STEP",
                  "WE GIVE THE BEST FINICHING  ",
                  "WE GIVE BEST QUALITY AND PROFECTIONA ITERIOR DECOR",];
var wss_elem;
function wssNext(){
   wss_i++;
   wss_elem.style.opacity = 0;
   if(wss_i > (wss_array.length -1)){
   wss_i = 0;
   }
   setTimeout('wssSlide()' , 2000);
}
function wssSlide(){
  wss_elem.innerHTML = wss_array[wss_i];
  wss_elem.style.opacity = 1;
  setTimeout('wssNext()' , 5000);
}
