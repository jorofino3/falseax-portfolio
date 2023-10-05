import React from "react";
import "./style.css";
import { FaInstagram, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className='stick_follow_icon'>
      <ul>
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialprofils.instagram && (
          <li>
            <a href={socialprofils.instagram}>
              <FaInstagram />
            </a>
          </li>
        )}
        {/* {socialprofils.email && (
          <li>
            <a href={socialprofils.email}>
              <FaMailBulk />
            </a>
          </li>
        )} */}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
