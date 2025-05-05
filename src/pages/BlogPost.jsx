import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import './BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  
  // This would normally come from an API or CMS
  const blogPosts = [
    {
      id: '4',
      title: 'Educational Tour - Day 1',
      date: 'April 7, 2025',
      image: '/DAY 1/day (1).jpg',
      author: 'Tour Participant',
      content: `
        <p>The first day of the tour was on April 7, 2025. We were picked up at NAIA and warmly welcomed, setting a positive tone for the trip. After arriving at DJM Dormitory, we enjoyed a hearty lunch that recharged us for the busy afternoon ahead.</p>
        
        <p>The City Tour began around 1 PM, and excitement filled the air as we explored Manila's historical and cultural landmarks. Visiting Intramuros and Fort Santiago gave us a deep sense of appreciation for the country's rich history.</p>
        
        <p>Walking through Rizal Park was both peaceful and inspiring, as we reflected on the legacy of Dr. José Rizal. We wrapped up the day at the Mall of Asia, where we marveled at its size and enjoyed some free time for shopping and snacks.</p>
        
        <p>Overall, the day was filled with learning, laughter, and the thrill of discovering new places.</p>
        
        <div class="blog-gallery">
          <img src="/DAY 1/day (1).jpg" alt="Day 1 - Image 1">
          <img src="/DAY 1/day (2).jpg" alt="Day 1 - Image 2">
          <img src="/DAY 1/day (3).jpg" alt="Day 1 - Image 3">
          <img src="/DAY 1/day (4).jpg" alt="Day 1 - Image 4">
          <img src="/DAY 1/day (5).jpg" alt="Day 1 - Image 5">
          <img src="/DAY 1/day (6).jpg" alt="Day 1 - Image 6">
        </div>
      `
    },
    {
      id: '5',
      title: 'Educational Tour - Day 2',
      date: 'April 8, 2025',
      image: '/DAY 2/day2 (1).jpg',
      author: 'Tour Participant',
      content: `
        <p>On the second day of the tour, we embarked on a journey to Subic, traveling for about 2 to 3 hours. The long ride was filled with anticipation and chatter, as everyone looked forward to what the day had in store.</p>
        
        <p>Our first stop was the Subic Bay Exhibition and Convention Center (SBECC), where we gained valuable historical insights about the area and its transformation over the years. It was fascinating to see how Subic evolved into a modern freeport zone while preserving its rich heritage.</p>
        
        <p>Next, we visited the SBMA Law Enforcement Department, where we got a glimpse into their strict but efficient security protocols - an eye-opening experience that highlighted the importance of law and order in a freeport environment.</p>
        
        <p>We then proceeded to the SBMA Seaport Department, where we learned about their advanced Vessel Traffic Management System. It was impressive to see how technology plays a key role in ensuring the safe and smooth flow of maritime operations.</p>
        
        <p>We capped off the tour with a relaxing lunch by the bay, enjoying the sea breeze and scenic view, which provided a perfect moment to unwind and reflect on everything we had learned that day.</p>
        
        <div class="blog-gallery">
          <img src="/DAY 2/day2 (1).jpg" alt="Day 2 - Image 1">
          <img src="/DAY 2/day2 (2).jpg" alt="Day 2 - Image 2">
          <img src="/DAY 2/day2 (3).jpg" alt="Day 2 - Image 3">
          <img src="/DAY 2/day2 (4).jpg" alt="Day 2 - Image 4">
          <img src="/DAY 2/day2 (5).jpg" alt="Day 2 - Image 5">
          <img src="/DAY 2/day2 (6).jpg" alt="Day 2 - Image 6">
        </div>
      `
    },
    {
      id: '6',
      title: 'Educational Tour - Day 3',
      date: 'April 9, 2025',
      image: '/DAY 3/day3 (1).jpg',
      author: 'Tour Participant',
      content: `
        <p>On the third day of our tour, we delved deeper into the nation's heritage with a visit to the Museum of Natural History. The exhibits were both educational and awe-inspiring, showcasing the Philippines' rich biodiversity and natural wonders. It was a unique experience to see rare species, intricate ecosystems, and preserved specimens all under one roof.</p>
        
        <p>After that, we headed to the Museo ni Manuel Quezon, where we learned more about the life and legacy of one of the country's most respected presidents. The exhibits offered a glimpse into his leadership, personal life, and contributions to Philippine history.</p>
        
        <p>The day grew even more interesting as we explored the Presidential Car Museum located within the Quezon Memorial Circle. Seeing the actual vehicles used by former Philippine presidents made history feel much closer and more tangible. Each car told a story, reflecting different eras of the country's leadership.</p>
        
        <p>The whole day was a memorable mix of learning, curiosity, and a growing appreciation for our country's past.</p>
        
        <div class="blog-gallery">
          <img src="/DAY 3/day3 (1).jpg" alt="Day 3 - Image 1">
          <img src="/DAY 3/day3 (2).jpg" alt="Day 3 - Image 2">
          <img src="/DAY 3/day3 (3).jpg" alt="Day 3 - Image 3">
          <img src="/DAY 3/day3 (4).jpg" alt="Day 3 - Image 4">
          <img src="/DAY 3/day3 (5).jpg" alt="Day 3 - Image 5">
          <img src="/DAY 3/day3 (6).jpg" alt="Day 3 - Image 6">
        </div>
      `
    },
    {
      id: '7',
      title: 'Educational Tour - Day 4',
      date: 'April 10, 2025',
      image: '/DAY 4/day4 (1).jpg',
      author: 'Tour Participant',
      content: `
        <p>On the fourth day of our tour, we had the rare opportunity to visit the Bangko Sentral ng Pilipinas (BSP). It was a fascinating and educational experience where we witnessed the meticulous processes involved in currency production. We observed how money is printed, how gold is molded, and how silver is plated, processes that require extreme precision and security.</p>
        
        <p>Unfortunately, due to strict regulations, photography was not allowed, but the experience left a strong impression on all of us. Seeing firsthand how the country's monetary system operates gave us a deeper understanding of the value of money and the responsibility that comes with managing it.</p>
        
        <p>In the afternoon, we visited Hytec Power Incorporated, a leading provider of industrial and educational training equipment in the Philippines. Hytec specializes in supplying high-tech machines and simulators used in various fields such as robotics, automation, mechatronics, and renewable energy systems.</p>
        
        <p>Their mission is to bridge the gap between education and industry by providing hands-on, real-world tools that prepare students and professionals for modern technical environments. During our visit, we explored their training facilities, saw demonstrations of advanced equipment, and learned about their partnerships with educational institutions.</p>
        
        <p>It was both inspiring and motivating to see how innovation and education come together to shape the country's future workforce.</p>
        
        <div class="blog-gallery">
          <img src="/DAY 4/day4 (1).jpg" alt="Day 4 - Image 1">
          <img src="/DAY 4/day4 (2).jpg" alt="Day 4 - Image 2">
          <img src="/DAY 4/day4 (3).jpg" alt="Day 4 - Image 3">
          <img src="/DAY 4/day4 (4).jpg" alt="Day 4 - Image 4">
          <img src="/DAY 4/day4 (5).jpg" alt="Day 4 - Image 5">
          <img src="/DAY 4/day4 (6).jpg" alt="Day 4 - Image 6">
        </div>
      `
    },
    {
      id: '8',
      title: 'Educational Tour - Day 5',
      date: 'April 11, 2025',
      image: '/DAY 5/day5 (1).jpg',
      author: 'Tour Participant',
      content: `
        <p>On the fifth day of the tour, we explored key components of urban transportation and traffic management, beginning with a visit to the Light Rail Transit Line 2 (LRT-2). It was a fascinating behind-the-scenes experience where we gained insight into how the LRT system operates from train maintenance to daily scheduling and safety protocols.</p>
        
        <p>Seeing how much planning and coordination is required to move thousands of commuters every day gave us a new appreciation for public transport systems.</p>
        
        <p>Later in the day, we visited the Metropolitan Manila Development Authority (MMDA), where we hoped to meet with Gabriel Go. Unfortunately, he wasn't available at the time of our visit, but the experience remained insightful.</p>
        
        <p>We still had the chance to learn about the MMDA's initiatives in traffic control, disaster response, and urban planning. Despite the missed opportunity to speak directly with a key figure, we left with valuable knowledge about how the agency plays a critical role in managing the challenges of Metro Manila's urban landscape.</p>
        
        <div class="blog-gallery">
          <img src="/DAY 5/day5 (1).jpg" alt="Day 5 - Image 1">
          <img src="/DAY 5/day5 (2).jpg" alt="Day 5 - Image 2">
          <img src="/DAY 5/day5 (3).jpg" alt="Day 5 - Image 3">
          <img src="/DAY 5/day5 (4).jpg" alt="Day 5 - Image 4">
          <img src="/DAY 5/day5 (5).jpg" alt="Day 5 - Image 5">
          <img src="/DAY 5/day5 (6).jpg" alt="Day 5 - Image 6">
        </div>
      `
    },
    {
      id: '9',
      title: 'Educational Tour - Day 6',
      date: 'April 12, 2025',
      image: '/DAY 6/day6 (1).jpg',
      author: 'Tour Participant',
      content: `
        <p>On the sixth day of our tour, we arrived in Baguio City around 5 AM, welcomed by the chilly mountain breeze and the peaceful atmosphere that the city is known for. Our day began with a visit to the famous Strawberry Farm in La Trinidad. Walking through the fields surrounded by fresh greenery and the sweet scent of strawberries was both calming and enjoyable. Some of us even had the chance to pick fresh strawberries, an experience that added a personal and fun touch to the morning.</p>
        
        <p>Afterward, we visited the Chinese Bell Church, a serene and intricately designed temple that offered a peaceful space for reflection and a glimpse into Baguio's cultural diversity. We then checked in at Prince Plaza Hotel and finally sat down to a warm and satisfying breakfast.</p>
        
        <p>In the afternoon, our itinerary took us to the Philippine Military Academy (PMA), where we were immersed in the legacy and discipline of the country's premier military institution. The visit was both inspiring and eye-opening, as we learned about the values and sacrifices behind military service.</p>
        
        <p>We continued on to Mines View Park, one of Baguio's most iconic spots. The panoramic view of the Benguet mining towns and surrounding mountains was absolutely breathtaking, and we took time to enjoy the fresh air, take photos, and browse local souvenirs.</p>
        
        <p>To wrap up the day, we relaxed at Burnham Park, enjoying its calm ambiance, followed by a visit to SM Baguio for a bit of leisure, shopping, and snacks. It was a perfect blend of nature, culture, and history, making for one of the most unforgettable days of our tour.</p>
        
        <div class="blog-gallery">
          <img src="/DAY 6/day6 (1).jpg" alt="Day 6 - Image 1">
          <img src="/DAY 6/day6 (2).jpg" alt="Day 6 - Image 2">
          <img src="/DAY 6/day6 (3).jpg" alt="Day 6 - Image 3">
          <img src="/DAY 6/day6 (4).jpg" alt="Day 6 - Image 4">
          <img src="/DAY 6/day6 (5).jpg" alt="Day 6 - Image 5">
          <img src="/DAY 6/day6 (6).jpg" alt="Day 6 - Image 6">
        </div>
      `
    },
    {
      id: '10',
      title: 'Educational Tour - Day 7',
      date: 'April 13, 2025',
      image: '/DAY 7/day7 (1).jpg',
      author: 'Tour Participant',
      content: `
        <p>On the seventh and final day of our educational tour, we headed to Star City, one of the most popular amusement parks in Metro Manila. The moment we entered, we were filled with excitement and anticipation. Even though our time there was limited, we made every second count.</p>
        
                <p>My classmates and I ran from one ride to another laughing, screaming, and enjoying the thrill of each attraction. Whether it was the dizzying roller coasters or the spooky horror house, every ride brought a new wave of joy. We took countless photos, shared snacks, and spent what little time we had simply enjoying each other's company. The smiles, the energy, the shared moments, everything about that day was unforgettable.</p>
        
        <p>But beyond the fun and excitement, what made this final day truly special was the feeling of togetherness. Throughout the tour, we had grown closer. We had learned alongside each other, helped one another through long walks and early mornings, shared quiet reflections at historical sites, and bonded over jokes and stories during long bus rides. By the time we were at Star City, we weren't just classmates anymore - we were a team, a family.</p>
        
        <p>As we packed up and prepared to go home, a mix of emotions filled the air. There was happiness for all we had experienced, sadness that it had come to an end, and gratitude for the memories we created. This tour taught us not only about our country's history, systems, and culture but also about ourselves and each other. It reminded us of the value of stepping out of the classroom, seeing things firsthand, and making real connections with the world around us.</p>
        
        <p>The experiences we had from Manila to Subic, from Baguio to Star City will stay with us forever. It wasn't just an educational trip; it was a life experience that helped shape our perspectives and strengthened our relationships. We went home not just with souvenirs, but with stories, friendships, and a deeper appreciation for our heritage and for each other.</p>
        
        <div class="blog-gallery">
          <img src="/DAY 7/day7 (1).jpg" alt="Day 7 - Image 1">
          <img src="/DAY 7/day7 (2).jpg" alt="Day 7 - Image 2">
          <img src="/DAY 7/day7 (3).jpg" alt="Day 7 - Image 3">
          <img src="/DAY 7/day7 (4).jpg" alt="Day 7 - Image 4">
          <img src="/DAY 7/day7 (5).jpg" alt="Day 7 - Image 5">
          <img src="/DAY 7/day7 (6).jpg" alt="Day 7 - Image 6">
        </div>
      `
    }
  ];
  
  const post = blogPosts.find(post => post.id === id);
  
  if (!post) {
    return (
      <div className="page blog-post-page">
        <div className="container">
          <div className="blog-post-not-found">
            <h1>Blog Post Not Found</h1>
            <p>The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="btn">
              <FontAwesomeIcon icon={faArrowLeft} /> Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="page blog-post-page">
      <div className="blog-post-header" style={{ backgroundImage: `url(${post.image})` }}>
        <div className="overlay"></div>
        <div className="container">
          <h1>{post.title}</h1>
          <div className="blog-post-meta">
            <span>
              <FontAwesomeIcon icon={faCalendarAlt} /> {post.date}
            </span>
            <span>
              <FontAwesomeIcon icon={faUser} /> {post.author}
            </span>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="blog-post-content">
          <Link to="/blog" className="back-link">
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Blog
          </Link>
          
          <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

