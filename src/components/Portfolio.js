import { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSlider } from "../sliderProps";
import PortfolioModal from "./popup/PortfolioModal";
// import tempData from '../../public/data.json'
import Image from "next/image";
import data from '../../public/data.json'
const Portfolio = () => {


  const [modal, setModal] = useState(false);
  const [activeData, setActiveData] = useState({});
  const onClick = (value) => {
    setModal(true);
    setActiveData(data[value]);
  };

  console.log(activeData)
  console.log("data: ", typeof data)




  return (
    <Fragment>
      <PortfolioModal open={modal} close={() => setModal(false)} data={activeData} />
      <div className="edrea_tm_section hidden animated" id="portfolio">
        <div className="section_inner">
          <div className="edrea_tm_portfolio swiper-section">
            <div className="edrea_tm_main_title">

              <h3>
                Developer <span className="coloring">Portfolio</span>
              </h3>
            </div>
            <div className="portfolio_list gallery_zoom">
              <Swiper {...portfolioSlider} className="swiper-container">
                <div className="swiper-wrapper">

                 {data.map((project, i) => (
                  <SwiperSlide className="swiper-slide" key={i}>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/1-1.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url={project.image_url}
                      />
                    </div>
                    <div className="details">
                      <h3>{project.title}</h3>
                      <span>Details</span>
                    </div>
                    <a
                      className="edrea_tm_full_link portfolio_popup"
                      href="#"
                      onClick={() => onClick(i)}
                    />
                  </div>
                  </SwiperSlide>
                 ))}
                </div>
                <div className="edrea_tm_swiper_progress fill">
                  <div className="my_pagination_in">
                    <span className="current" />
                    <span className="pagination_progress">
                      <span className="all">
                        <span />
                      </span>
                    </span>
                    <span className="total" />
                  </div>
                  <div className="my_navigation">
                    <ul>
                      <li>
                        <a className="my_prev" href="#">
                          <i className="icon-left-open-1" />
                        </a>
                      </li>
                      <li>
                        <a className="my_next" href="#">
                          <i className="icon-right-open-1" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Swiper>

            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;
