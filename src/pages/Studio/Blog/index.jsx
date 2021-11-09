import React from "react";
import Header from "../../../components/Studio/HeaderBlog"

import "./blog.scss"

function Blog() {

  return (
    <article>
      <Header />

      <section className="blog_grid">
        <div className="blog_high_post">
          <h1 className="blog_high_title_l">presentatie tips</h1>
          <div>
            <img className="blog_post_img" src="https://i.postimg.cc/L6485VQT/foto2.jpg" alt="blog post" width="388" height="488" />
            <p className="blog_post_tag">HIGHLIGHTED</p>
            <h2 className="blog_post_title">Lorem ipsum title voor de blog</h2>
            <p className="blog_post_date">10 AUG 09</p>
          </div>
        </div>

        <div className="blog-post-scroll">
          <ul className="blog_post_list">
            <li>
              <div className="blog_post_info">
                <p className="blog_post_tag">HIGHLIGHTED</p>
                <h2 className="blog_post_title">Lorem ipsum title voor de blog</h2>
                <p className="blog_post_date">10 AUG 09</p>
              </div>
              <img src="https://i.postimg.cc/L6485VQT/foto2.jpg" alt="blog post" width="211" height="157" />
            </li>
            <li>
              <div className="blog_post_info">
                <p className="blog_post_tag">HIGHLIGHTED</p>
                <h2 className="blog_post_title">Lorem ipsum title voor de blog</h2>
                <p className="blog_post_date">10 AUG 09</p>
              </div>
              <img src="https://i.postimg.cc/L6485VQT/foto2.jpg" alt="blog post" width="211" height="157" />
            </li>
            <li>
              <div className="blog_post_info">
                <p className="blog_post_tag">HIGHLIGHTED</p>
                <h2 className="blog_post_title">Lorem ipsum title voor de blog</h2>
                <p className="blog_post_date">10 AUG 09</p>
              </div>
              <img src="https://i.postimg.cc/L6485VQT/foto2.jpg" alt="blog post" width="211" height="157" />
            </li>
          </ul>
        </div>
      </section>

      <section className="blog_grid">
        <div className="blog-post-scroll">
          <ul className="blog_post_list">
            <li>
              <div className="blog_post_info">
                <p className="blog_post_tag">HIGHLIGHTED</p>
                <h2 className="blog_post_title">Lorem ipsum title voor de blog</h2>
                <p className="blog_post_date">10 AUG 09</p>
              </div>
              <img src="https://i.postimg.cc/L6485VQT/foto2.jpg" alt="blog post" width="211" height="157" />
            </li>
            <li>
              <div className="blog_post_info">
                <p className="blog_post_tag">HIGHLIGHTED</p>
                <h2 className="blog_post_title">Lorem ipsum title voor de blog</h2>
                <p className="blog_post_date">10 AUG 09</p>
              </div>
              <img src="https://i.postimg.cc/L6485VQT/foto2.jpg" alt="blog post" width="211" height="157" />
            </li>
            <li>
              <div className="blog_post_info">
                <p className="blog_post_tag">HIGHLIGHTED</p>
                <h2 className="blog_post_title">Lorem ipsum title voor de blog</h2>
                <p className="blog_post_date">10 AUG 09</p>
              </div>
              <img src="https://i.postimg.cc/L6485VQT/foto2.jpg" alt="blog post" width="211" height="157" />
            </li>
          </ul>
        </div>

        <div className="blog_high_post blog_high_post_last">
          <div>
            <img className="blog_post_img" src="https://i.postimg.cc/L6485VQT/foto2.jpg" alt="blog post" width="388" height="488" />
            <p className="blog_post_tag">HIGHLIGHTED</p>
            <h2 className="blog_post_title">Lorem ipsum title voor de blog</h2>
            <p className="blog_post_date">10 AUG 09</p>
          </div>
          <h1 className="blog_high_title_r">ppt presentatie</h1>
        </div>
      </section>
    </article>
  );
}

export default Blog;