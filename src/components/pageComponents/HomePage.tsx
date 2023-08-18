import React from "react";
import { useAddSentence } from "src/hooks/useAddSentence";
import { useDeleteAllSSentences } from "src/hooks/useDeleteAllSentences";
import { useGetAllSentences } from "src/hooks/useGetAllSentences";

type Props = {};

const HomePage = (props: Props) => {
  const { sentences } = useGetAllSentences();
  const { deleteAllSentences } = useDeleteAllSSentences();
  const { addSentence } = useAddSentence();
  const [value, setValue] = React.useState("");
  return (
    <div>
      {sentences.map((sentence: any, i: any) => (
        <p key={i}>{sentence.sentence}</p>
      ))}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => deleteAllSentences()}>Clear</button>
      <button onClick={() => addSentence(value)}>add to sentences</button>
    </div>
  );
};

export default HomePage;
