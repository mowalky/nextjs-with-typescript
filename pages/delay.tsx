import { useState } from "react";

const ErrorMessage = () => <div>Something went wrong. Please try again.</div>;

const DelayPage = () => {
  let [isSaving, setIsSaving] = useState(false);
  let [isError, setIsError] = useState(false);

  async function handleSubmit() {
    setIsSaving(true);
    setIsError(false);
    try {
      console.time("save");
      let [res] = await Promise.allSettled([
        fetch("https://jsonplaceholder.typicode.com/users"),
        new Promise((resolve) => setTimeout(resolve, 800)),
      ]);
      const APIResponse: Response = res.value;
      let results = await APIResponse.json();
      console.log(results);
      console.timeEnd("save");
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
      {isError && <ErrorMessage />}
    </div>
  );
};

export default DelayPage;
