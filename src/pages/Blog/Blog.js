import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";

const Blog = () => {
  const { data, isLoading } = useQuery("blog", () =>
    fetch("https://boiling-eyrie-02929.herokuapp.com/blog").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }

  console.log(data);
  return (
    <div className="container mx-auto my-20">
      <div className="grid grid-col-1 lg:grid-cols-3 gap-5 justify-items-center ">
        {data.map((blog) => {
          return (
            <div class="card w-96 bg-base-100 shadow-xl">
              <div class="card-body">
                <h2 class="card-title">{blog.question}?</h2>
                <p>
                  <span className="text-purple-500"> Answer</span>:{" "}
                  {blog.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
