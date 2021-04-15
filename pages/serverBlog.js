const Blog = ({ posts }) => {
  return <div>title: {posts.title}</div>
}
export default Blog
// 在每次页面请求时都会运行，而在构建时不运行。
// 要设置某个页面使用服务器端渲染，就需要导出 getServerSideProps 函数
export async function getServerSideProps() {
  // 调用外部 API 获取内容
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const posts = await res.json()

  // 在构建时将接收到 `posts` 参数
  return {
    props: {
      posts
    }
  }
}
