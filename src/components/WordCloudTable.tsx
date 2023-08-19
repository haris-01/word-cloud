import React from "react";
import { WordCloudType } from "src/types/wordCloudType";

type WordCloudTablePropsType = { wordCloud: WordCloudType[] };

const WordCloudTable = ({ wordCloud }: WordCloudTablePropsType) => {
  return (
    <div className="flex justify-center pt-8">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2 bg-slate-700">Word</th>
            <th className="border px-4 py-2 bg-slate-700">Frequency</th>
          </tr>
        </thead>
        <tbody>
          {wordCloud.map(({ word, frequency }, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{word}</td>
              <td className="border px-4 py-2">{frequency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WordCloudTable;
