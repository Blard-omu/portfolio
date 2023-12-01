import "./navbar.css";
import { MdOutlineHome, MdOutlineWidgets } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { FaTools } from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeNavbar, setActiveNavbar] = useState("#");

  // Bootstrap tooltip configuration
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new window.bootstrap.Tooltip(tooltipTriggerEl)
    );

    return () => {
      tooltipList.forEach((tooltip) => tooltip.dispose());
    };
  }, []);

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNavbar("#")}
        className={activeNavbar === "#" ? "active" : ""}
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="Home"
      >
        <MdOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNavbar("#about")}
        className={activeNavbar === "#about" ? "active" : ""}
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="About"
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNavbar("#experience")}
        className={activeNavbar === "#experience" ? "active" : ""}
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="Stacks"
      >
        <FaTools />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNavbar("#services")}
        className={activeNavbar === "#services" ? "active" : ""}
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="Services"
      >
        <RiServiceLine />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNavbar("#portfolio")}
        className={activeNavbar === "#portfolio" ? "active" : ""}
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="Portfolio"
      >
        <MdOutlineWidgets />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNavbar("#contact")}
        className={activeNavbar === "#contact" ? "active" : ""}
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="Contact"
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Navbar;
