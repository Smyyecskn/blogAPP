

const Dashboard = () => {
  const URL = import.meta.env.VITE_BASE_URL;

  // const [blogs, setBlogs] = useState([]);

  // const blogData = async () => {
  //   const data = await axios.get(`${URL}/blogs`);
  //   setBlogs(data.data.data); // blogs functionun içine çektiğimiz veriyi gömdük.
  //   console.log(blogs);

  // };

  // useEffect(() => {
  //   blogData();//burdada blogDatayı birkez çektik ki sayfa ilk açıldıgında veriler gelsin
  // }, []);

  //!REACT-REDUX-TOOLKİT
  //1-app klasoru içinde Store oluşturma.
  //2-sarmalama(app.js dosyası içinde storeu provider ile uygulamaya sarmalama)
  //3-gerektiği yerde storeu useSellectorle çekme ve okuma
  //4-UI tarafında state değiştirmek için de dispatch yayınlayıp bunu reducera iletme
   
  return (
    <div>
      {/* {blogs.map((blog) => ( //blogsun içine butun verileri koyduk ve blogCarda aktardık
        <BlogCard key={blog._id} blog={blog} />
      ))} */}
    </div>
  );
};

export default Dashboard;
