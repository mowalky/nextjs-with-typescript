import { useState } from "react";

const TestPage: React.FC<{}> = () => {
  const [data, setData] = useState<null | { message: string }>(null);

  return <div>test</div>;
};

export default TestPage;
