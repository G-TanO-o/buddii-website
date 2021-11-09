import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link, useParams } from "react-router-dom";
import data from "./data.json";
import Clock from "./clock.svg";
import PageNotFound from "../../../components/Studio/PageNotFound";

import './blogpost.scss'

function BlogPost() {
  const { id } = useParams();
  const [blogpost, setBlogpost] = useState();

  const getData = () => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        setBlogpost(data[i])
      }
    }
  }

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  useEffect(() => {
    getData()
  }, [id]);

  return (
    <article>
      {blogpost ? (
        <>
          <section className="blogpost_header">
            <h1 className="blogpost_header_title">Blog post</h1>
            <h2 className="blogpost_title">{blogpost.title}</h2>
            <img className="blogpost_img" src={blogpost.img} alt={blogpost.title} height="350" width="1190" />
            <div className="blogpost_info">
              <p className="blogpost_info_date">{blogpost.date}</p>
              <div className="blogpost_info_read">
                <img src={Clock} alt="clock" />
                <p className="blogpost_info_read_text">{blogpost.min} MIN LEZEN</p>
              </div>
            </div>
          </section>

          <section className="blogpost_content">
            <p className="bp_content_intro">{blogpost.intro}</p>
            {blogpost.content.map((post, index) => (
              <div key={index}>
                <h2 className="bp_content_title">{post.title}</h2>

                {post.text.map((content, key) => (
                  <p className="bp_content_text" key={key}>{content}</p>
                ))}
              </div>
            ))}
          </section>

          <section className="case_cases">
            <h1 className="case_cases_title">Recente case studies</h1>
            <div>
              <Link to="/blogpost/1">
                <img src={data[0].img} alt={data[0].title} width="350" height="350" />
                <h2>{data[0].title}</h2>
                <p>{data[0].tag}</p>
              </Link>
              <Link to="/blogpost/2">
                <img src={data[1].img} alt={data[1].title} width="350" height="350" />
                <h2>{data[1].title}</h2>
                <p>{data[1].tag}</p>
              </Link>
              <Link to="/blogpost/3">
                <img src={data[2].img} alt={data[2].title} width="350" height="350" />
                <h2>{data[2].title}</h2>
                <p>{data[2].tag}</p>
              </Link>
            </div>
          </section>
        </>
      ) :
        (
          <PageNotFound item="Blogpost" />
        )}
    </article>
  );
}

export default BlogPost;