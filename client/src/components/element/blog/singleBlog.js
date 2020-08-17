import React from 'react';
import Content from './singleBlog_components/content';
import PostNavigation from './singleBlog_components/postNavigation';
import Author from './singleBlog_components/author';
import Comments from './singleBlog_components/comments';
import Reply from './singleBlog_components/reply';

export default function SingleBlog() {
    return (
        <div className="col-lg-8 posts-list">
            <Content />
            <PostNavigation />
            <Author />
            <Comments />
            <Reply />
        </div>
    )
}