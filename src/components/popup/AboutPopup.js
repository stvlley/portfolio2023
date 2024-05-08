import { useContext } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { context } from "../../context/context";
import { testimonialSlider } from "../../sliderProps";
import AnimatedText from "../AnimatedText";
import Modal from "./Modal";
import Image from "next/image";
import {BiLogoHtml5, BiLogoCss3, BiLogoTailwindCss, BiLogoJavascript, BiLogoReact, BiLogoPython} from 'react-icons/bi';
import {TbBrandNextjs} from 'react-icons/tb';
import {SiRubyonrails} from 'react-icons/si';


const AboutPopup = ({ open, close, aboutData }) => {
  const colorContext = useContext(context);
  const { color } = colorContext;

  

  return (
    <Modal open={open} close={close}>
      <div className=" about_popup_details">
        <div className="left">
          <div className="left_inner">
            <div className="author">
              <div className="avatar_image">
                <Image height='100%' width='100%' src="/logo.svg" alt="logo" />
                <div className="main" data-img-url="img/logo.svg" />
              </div>
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
              </div>
                <h3 className="job">
                  <AnimatedText />
                </h3>
            </div>
            <div className="list">
              <ul>
                <li>
                  <div className="list_inner">
                    <i className="icon-user" />
                    <span>
                      {aboutData.firstName} {aboutData.lastName}
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-calendar" />
                    <span>{aboutData.bithday}</span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-location" />
                    <span>
                      <a 
                      target="_blank" rel="noreferrer"
                      href="https://www.google.com/maps/place/Stafford,+VA+22554/@38.4150875,-77.4185459,14z/data=!3m1!4b1!4m6!3m5!1s0x89b6ecf423266fb1:0x84cc6ce61f755145!8m2!3d38.4220687!4d-77.4083086!16zL20vMDQyZ256?entry=ttu" className="href_location">
                        {aboutData.address}
                      </a>
                    </span>
                  </div>
                </li>
                {/* <li>
                  <div className="list_inner">
                    <i className="icon-phone" />
                    <span>
                      <a href="#">{aboutData.phn}</a>
                    </span>
                  </div>
                </li> */}
                <li>
                  <div className="list_inner">
                    <i className="icon-mail-1" />
                    <span className="">
                      <a href={`mailto:${aboutData.email}`}>
                        {aboutData.email}
                      </a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-linkedin-1" />
                    <span className="">
                      <a target="_blank" rel="noreferrer" href={aboutData.linkedin_url}>
                        {aboutData.linkedin}
                      </a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="edrea_tm_button full">
              <a href="img/about/stephen_talley_resume_20240508.docx" download>
                Download CV
              </a>
            </div>

          </div>
        </div>
        <div className="right">
          <div className="right_inner">
            <div className="biography">
              <div className="about_title">
                <h3>
                  <span>
                    About <span className="coloring">Me</span>
                  </span>
                </h3>
              </div>
              <div className="text">
                <p>
                  Hello everybody! My name is <span>Stephen Talley.</span> I am a <span>Software Engineer</span> and <span>Systems Analyst</span> with 4+ years of professional IT experience and an extensive background in creating and executing innovative technical solutions for complex business challenges. Expertise in software development, systems and data analysis for conducting research and development (R&D). With a focus on driving operational efficiency and delivering high-quality deliverables whilst providing fast-paced IT support makes me a crucial asset to my team and organization. I am committed to learning the latest techologies and frameworks while remaining programming language agnostic so I can implement a tailored solutions that best suites the needs of my organization.
                </p>
              </div>
            </div>
            <div className="partners">
              <div className="about_title">
                <h3>
                  <span>
                    Programming <span className="coloring">Skills</span>
                  </span>
                </h3>
              </div>
              <div className="list">
                <ul>
                  {/* {aboutData &&
                    aboutData.techLogos &&
                    aboutData.techLogos.image.map((tech, i) => (
                      <li key={i}>
                        <div className="list_inner">
                          <Image placeholder={tech} priority className="tech" height={100} width={100} src='/img/logo.svg' alt={tech} />
                        </div>
                      </li>
                    ))} */}
                 
                      <li >
                        <svg className="list_inner" height="90" width="256" fill="none" viewBox="0 0 56 256" xmlns="http://www.w3.org/2000/svg">
	<rect height="256" width="256" fill="#E14E1D" rx="60"/>
	<path d="M48 38L56.6098 134.593H167.32L163.605 176.023L127.959 185.661L92.38 176.037L90.0012 149.435H57.9389L62.5236 200.716L127.951 218.888L193.461 200.716L202.244 102.655H85.8241L82.901 69.9448H205.041H205.139L208 38H48Z" fill="#fff"/>
	<path d="M128 38H48L56.6098 134.593H128V102.655H85.8241L82.901 69.9448H128V38ZM128 185.647 127.959 185.661 92.38 176.037 90.0012 149.435H57.9388L62.5236 200.716 127.951 218.888 128 218.874V185.647Z" fill="#EBEBEB"/>
</svg>
                      </li>
                      <li>
                      <svg className="list_inner" height="90" width="256" fill="none" viewBox="0 0 56 256" xmlns="http://www.w3.org/2000/svg">
	<rect height="256" width="256" fill="#0277BD" rx="60"/>
	<path d="M53.7527 102.651 56.6155 134.593H128.096V102.651H53.7527ZM128.095 38H127.985 48L50.9036 69.9423H128.095V38ZM128.095 218.841V185.608L127.955 185.645 92.3813 176.04 90.1072 150.564H72.821 58.0425L62.5175 200.718 127.948 218.882 128.095 218.841Z" fill="#EBEBEB"/>
	<path d="M167.318 134.593L163.61 176.019L127.985 185.635V218.866L193.468 200.718L193.948 195.321L201.454 111.229L202.233 102.651L208 38H127.985V69.9423H172.994L170.088 102.651H127.985V134.593H167.318Z" fill="#fff"/>
</svg>
                      </li>
                      
                      <li>
                      <svg className="list_inner" height="90" width="256" fill="none" viewBox="0 0 56 256" xmlns="http://www.w3.org/2000/svg">
	<rect height="256" width="256" fill="#F0DB4F" rx="60"/>
	<path d="M67.3117 213.932 86.9027 202.076C90.6821 208.777 94.1202 214.447 102.367 214.447 110.272 214.447 115.256 211.355 115.256 199.327V117.529H139.314V199.667C139.314 224.584 124.708 235.926 103.398 235.926 84.1533 235.926 72.9819 225.959 67.3113 213.93M152.381 211.354 171.969 200.013C177.126 208.434 183.828 214.62 195.684 214.62 205.653 214.62 212.009 209.636 212.009 202.762 212.009 194.514 205.479 191.592 194.481 186.782L188.468 184.203C171.111 176.815 159.597 167.535 159.597 147.945 159.597 129.901 173.345 116.153 194.826 116.153 210.12 116.153 221.118 121.481 229.022 135.4L210.291 147.429C206.166 140.04 201.7 137.119 194.826 137.119 187.78 137.119 183.312 141.587 183.312 147.429 183.312 154.646 187.78 157.568 198.09 162.037L204.104 164.614C224.553 173.379 236.067 182.313 236.067 202.418 236.067 224.072 219.055 235.928 196.2 235.928 173.861 235.928 159.426 225.274 152.381 211.354" fill="#323330"/>
</svg>
                      </li>
                      <li>
                      <svg className="list_inner" height="90" width="256" fill="none" viewBox="0 0 56 256" xmlns="http://www.w3.org/2000/svg">
	<rect height="256" width="256" fill="#242938" rx="60"/>
	<path d="M121.451 28.0537C121.021 28.0928 119.652 28.2297 118.42 28.3274C90.0137 30.8885 63.4057 46.216 46.5533 69.7742C37.1691 82.8729 31.1672 97.7312 28.8993 113.469C28.0978 118.963 28 120.586 28 128.034C28 135.483 28.0978 137.106 28.8993 142.599C34.3343 180.155 61.0596 211.71 97.306 223.401C103.797 225.493 110.639 226.92 118.42 227.78C121.451 228.112 134.549 228.112 137.58 227.78C151.011 226.294 162.389 222.971 173.611 217.242C175.331 216.363 175.664 216.128 175.429 215.933C175.273 215.815 167.941 205.981 159.144 194.095L143.152 172.492L123.112 142.834C112.086 126.529 103.015 113.195 102.936 113.195C102.858 113.176 102.78 126.353 102.741 142.443C102.682 170.615 102.663 171.749 102.311 172.413C101.803 173.371 101.412 173.762 100.59 174.193C99.9648 174.505 99.4174 174.564 96.4653 174.564H93.0831L92.1838 173.997C91.5973 173.626 91.1672 173.137 90.8739 172.57L90.4633 171.69L90.5024 132.492L90.5611 93.2737L91.1672 92.5112C91.48 92.1007 92.1447 91.5728 92.6139 91.3186C93.4154 90.9276 93.7283 90.8885 97.1105 90.8885C101.099 90.8885 101.763 91.0449 102.8 92.1789C103.093 92.4917 113.943 108.836 126.925 128.523C139.906 148.21 157.658 175.092 166.377 188.288L182.213 212.277L183.015 211.749C190.111 207.135 197.619 200.566 203.562 193.723C216.211 179.197 224.364 161.485 227.101 142.599C227.902 137.106 228 135.483 228 128.034C228 120.586 227.902 118.963 227.101 113.469C221.666 75.913 194.94 44.3587 158.694 32.6676C152.301 30.5953 145.498 29.1681 137.873 28.3079C135.996 28.1124 123.073 27.8973 121.451 28.0537ZM162.389 88.5425C163.327 89.0117 164.09 89.911 164.364 90.8494C164.52 91.3577 164.559 102.228 164.52 126.724L164.461 161.876L158.264 152.374L152.047 142.873V117.321C152.047 100.801 152.125 91.5141 152.242 91.0645C152.555 89.9697 153.239 89.1095 154.178 88.6011C154.979 88.1906 155.273 88.1515 158.342 88.1515C161.236 88.1515 161.744 88.1906 162.389 88.5425Z" fill="#fff"/>
</svg>
                      </li>
                      <li>
                      <svg className="list_inner" height="90" width="256" fill="none" viewBox="0 0 56 256" xmlns="http://www.w3.org/2000/svg">
	<rect height="256" width="256" fill="#F4F2ED" rx="60"/>
	<path d="M83 110C88.9991 86.0009 104.001 74 128 74C164 74 168.5 101 186.5 105.5C198.501 108.501 209 104.001 218 92C212.001 115.999 196.999 128 173 128C137 128 132.5 101 114.5 96.5C102.499 93.4991 92 97.9991 83 110ZM38 164C43.9991 140.001 59.0009 128 83 128C119 128 123.5 155 141.5 159.5C153.501 162.501 164 158.001 173 146C167.001 169.999 151.999 182 128 182C92 182 87.5 155 69.5 150.5C57.4991 147.499 47 151.999 38 164Z" fill="url(#paint0_linear_2_118)" fillRule="evenodd"/>
	<defs>
		<linearGradient id="paint0_linear_2_118" gradientUnits="userSpaceOnUse" x1="86.5" x2="163.5" y1="74" y2="185.5">
			<stop stopColor="#32B1C1"/>
			<stop offset="1" stopColor="#14C6B7"/>
		</linearGradient>
	</defs>
</svg>
                      </li>
                      <li>
                      <svg className="list_inner" height="90" width="256" fill="none" viewBox="0 0 56 256" xmlns="http://www.w3.org/2000/svg">
	<rect height="256" width="256" fill="#F4F2ED" rx="60"/>
	<path d="M128.001 146.951C138.305 146.951 146.657 138.598 146.657 128.295C146.657 117.992 138.305 109.639 128.001 109.639C117.698 109.639 109.345 117.992 109.345 128.295C109.345 138.598 117.698 146.951 128.001 146.951Z" fill="#00D8FF"/>
	<path d="M128.002 90.3633C153.05 90.3633 176.319 93.9575 193.864 99.9976C215.003 107.275 228 118.306 228 128.295C228 138.704 214.226 150.423 191.525 157.944C174.363 163.63 151.779 166.598 128.002 166.598C103.624 166.598 80.5389 163.812 63.1834 157.881C41.2255 150.376 28 138.506 28 128.295C28 118.387 40.4096 107.441 61.2515 100.175C78.8617 94.0353 102.705 90.3633 127.998 90.3633H128.002Z" stroke="#00D8FF" strokeWidth="8.911"/>
	<path d="M94.9811 109.438C107.495 87.7402 122.232 69.3783 136.23 57.1971C153.094 42.5206 169.144 36.7728 177.796 41.7623C186.813 46.9623 190.084 64.7496 185.259 88.1712C181.614 105.879 172.9 126.925 161.021 147.523C148.842 168.641 134.897 187.247 121.09 199.315C103.619 214.587 86.7284 220.114 77.8833 215.013C69.3003 210.067 66.0181 193.846 70.1356 172.161C73.6145 153.838 82.3451 131.349 94.977 109.438L94.9811 109.438Z" stroke="#00D8FF" strokeWidth="8.911"/>
	<path d="M95.0123 147.578C82.4633 125.904 73.9194 103.962 70.3531 85.7517C66.0602 63.8109 69.0954 47.0355 77.7401 42.0315C86.7485 36.8163 103.792 42.866 121.674 58.7437C135.194 70.7479 149.077 88.8052 160.99 109.383C173.204 130.481 182.358 151.856 185.919 169.844C190.425 192.608 186.778 210.001 177.941 215.116C169.367 220.08 153.676 214.825 136.945 200.427C122.809 188.263 107.685 169.468 95.0123 147.578Z" stroke="#00D8FF" strokeWidth="8.911"/>
</svg>
                      </li>
                     
                      <li>
                      <svg className="list_inner" height="90" width="256" fill="none" viewBox="0 0 56 256" xmlns="http://www.w3.org/2000/svg">
	<rect height="256" width="256" fill="#D30001" rx="60"/>
	<path d="M227.87 116.783L228 116.912C228 116.912 226.501 117.97 224.914 119.293C174.825 82.2557 144.226 99.716 134.614 104.39C90.9629 128.747 103.577 188.54 103.834 189.733L103.838 189.751H34.1729C34.1729 189.751 36.8183 163.649 55.3368 132.785C73.8553 101.921 105.425 78.552 131.086 76.2593C180.566 71.3028 225.159 114.13 227.87 116.783ZM106.483 172.115L116.007 175.554C116.448 179.008 117.073 182.278 117.728 185.262L118.123 187.018L107.541 183.226C107.1 180.58 106.66 176.788 106.483 172.115ZM32.4091 143.543L42.5503 147.247C41.3157 150.102 39.7436 153.767 38.6018 156.647L38.1411 157.829L28 154.125C28.8818 151.744 30.7336 147.335 32.4091 143.543ZM110.452 140.016L116.801 145.042C116.095 147.794 115.559 150.545 115.192 153.296L114.949 155.36L107.806 149.716C108.511 146.541 109.305 143.279 110.452 140.016ZM126.06 115.413L130.028 121.409C128.476 123.032 127.037 124.654 125.756 126.367L124.825 127.67L120.593 121.321C122.18 119.293 124.032 117.265 126.06 115.413ZM62.9206 102.362L69.1816 107.829C67.5943 109.482 66.0567 111.235 64.6058 113.012L63.1852 114.795L56.3951 108.975C58.4233 106.771 60.6278 104.566 62.9206 102.362ZM150.31 102.009L152.25 107.829C150.205 108.464 148.159 109.268 146.113 110.196L144.578 110.915L142.55 104.831C144.755 103.861 147.312 102.891 150.31 102.009ZM170.945 99.8924C173.203 100.034 175.517 100.287 177.887 100.699L179.675 101.039L179.323 106.506C176.995 106.012 174.667 105.688 172.339 105.533L170.593 105.448L170.945 99.8924ZM98.5467 75.5538L102.515 81.6384C100.795 82.4982 99.1255 83.4572 97.4307 84.4782L95.7248 85.5185L91.6684 79.3457C94.0493 77.9347 96.3421 76.7002 98.5467 75.5538ZM171.122 72.2028C176.369 73.7019 178.626 74.7291 179.53 75.2101L179.675 75.2892L179.323 81.1975C177.441 80.4333 175.56 79.7082 173.653 79.0223L170.769 78.0229L171.122 72.2028ZM137.436 67L139.199 72.3792H138.317C136.399 72.3792 134.481 72.4288 132.563 72.5652L130.646 72.7319L128.97 67.5291C131.88 67.1764 134.702 67 137.436 67Z" fill="#fff"/>
</svg>
                      </li>
                      <li>
                      <svg className="list_inner" height="90" width="256" fill="none" viewBox="0 0 56 256" xmlns="http://www.w3.org/2000/svg">
	<rect height="256" width="256" fill="#F4F2ED" rx="60"/>
	<path d="M127.279 29C76.5066 29 79.6772 51.018 79.6772 51.018L79.7338 73.8284H128.185V80.6772H60.4893C60.4893 80.6772 28 76.9926 28 128.222C28 179.452 56.3573 177.636 56.3573 177.636H73.2812V153.863C73.2812 153.863 72.369 125.506 101.186 125.506H149.24C149.24 125.506 176.239 125.942 176.239 99.4123V55.5461C176.239 55.5461 180.338 29 127.279 29ZM100.563 44.339C105.384 44.339 109.28 48.2351 109.28 53.0556C109.28 57.8761 105.384 61.7723 100.563 61.7723C95.7426 61.7723 91.8465 57.8761 91.8465 53.0556C91.8465 48.2351 95.7426 44.339 100.563 44.339Z" fill="url(#paint0_linear_2_56)"/>
	<path d="M128.721 227.958C179.493 227.958 176.323 205.941 176.323 205.941L176.266 183.13H127.815V176.281H195.511C195.511 176.281 228 179.966 228 128.736C228 77.5062 199.643 79.323 199.643 79.323H182.719V103.096C182.719 103.096 183.631 131.453 154.814 131.453H106.76C106.76 131.453 79.7607 131.016 79.7607 157.546V201.412C79.7607 201.412 75.6615 227.958 128.721 227.958ZM155.437 212.619C150.616 212.619 146.72 208.723 146.72 203.903C146.72 199.082 150.616 195.186 155.437 195.186C160.257 195.186 164.154 199.082 164.154 203.903C164.154 208.723 160.257 212.619 155.437 212.619Z" fill="url(#paint1_linear_2_56)"/>
	<defs>
		<linearGradient id="paint0_linear_2_56" gradientUnits="userSpaceOnUse" x1="47.22" x2="146.333" y1="46.896" y2="145.02">
			<stop stopColor="#387EB8"/>
			<stop offset="1" stopColor="#366994"/>
		</linearGradient>
		<linearGradient id="paint1_linear_2_56" gradientUnits="userSpaceOnUse" x1="108.056" x2="214.492" y1="109.905" y2="210.522">
			<stop stopColor="#FFE052"/>
			<stop offset="1" stopColor="#FFC331"/>
		</linearGradient>
	</defs>
</svg>
                      </li>

                </ul>
              </div>
            </div>
            <div className="service">
              <div className="about_title">
                <h3>
                  <span>
                    Tech <span className="coloring">Experience</span>
                  </span>
                </h3>
              </div>
              <div className="list">
                <ul>
                  {aboutData.serviceLists &&
                    aboutData.serviceLists.map((service, i) => (
                      <li key={i}>
                        <i className="icon-right-dir" />
                        {service}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            {/* <div className="prog_skill">
              <div className="about_title">
                <h3>
                  <span>
                    Programming <span className="coloring">Skills</span>
                  </span>
                </h3>
              </div>
              <div className="oki_progress">
                {aboutData.skills &&
                  aboutData.skills.programming &&
                  aboutData.skills.programming.map((programming, i) => (
                    <div
                      key={i}
                      className="progress_inner skillsInner___"
                      data-value={95}
                    >
                      <span>
                        <span className="label">{programming.name}</span>
                        <span
                          className="number"
                          style={{ right: `${100 - programming.value}%` }}
                        >
                          {programming.value}%
                        </span>
                      </span>
                      <div className="background">
                        <div className="bar open">
                          <div
                            className="bar_in"
                            style={{ width: `${programming.value}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div> */}
            <div className="timeline">
              <div className="about_title">
                <h3>
                  <span>
                    Professional <span className="coloring">Timeline</span>
                  </span>
                </h3>
              </div>
              <div className="list">
                <ul>
                  {aboutData &&
                    aboutData.working &&
                    aboutData.working.map((work, i) => (
                      <li key={i}>
                        <div className="list_inner">
                          <div className="time">
                            <span>{work.year}</span>
                          </div>
                          <div className="place">
                            <h3>{work.company}</h3>
                            <span>{work.deg}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            {/* <div className="lang_skill">
              <div className="about_title">
                <h3>
                  <span>
                    Language <span className="coloring">Skills</span>
                  </span>
                </h3>
              </div>
              <div className="circular_progress_bar">
                <ul>
                  {aboutData.skills &&
                    aboutData.skills.language &&
                    aboutData.skills.language.map((language, i) => (
                      <li key={i}>
                        <div className="list_inner">
                          <div className="myCircle" data-value="0.95">
                            <CircularProgressbar
                              value={language.value}
                              text={`${language.value}%`}
                              strokeWidth={2}
                              styles={buildStyles({
                                // Colors
                                pathColor: color,
                              })}
                            />
                          </div>
                          <div className="title">
                            <span>{language.name}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div> */}
            {/* <div className="timeline">
              <div className="about_title">
                <h3>
                  <span>
                    Education <span className="coloring">Timeline</span>
                  </span>
                </h3>
              </div>
              <div className="list">
                <ul>
                  {aboutData &&
                    aboutData.education &&
                    aboutData.education.map((edu, i) => (
                      <li key={i}>
                        <div className="list_inner">
                          <div className="time">
                            <span>{edu.year}</span>
                          </div>
                          <div className="place">
                            <h3>{edu.unv}</h3>
                            <span>{edu.degree}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div> */}
            
            
            <div className="testimonial">
              <div className="about_title">
                <h3>
                  <span>
                    Clients <span className="coloring">Feedback</span>
                  </span>
                </h3>
              </div>
              <div className="list">
                <Swiper {...testimonialSlider} className="owl-carousel">
                  <SwiperSlide>
                    <div className="list_inner">
                      <div className="text">
                        <i className="icon-quote-left" />
                        <p>
                          Beautiful minimalist design and great, fast response
                          with support. Highly recommend. Thanks Marketify!
                        </p>
                      </div>
                      <div className="details">
                        <div className="image">
                          <div
                            className="main"
                            data-img-url="img/testimonials/1.jpg"
                          />
                        </div>
                        <div className="info">
                          <h3>Alexander Walker</h3>
                          <span>Graphic Designer</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="list_inner">
                      <div className="text">
                        <i className="icon-quote-left" />
                        <p>
                          These people really know what they are doing! Great
                          customer support availability and supperb kindness.
                        </p>
                      </div>
                      <div className="details">
                        <div className="image">
                          <div
                            className="main"
                            data-img-url="img/testimonials/2.jpg"
                          />
                        </div>
                        <div className="info">
                          <h3>Armin Van Buuren</h3>
                          <span>Content Manager</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="list_inner">
                      <div className="text">
                        <i className="icon-quote-left" />
                        <p>
                          I had a little problem and the support was just
                          awesome to quickly solve the situation. And keep going
                          on.
                        </p>
                      </div>
                      <div className="details">
                        <div className="image">
                          <div
                            className="main"
                            data-img-url="img/testimonials/3.jpg"
                          />
                        </div>
                        <div className="info">
                          <h3>Baraka Clinton</h3>
                          <span>English Teacher</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default AboutPopup;
