import Categories from '@/components/blogs/categories/categories';
import FeaturedBlogs from '@/components/blogs/featured/featured-blogs';
import Search from '@/components/blogs/search/search';


export default function Blogs() {
  return (
      <>
          <Search />
          <FeaturedBlogs />
          <Categories />
      </>
  );
}
