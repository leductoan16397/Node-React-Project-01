import React from 'react';
import BlogsSearch from './rightBar_components/blogsSearch';
import Category from './rightBar_components/category';
import RecentPost from './rightBar_components/recentPost';
import TagClouds from './rightBar_components/tagClouds';
import IntargramFeeds from './rightBar_components/intargramFeeds';
import NewsLetter from './rightBar_components/newsLetter';

export default function RightBar() {
    return (
        <div className="col-lg-4">
            <div className="blog_right_sidebar">
                <BlogsSearch />
                <Category />
                <RecentPost />
                <TagClouds />
                <IntargramFeeds />
                <NewsLetter />
            </div>
        </div>
    )
}