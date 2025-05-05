import './BlogPage.css';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const blogPosts = [
    {
      id: '4',
      title: 'Educational Tour - Day 1',
      date: 'April 7, 2025',
      image: '/DAY 1/day1 (1).jpg',
      excerpt: 'The first day of the tour was on April 7, 2025. We were picked up at NAIA and warmly welcomed, setting a positive tone for the trip...'
    },
    {
      id: '5',
      title: 'Educational Tour - Day 2',
      date: 'April 8, 2025',
      image: '/DAY 2/day2 (1).jpg',
      excerpt: 'On the second day of the tour, we embarked on a journey to Subic, traveling for about 2 to 3 hours. The long ride was filled with anticipation...'
    },
    {
      id: '6',
      title: 'Educational Tour - Day 3',
      date: 'April 9, 2025',
      image: '/DAY 3/day3 (1).jpg',
      excerpt: 'On the third day of our tour, we delved deeper into the nation\'s heritage with a visit to the Museum of Natural History...'
    },
    {
      id: '7',
      title: 'Educational Tour - Day 4',
      date: 'April 10, 2025',
      image: '/DAY 4/day4 (1).jpg',
      excerpt: 'On the fourth day of our tour, we had the rare opportunity to visit the Bangko Sentral ng Pilipinas (BSP)...'
    },
    {
      id: '8',
      title: 'Educational Tour - Day 5',
      date: 'April 11, 2025',
      image: '/DAY 5/day5 (1).jpg',
      excerpt: 'On the fifth day of the tour, we explored key components of urban transportation and traffic management...'
    },
    {
      id: '9',
      title: 'Educational Tour - Day 6',
      date: 'April 12, 2025',
      image: '/DAY 6/day6 (1).jpg',
      excerpt: 'On the sixth day of our tour, we arrived in Baguio City around 5 AM, welcomed by the chilly mountain breeze...'
    },
    {
      id: '10',
      title: 'Educational Tour - Day 7',
      date: 'April 13, 2025',
      image: '/DAY 7/day7 (1).jpg',
      excerpt: 'On the seventh and final day of our educational tour, we headed to Star City, one of the most popular amusement parks in Metro Manila...'
    },
    {
      id: '1',
      title: 'Getting Started with React',
      date: 'June 15, 2023',
      image: 'https://source.unsplash.com/random/600x400/?code',
      excerpt: 'Learn how to set up your first React project and understand the core concepts...'
    },
    {
      id: '2',
      title: 'UI Design Principles',
      date: 'May 22, 2023',
      image: 'https://source.unsplash.com/random/600x400/?design',
      excerpt: 'Explore the fundamental principles of effective UI design that every developer should know...'
    },
    {
      id: '3',
      title: 'JavaScript Best Practices',
      date: 'April 10, 2023',
      image: 'https://source.unsplash.com/random/600x400/?javascript',
      excerpt: 'Discover the best practices for writing clean, efficient JavaScript code...'
    }
  ];

  return (
    <div className="page blog-page">
      <div className="container">
        <h1 className="page-title">Blog</h1>
        <div className="blog-grid">
          {blogPosts.map(post => (
            <div className="blog-card" key={post.id}>
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-content">
                <h2>{post.title}</h2>
                <p className="blog-date">{post.date}</p>
                <p className="blog-excerpt">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="btn">Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
