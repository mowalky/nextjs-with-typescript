import { useState } from "react";

const ErrorMessage = () => <div>Something went wrong. Please try again.</div>;

const DelayPage = () => {
  let [isSaving, setIsSaving] = useState(false);
  let [isError, setIsError] = useState(false);

  async function handleSubmit() {
    setIsSaving(true);
    setIsError(false);

    try {
      let json = await fetch("https://jsonplaceholder.typicode.com/users");

      console.log(json);
    } catch (e) {
      setIsSaving(false);
      setIsError(true);
      console.log(e);
    }
  }

  return (
    <div>
      <button>save</button>
      {isError && <ErrorMessage />}
    </div>
  );
};

export default DelayPage;
