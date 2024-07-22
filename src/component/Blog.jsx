import React from "react";

const blogData = [
  {
    id: 1,
    imgSrc: "./assets/images/blogimage1.png",
    title: "Lorem Ipsum",
    date: "2024-07-05",
    author: "By William",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
  },
  {
    id: 2,
    imgSrc: "./assets/images/blogimage2.png",
    title: "Lorem Ipsum",
    date: "2024-07-05",
    author: "By William",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
  }
  // Add more blog data as needed
];

const Blog = () => {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col">
          <h1 className="our-blogs">
            OUR LATEST <span className="blogstxt">BLOGS</span>
          </h1>
        </div>
      </div>
      {/* image section  */}

      <div className="row mt-5 mb-5">
        {blogData.map((blog) => (
          <div className="col-md-6" key={blog.id}>
            <img
              src={blog.imgSrc}
              className="img-fluid"
              alt="Placeholder Image"
            />

            <div className="description mt-3">
              <h2 className="blog-txt-h1">{blog.title}</h2>
              <ul className="d-flex gap-3 ul-blog">
                <li>{blog.date}</li>
                <li>
                  <img src="./assets/images/ellips.png" alt="Ellipse icon" />
                </li>
                <li>{blog.author}</li>
              </ul>
              <p className="para-blog">
                {blog.description}
              </p>
              <a href="#" className="read-blog">
                Read More{" "}
                <span className="m-2">
                  <svg
                    width="16"
                    height="11"
                    viewBox="0 0 16 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.1458 2.64914L1.85408 9.35082M14.1458 2.64914L8.71915 1.05197M14.1458 2.64914L12.5487 8.07584"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* see more button start here */}
      <div className="row text-center">
        <div className="col">
          <button className="btn-blog-seemore">See More</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;





// const Blog = () => {
//   return (
//     <>
//       <div className="container">
//         <div className="row text-center">
//           <div className="col">
//             <h1 className="our-blogs">
//               OUR LATEST <span className="blogstxt">BLOGS</span>
//             </h1>
//           </div>
//         </div>
//         {/* image section  */}

//         <div class="row mt-5 mb-5">
//           <div class="col-md-6">
//             <img
//               src="./assets/images/blogimage1.png"
//               class="img-fluid"
//               alt="Placeholder Image"
//             />

//             <div class="description mt-3">
//               <h2 className="blog-txt-h1">Lorem Ipsum</h2>
//               <ul className="d-flex gap-3 ul-blog">
//                 <li>2024-07-05</li>
//                 <li>
//                   <img src="./assets/images/ellips.png" />
//                 </li>
//                 <li>By William</li>
//               </ul>
//               <p className="para-blog">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. Lorem Ipsum has been the industry's standard dummy
//                 text.
//               </p>
//               <a href="#" className="read-blog">
//                 Read More{" "}
//                 <span className="m-2">
//                   <svg
//                     width="16"
//                     height="11"
//                     viewBox="0 0 16 11"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M14.1458 2.64914L1.85408 9.35082M14.1458 2.64914L8.71915 1.05197M14.1458 2.64914L12.5487 8.07584"
//                       stroke="black"
//                       stroke-width="2"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                   </svg>
//                 </span>
//               </a>
//             </div>
//           </div>

//           <div class="col-md-6">
//             <img
//               src="./assets/images/blogimage2.png"
//               class="img-fluid"
//               alt="Placeholder Image"
//             />

//             <div class="description mt-3">
//               <h2 className="blog-txt-h1">Lorem Ipsum</h2>
//               <ul className="d-flex gap-3 ul-blog">
//                 <li>2024-07-05</li>
//                 <li>
//                   <img src="./assets/images/ellips.png" />
//                 </li>
//                 <li>By William</li>
//               </ul>
//               <p className="para-blog">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. Lorem Ipsum has been the industry's standard dummy
//                 text.
//               </p>
//               <a href="#" className="read-blog">
//                 Read More{" "}
//                 <span className="m-2">
//                   <svg
//                     width="16"
//                     height="11"
//                     viewBox="0 0 16 11"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M14.1458 2.64914L1.85408 9.35082M14.1458 2.64914L8.71915 1.05197M14.1458 2.64914L12.5487 8.07584"
//                       stroke="black"
//                       stroke-width="2"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                   </svg>
//                 </span>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* see more button start here */}
//         <div className="row text-center">
//           <div className="col">
//             <button className="btn-blog-seemore">See More</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Blog;
