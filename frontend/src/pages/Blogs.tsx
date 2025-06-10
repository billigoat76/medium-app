import BlogCard from '../components/BlogCard';
import Appbar from '../components/Appbar';
import { useBlogs } from '../hooks';

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  return (
    <div className='gap-x-4'>
      <Appbar />
      {loading ? (
        <div className='flex justify-center items-center mt-10 text-lg font-medium'>
          Loading...
        </div>
      ) : (
        <div className='flex flex-col justify-center m-auto max-w-xl gap-4 p-4'>
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              authorName={blog.author?.name || 'John DoeBro'}
              id={blog.id}
              title={blog.title}
              content={blog.content}
              publishedDate='7 June 2025'
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
