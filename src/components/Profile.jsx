import React from "react";
import './Profile.css';

const Profile = () => {
    return(
      <div className="content">
      <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
      <div className="content">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkTQ8DFOgujidIRil33r2QnSZ2Y_ZHahrUlw&usqp=CAU" />
    </div>
    <div>ava + description</div>
    <div>
      My posts
      <div>New post</div>
      <div>
        <div>post 1</div>
        <div>post 2</div>
        <div>post 3</div>
      </div>
    </div>
    </div>
    
    )
}

export default Profile;