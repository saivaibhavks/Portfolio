import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/SaivaibhavKs1" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/saivaibhav-k-s-5b28821a3/",
  },
  { icon: <FaTwitter />, path: "https://x.com/KsSaivaibhav" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
