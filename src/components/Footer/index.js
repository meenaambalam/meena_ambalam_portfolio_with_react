import React from "react";
import "./style.css";

function Footer() {

  return (
    <div className="footer text-center">
      <p>"The best and most beautiful things in the world cannot be seen or even touched -- they must be felt
                    with the heart." -- Helen Keller</p>
      <span text-align="center"> &copy; { new Date().getFullYear() }       
      <a class="waves-effect waves-light btn" title="GitHub"
                                            href="https://github.com/meenaambalam/" target="_window"><i class="fa fa-github"></i></a>
      <a class="waves-effect waves-light btn" title="LinkedIn"
                                            href="https://www.linkedin.com/in/meena-ambalam-44b7b98/" target="_window">in</a>
      <a class="waves-effect waves-light btn" title="Email"
                                            href="mailto: meena.a.ambalam@gmail.com" target="_window"><i class="fa fa-envelope"></i></a>
      </span>
                     
    </div>
  );
}

export default Footer;
