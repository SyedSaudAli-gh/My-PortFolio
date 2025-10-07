import React from 'react';
import { FaLinkedinIn, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { SiGmail } from 'react-icons/si';

interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
  bgColor?: string;

}

const socialLinks: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/syed-saud-ali-6399712b4/",
    icon: (
      <FaLinkedinIn className="relative z-10 text-lg transition-colors duration-300 
        text-[#4d4d4d] dark:text-white 
        group-hover/icon:text-white" />
    ),
    label: 'LinkedIn',
    bgColor: '#0274b3',
  },
  {
    href: "mailto:saud.saleem93@gmail.com",
    icon: (
      <SiGmail className="relative z-10 text-lg transition-colors duration-300 
        text-[#4d4d4d] dark:text-white 
        group-hover/icon:text-white" />
    ),
    label: 'Gmail',
    bgColor: '#C5221F',
  },
   {
    href: "https://wa.me/923482554902",
    icon: (
      <FaWhatsapp className="relative z-10 text-lg transition-colors duration-300 
      text-[#25D366] dark:text-white 
      group-hover/icon:text-white" />
    ),
    label: 'WhatsApp',
    bgColor: '#25D366',
  },
  {
    href: "https://facebook.com/saud.saleem.391",
    icon: (
      <FaFacebookF className="relative z-10 text-lg transition-colors duration-300 
        text-[#4d4d4d] dark:text-white 
        group-hover/icon:text-white" />
    ),
    label: 'Facebook',
    bgColor: '#1877F2',
  },
  {
    href: "https://x.com/saudali242821",
    icon: (
      <FaXTwitter className="relative z-10 text-lg transition-colors duration-300 
        text-[#4d4d4d] dark:text-white 
        group-hover/icon:text-white" />
    ),
    label: 'X.com',
    bgColor: '#000000',
  },
 
];

interface SocialIconsProps {
  showSocials?: boolean; // ✅ Optional prop (default: always visible)
  alwaysVisible?: boolean; // ✅ New prop for footer
}

const FollowMeProject: React.FC<SocialIconsProps> = ({
  showSocials = true,
  alwaysVisible = false
}) => {
  // ✅ Agar alwaysVisible true hai, to animation skip karo
  const isVisible = alwaysVisible || showSocials;

  return (
    <div
      className={`
         transition-all duration-500 ease-in-out
        ${alwaysVisible
          ? 'max-h-[110px] opacity-100 translate-y-0'
          : isVisible
            ? 'max-h-[110px] opacity-100 translate-y-0 overflow-visible'
            : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden'
        }
      `}
    >
      <div className="p-4">
        <ul className="flex justify-center items-center list-none gap-3">
          {socialLinks.map((social, index) => (
            <li key={index} className="relative group/icon">
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`
                  relative overflow-hidden flex justify-center items-center w-10 h-10 rounded-full 
                  bg-white dark:bg-[#242424] 
                  transition-all duration-300 ease-in-out 
                  hover:shadow-[3px_2px_45px_0px_rgba(0,0,0,0.12)] dark:hover:shadow-[3px_2px_45px_0px_rgba(255,255,255,0.1)]
                `}
              >
                <div
                  className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 ease-in-out group-hover/icon:h-full"
                  style={{
                    background: social.bgColor,
                  }}
                />
                {social.icon}
              </a>
              <div
                className={`
                  absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs 
                  opacity-0 invisible transition-all duration-300 
                  group-hover/icon:opacity-100 group-hover/icon:visible 
                  whitespace-nowrap pointer-events-none z-50 
                  text-white 
                `}
                style={{
                  background: social.bgColor,
                }}
              >
                {social.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FollowMeProject;