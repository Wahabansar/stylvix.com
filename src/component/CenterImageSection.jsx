const CenterImageSection = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row p-3">
          <div className="col-md-6 d-flex align-items-center mb-3 mb-md-0">
            <img
              src="./assets/images/our-img1.png"
              className="img-fluid trending-img"
              alt="Image 1"
            />
            <div class="text-overlay-our-women">
              <h2 className="mb-1">WOMENS</h2>
              <a href="#">
                SHOP NOW{" "}
                <span className="p-2">
                  {" "}
                  <svg
                    width="18"
                    height="10"
                    viewBox="0 0 18 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.2334 6.06667H2.00007M16.2334 6.06667L12.1667 2M16.2334 6.06667L12.1667 10.1333"
                      stroke="white"
                      stroke-width="2.03333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col">
                <img
                  src="./assets/images/men-our.png"
                  className="img-fluid trending-img"
                  alt="Image 2"
                />
                <div class="text-overlay-our-men">
                  <h2 className="mb-1">MENS</h2>
                  <a href="#">
                    SHOP NOW{" "}
                    <span className="p-2">
                      {" "}
                      <svg
                        width="18"
                        height="10"
                        viewBox="0 0 18 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.2334 6.06667H2.00007M16.2334 6.06667L12.1667 2M16.2334 6.06667L12.1667 10.1333"
                          stroke="black"
                          stroke-width="2.03333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col">
                <img
                  src="./assets/images/kids-our.png"
                  className="img-fluid trending-img"
                  alt="Image 3"
                />
                <div class="text-overlay-our-kids">
                  <h2 className="mb-1">KIDS</h2>
                  <a href="#">
                    SHOP NOW{" "}
                    <span className="p-2">
                      {" "}
                      <svg
                        width="18"
                        height="10"
                        viewBox="0 0 18 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.2334 6.06667H2.00007M16.2334 6.06667L12.1667 2M16.2334 6.06667L12.1667 10.1333"
                          stroke="white"
                          stroke-width="2.03333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5">
        <hr className="custom-hr1" />
      </div>
    </>
  );
};
export default CenterImageSection;
