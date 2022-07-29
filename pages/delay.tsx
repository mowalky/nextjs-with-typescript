import { useState } from "react";

const ErrorMessage = () => (
  <div style={{ display: "flex", justifyContent: "center", color: "red" }}>
    Something went wrong. Please try saving again.
  </div>
);

const DelayPage = () => {
  let [isSaving, setIsSaving] = useState(false);
  let [isError, setIsError] = useState(false);
  let [posts, setPosts] = useState([]);

  async function handleSubmit() {
    setPosts([]);
    setIsSaving(true);
    setIsError(false);

    try {
      let [res]: any = await Promise.allSettled([
        fetch("https://jsonplaceholder.typicode.com/posts"),
        new Promise((resolve) => setTimeout(resolve, 800)),
      ]);

      const APIResponse: Response = res.value;
      let results = await APIResponse.json();

      setPosts(results);
      setIsSaving(false);
    } catch (e) {
      setIsSaving(false);
      setIsError(true);
      console.log(e);
    }
  }

  return (
    <div>
      {!isSaving && <button onClick={handleSubmit}>save</button>}
      {isSaving && <button disabled>saving...</button>}
      <hr />
      {isError && <ErrorMessage />}
      <ul>
        {posts.map((post: { title: string; body: string }) => {
          return (
            <li>
              {post.title}
              <br />
              <em>
                <small>{post.body}</small>
              </em>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DelayPage;
