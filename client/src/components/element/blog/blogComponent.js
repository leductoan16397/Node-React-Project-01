import React from 'react';

export default function Blog() {
    return (
        <article className="blog_item">
            <div className="blog_item_img">
                <img className="card-img rounded-0" src="img/blog/single_blog_5.png" alt="" />
                <a href="#" className="blog_item_date">
                    <h3>15</h3>
                    <p>Jan</p>
                </a>
            </div>
            <div className="blog_details">
                <a className="d-inline-block" href="single-blog.html">
                    <h2>Google inks pact for new 35-storey office</h2>
                </a>
                <p>That dominion stars lights dominion divide years for fourth have don't stars is that
    he earth it first without heaven in place seed it second morning saying.</p>
                <ul className="blog-info-link">
                    <li><a href="#"><i className="fa fa-user" /> Travel, Lifestyle</a></li>
                    <li><a href="#"><i className="fa fa-comments" /> 03 Comments</a></li>
                </ul>
            </div>
        </article>
    )
}