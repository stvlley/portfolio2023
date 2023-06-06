import Modal from "./Modal";

const PortfolioModal = ({ close, open, data }) => {

  console.log("modal: ",data)
  return (
    <Modal open={open} close={close}>
      <div className="news_popup_details">
        <div className="top_image">
          <img src={data.image_url} alt="" />
          <div
            className="main"
            data-img-url={data && data.image_url}
            style={{ backgroundImage: `url(${data && data.image_url})` }}
          />
        </div>
        <div className="news_main_title">
          <h3>{data && data.title}</h3>
          {/* <span>
            <a href="#">{data && data.tag}</a>
          </span> */}
          <div />
        </div>
        <div className="text">
          {data && data.description && data.description.map((des, i) => <p key={i}>{des}</p>)}
        </div>
      </div>
    </Modal>
  );
};
export default PortfolioModal;
