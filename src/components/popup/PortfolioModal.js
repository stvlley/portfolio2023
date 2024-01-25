import Modal from "./Modal";

const PortfolioModal = ({ close, open, data }) => {

  console.log("modal: ", data)
  return (
    <Modal open={open} close={close}>
      <div className="news_popup_details">
        <div className="news_main_title">
          <div className="portfolio_title_container">
            <h3>{data && data.title}</h3>
            {data && data.technologies && data.technologies.map((tech, i) => <span className="skills_container" key={i}>{tech.name}</span>)}
          </div>
          <div className="top_image">
            <img src={data.image_url} alt="" />
            <div
              className="main"
              data-img-url={data && data.image_url}
              style={{ backgroundImage: `url(${data && data.image_url})` }}
            />
          </div>
        </div>
        <div className="text">
          {data && data.description && data.description.map((des, i) => <h4 key={i}>{des}</h4>)}
        </div>


        <div className="">
          <div className="edrea_tm_button portfolio_button_container">
            <a
              target="_blank" rel="noreferrer"
              href={data.demo_url} >
              Live
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default PortfolioModal;
