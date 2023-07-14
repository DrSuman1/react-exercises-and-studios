export default function BookList() {
   let pageTitle = "Rainbow";
   let book1 = "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ1nEn8P5hIDPSyT6LJoVfMACsigvevoLYF1DPuv7oKISmsECD_LlJ8sGd4oBFgPtrOxE6tEhDxAO2tWp1QfXUsn_sOZPatO7VKFXeb4w&usqp=CAc"
   let book2 ="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRYZzAHX9qfo5tnKja8qKe1LVH4_F8jQ0Es2FFz76dPNkwt-PBKiTHOWaY8dKv89m7XgYmNG2KR97VysUadXpQNyK6Rt9R3qcO3lz8Mo4GzAMImsdrLtsEQ&usqp=CAc";
   let book3 = "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRgI417T0d2VhswQ1_hmGc0ujxnIhmMwneg98FQuSL_OaLVrO_vpt4i_S9XUTcQ8_T_tHM-mbrreA5Be0qHtMd9SyOMmhCRXfkYUtUcDhqH&usqp=CAc";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Undefeated minds" />
         <img src={book2} alt="The Mind Of the Leader!" />
         <img src={book3} alt="Nothing here!" />
      </div>      
   );
}