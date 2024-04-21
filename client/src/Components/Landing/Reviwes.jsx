import styles from "../../Styles/landing.module.css";
function Reviews() {
  return (
    <>
      <h2
        style={{
          marginBottom: "28px",
          color: "#4a4a4a",
          textAlign: "center",
          fontWeight: 800,
          fontSize:"30px",
        }}
      >
        Customer Reviews
      </h2>
      <div className={styles.reviewmain}>
        <div className="card">
          <img
            src={require("../../Images/review1.png")}
            className="card-img-top"
            alt="..."
          />
          {/* <img
            src={require("../../Images/pexels-photo-2381069.webp")}
            className="card-img-top"
            alt="..."
          /> */}

          <div className="card-body">
            <h5 className="card-title">Kathrin Brown</h5>
            <p className="card-text">
            I had a great experience with Tripzy. The website and mobile app were easy to use, and some of the companies didn't charge an admin fee. I would definitely use them again. 
            </p>
          </div>
        </div>
        <div className="card">
          <img
            // src={require("../../Images/pexels-photo-3778680.webp")}
            src={require("../../Images/review2.png")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">John Buch</h5>
            <p className="card-text">
            I was impressed with the customer service when I needed to change my booking. They were helpful and accommodating, and I was able to make the changes without any issues
            </p>
          </div>
        </div>
        <div className="card">
          <img
            // src={require("../../Images/pexels-photo-2381069.webp")}
            src={require("../../Images/review3.png")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Rahul Sharma</h5>
            <p className="card-text">
            I have used this website several times to book bus tickets, and I have always been satisfied with the service. The prices are reasonable, and the buses are always on time.
            </p>
          </div>
        </div>
        {/* <div className="card">
          <img
            src={require("../../Images/review_1.png")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title"> Brown</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content. 
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Reviews;