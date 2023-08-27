import React from 'react';
import './BlogPage.css';

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'my journey to Mardi',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis tellus vitae purus euismod lobortis. Sed vitae magna vel orci rutrum convallis ac at turpis.',
      author: 'John Doe',
      date: 'June 1, 2023',
    },
    {
      title: 'POST 2',
      content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum maximus eros augue, vitae congue purus interdum non.',
      author: 'Jane Smith',
      date: 'June 5, 2023',
    },
    {
      title: 'POST 3',
      content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum maximus eros augue, vitae congue purus interdum non.',
      author: 'Jane Smith',
      date: 'June 5, 2023',
    },
    {
      title: 'POST 3',
      content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum maximus eros augue, vitae congue purus interdum non.',
      author: 'Jane Smith',
      date: 'June 5, 2023',
    },
    
    // Add more blog posts as needed
  ];

  return (
    <div className="blog-container">
    <div className='experience'>
    <span>Here you can share your experience of travelling with us.
        </span>
    </div>
      <h1 className="blog-heading">Blog Posts by Customers</h1>
     <div className='post-container'>
     {blogPosts.map((post, index) => (
        <div className="blog-post" key={index}>
          <h2 className="post-title">{post.title}</h2>
          <p className="post-content">{post.content}</p>
          <div className="post-meta">
            <span className="post-author">By {post.author}</span>
            <span className="post-date">{post.date}</span>
          </div>
        </div>
      ))}
     </div>
      
    </div>
  );
};

export default BlogPage;
