// IMPORT REACT

import Consumer from "../../configContext.js";
import API from "../../utils/API";
import Style from "./style.css";
import React, { useEffect } from "react";
import M from 'materialize-css/dist/js/materialize.min.js';


const Settings = () => {
    useEffect(() => {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, {});
      }, []);
    
return(
<Consumer>
{context => {
return(<div>
<div className="center">
<h1>Settings</h1>
<br />
<hr />
</div>

<div className="row settingsHolder">
<form>
<div className="input-field">
    <select className="icons">
      <option value="" disabled>Pick your inner artist</option>
      <option value="https://res.cloudinary.com/artiste-defamme/image/upload/v1582501287/Avatars/picasso_hrcsqc.jpg" data-icon="https://res.cloudinary.com/artiste-defamme/image/upload/v1582501287/Avatars/picasso_hrcsqc.jpg">Picasso</option>
      <option value="https://res.cloudinary.com/artiste-defamme/image/upload/v1582501275/Avatars/henri-matisse_cappwk.jpg" data-icon="https://res.cloudinary.com/artiste-defamme/image/upload/v1582501275/Avatars/henri-matisse_cappwk.jpg">Henri Matisse</option>
      <option value="https://res.cloudinary.com/artiste-defamme/image/upload/v1582501274/Avatars/manet_x2xaty.jpg" data-icon="https://res.cloudinary.com/artiste-defamme/image/upload/v1582501274/Avatars/manet_x2xaty.jpg">Eduoard Manet</option>
      <option value="https://res.cloudinary.com/artiste-defamme/image/upload/v1582501267/Avatars/warhol_gqekix.jpg" data-icon="https://res.cloudinary.com/artiste-defamme/image/upload/v1582501267/Avatars/warhol_gqekix.jpg">Andy Warhol</option>
      <option value="https://res.cloudinary.com/artiste-defamme/image/upload/v1582501262/Avatars/monet_y2sswv.jpg" data-icon="https://res.cloudinary.com/artiste-defamme/image/upload/v1582501262/Avatars/monet_y2sswv.jpg">Claude Monet</option>
      <option value="https://res.cloudinary.com/artiste-defamme/image/upload/v1582501259/Avatars/vangogh_dvnwlb.jpg" data-icon="https://res.cloudinary.com/artiste-defamme/image/upload/v1582501259/Avatars/vangogh_dvnwlb.jpg">Van Gogh</option>
      <option value="https://res.cloudinary.com/artiste-defamme/image/upload/v1582501257/Avatars/Degas_mdnkes.jpg" data-icon="https://res.cloudinary.com/artiste-defamme/image/upload/v1582501257/Avatars/Degas_mdnkes.jpg">Edgar Degas</option>
      <option value="https://res.cloudinary.com/artiste-defamme/image/upload/v1582501257/Avatars/kahlo_iiltyv.jpg" data-icon="https://res.cloudinary.com/artiste-defamme/image/upload/v1582501257/Avatars/kahlo_iiltyv.jpg">Frida Kahlo</option>
      <option value="https://res.cloudinary.com/artiste-defamme/image/upload/v1582501256/Avatars/cezanne_gxj66o.jpg" data-icon="https://res.cloudinary.com/artiste-defamme/image/upload/v1582501256/Avatars/cezanne_gxj66o.jpg">Paul Cezanne</option>
      <option value="https://res.cloudinary.com/artiste-defamme/image/upload/v1582501254/Avatars/renoir_uk1pug.jpg" data-icon="https://res.cloudinary.com/artiste-defamme/image/upload/v1582501254/Avatars/renoir_uk1pug.jpg">Perre-Auguste Renoir</option>
      <option value="https://res.cloudinary.com/artiste-defamme/image/upload/v1582501253/Avatars/okeefe_ldzrgr.jpg" data-icon="https://res.cloudinary.com/artiste-defamme/image/upload/v1582501253/Avatars/okeefe_ldzrgr.jpg">Perre-Auguste Renoir</option>

    </select>
    <label>Change your avatar!</label>
  </div>
</form>

</div>
</div>)





}}




</Consumer>




)



}

export default Settings;