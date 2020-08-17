import React from 'react';
import Header from '../element/header';
import ListBlogs from '../element/blog/listBlogs';
import RightBar from '../element/blog/rightBar';

export default function Blogs() {
    return (
        <div className="blogs ">
            <Header tittle={"Blogs"} />
            <div className="blog_area section-padding" >
                <div className="container" >
                    <div className="row">
                        <ListBlogs />
                        <RightBar />
                    </div>
                </div>
            </div>
        </div>
    )
}