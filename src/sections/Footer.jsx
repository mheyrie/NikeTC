import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-center gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
          <img src={footerLogo} alt="" width={150} height={46} /></a>
          <p className="text-base leading-7 mt-6 font-montserrat text-white-400 sm:max-w-sm">Get shoes ready for the new terms at your nearest Nike store. Find Your Perfect Size In Store. Get Rewards</p>
          <div className="flex items-center gap-5 mt-8 ">
            {socialMedia.map((icon, index)=>(
              <div key={index} className="flex justify-center item-center w-12 h-12 bg-white rounded-full">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-center lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((section, id)=>(
              <div key={id}>
                <h4 className="text-white text-2xl font-montserrat leading-normal font-medium mb-6">{section.title}</h4>
                <ul>
                  {section.links.map((link, index)=>(
                    <li key={index} className="text-white-400 mt-3 text-base leading-normal hover:text-slate-gray cursor-pointer">
                      <a href="">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
      <div className="flex justify-betwee text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="copyright" width={20} height={20} className="rounded-full"/>
        </div>
      </div>
    </footer>
  )
}

export default Footer

