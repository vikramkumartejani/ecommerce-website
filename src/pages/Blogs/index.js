import React, { useState } from "react";
import "./blogs.css";
import blogImage1 from "../../assets/blog_1.webp";
import blogImage2 from "../../assets/blog_2.webp";
import blogImage3 from "../../assets/blog_3.webp";
import blogImage4 from "../../assets/blog_4.webp";

const blogData = [
  {
    id: 1,
    image: blogImage1,
    date: "2023-01-21",
    title: "MacBook Air labore et dolore",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ull laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprhen voluptate velit esse cillum dolore eu fugiat to nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qei officia deser mollit anim id est to laborum sed ut perspiciatis.",
  },
  {
    id: 2,
    image: blogImage2,
    date: "03 JUN, 2023",
    title:
      "There’s another wireless technology choice for IoT long-range applications",
    details:
      "Home Blog There’s another wireless technology choice for IoT long-range applications Theres another wireless technology choice for IoT long-range applications 03 JUN, 2022 Theres another wireless technology choice for IoT long-range applications Donec tellus Nullalorem Nullam elit id ut elit feugiat lacus. Congue eget dapibus congue tincidunt senectus nibh risus Phasellus tristique justo. Justo Pellentesque Donec lobortis faucibus Donec tellus Nulla lorem Nullam elit id ut elit feugiat lacus.",
  },
  {
    id: 3,
    image: blogImage3,
    date: "04 March 2023",
    title: "Must-Have Skater Girl Items",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iste sed dolor tenetur voluptas voluptatem illo dignissimos vel ipsam suntcupiditate, doloribus ad hic repellendus, saepe magnam. Voluptatem autreprehenderit, temporibus mollitia ipsa quibusdam amet accusantiumquasi adipisci, quis nihil aliquid nulla praesentium aspernatur doloretempora corporis ut. Delectus, incidunt!",
  },
  {
    id: 4,
    image: blogImage4,
    date: "18 Jun 2023",
    title: "The Great Big List of Men’s Gifts for the Holidays",
    details:
      " Class aptent taciti sociosqu ad litora torquent per conubia nostra, sapien eu varius. Class aptent taciti sociosqu ad litora torquent per per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius",
  },
];

const Blogs = () => {
  const [expandedBlogId, setExpandedBlogId] = useState(null);

  const toggleContent = (blogId) => {
    setExpandedBlogId(blogId === expandedBlogId ? null : blogId);
  };

  return (
    <div>
      <section className="blog-Banner max-width flex">
        <h1>#readmore</h1>
      </section>

      <section className="blogs_container max-width">
        {blogData.map((blog) => (
          <div key={blog.id} className="blog">
            <div className="blog_Image">
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className="blog_description">
              <span className="blog_date">{blog.date}</span>
              <h2 className="blog_title">{blog.title}</h2>
              <p className="blog_details">
                {expandedBlogId === blog.id
                  ? blog.details
                  : blog.details.split(" ").slice(0, 20).join(" ")}
                {blog.details.split(" ").length > 20 && (
                  <button
                    onClick={() => toggleContent(blog.id)}
                    className="blog_Btn"
                  >
                    {expandedBlogId === blog.id ? "Read Less" : "Read More..."}
                  </button>
                )}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blogs;
