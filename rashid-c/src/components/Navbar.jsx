/**
 * @copyright 2025 RASHID_C
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const navLinks = useRef([]);

  const initActiveBox = () => {
    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
  };
  
  useEffect(initActiveBox, []);
  window.addEventListener("resize", initActiveBox);

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;

    activeBox.current.style.top = event.target.offsetTop + "px";
    activeBox.current.style.left = event.target.offsetLeft + "px";
    activeBox.current.style.width = event.target.offsetWidth + "px";
    activeBox.current.style.height = event.target.offsetHeight + "px";
  };

  // Add scroll event listener to update active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Get all section elements
      const sections = document.querySelectorAll("section[id]");
      
      // Find the current section based on scroll position
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Offset for better UX
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          // Remove active class from all links
          navLinks.current.forEach(link => link.classList.remove("active"));
          
          // Find the corresponding nav link and make it active
          const activeLink = navLinks.current.find(
            link => link.getAttribute("href") === `#${sectionId}`
          );
          
          if (activeLink) {
            activeLink.classList.add("active");
            lastActiveLink.current = activeLink;
            
            // Update the active box position
            activeBox.current.style.top = activeLink.offsetTop + "px";
            activeBox.current.style.left = activeLink.offsetLeft + "px";
            activeBox.current.style.width = activeLink.offsetWidth + "px";
            activeBox.current.style.height = activeLink.offsetHeight + "px";
          }
        }
      });
    };
    
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Call once to set initial state
    handleScroll();
    
    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      className: "nav-link",
    },
    {
      label: "Reviews",
      link: "#reviews",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];
  
  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          className={`${className} `}
          key={key}
          ref={(el) => {
            // Store reference to the link element
            if (el) {
              navLinks.current[key] = el;
              if (ref) ref.current = el;
            }
          }}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
