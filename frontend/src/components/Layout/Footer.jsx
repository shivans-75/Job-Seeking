import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
//import { MdEmail } from "react-icons/md";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved.</div>
      <div>
        <Link to={"https://github.com/shivans-75"} target="_blank">
          <FaGithub />
        </Link>
        <Link to={"https://linkedin.com/in/shivansh-nautiyal-2f003"} target="_blank">
          <FaLinkedin />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;