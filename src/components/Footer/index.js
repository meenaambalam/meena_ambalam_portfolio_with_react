import React from "react";
import "./style.css";
import myInfo from "../../data/MyInfo.json";

//Footer function component
function Footer() {
  const mailtotag = "mailto: " + myInfo.email;
  return (
    <div className="footer text-center">
      <p>"The best and most beautiful things in the world cannot be seen or even touched -- they must be felt
                    with the heart." -- Helen Keller</p>
      <span text-align="center"> &copy; { new Date().getFullYear() }       
      <a class="waves-effect waves-light btn" title="GitHub"
                                            href={myInfo.github} target="_window"><i class="fa fa-github"></i></a>
      <a class="waves-effect waves-light btn" title="LinkedIn"
                                            href={myInfo.linkedin} target="_window">in</a>
      <a class="waves-effect waves-light btn" title="Email"
                                            href={mailtotag} target="_window"><i class="fa fa-envelope"></i></a>
      </span>
                     
    </div>
  );
}

export default Footer;