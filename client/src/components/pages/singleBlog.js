import React from 'react';
import Header from '../element/header';
import RightBar from '../element/blog/rightBar';
import SingleBlog from '../element/blog/singleBlog'

export default function BlogSinglePage() {
    return (
        <div className="single-blog">
            <Header title={"blog tittle"} />
            <div className="blog_area section-padding" >
                <div className="container" >
                    <div className="row">
                        <SingleBlog />
                        <RightBar />
                    </div>
                </div>
            </div>
        </div>
    )
}