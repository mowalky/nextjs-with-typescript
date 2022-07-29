import { useState } from "react";

const TestPage: React.FC<{}> = () => {
  const [data, setData] = useState<null | { message: string }>(null);

  const handleDataLoad = async () => {
    const load = await fetch("/api/hello");
    const data = await load.json();
    setData(data);
  };

  return (
    <>
      <button onClick={handleDataLoad}>Load Data</button>
      {!!data && <pre>Data: {data.message}</pre>}
    </>
  );
};

export default TestPage;
