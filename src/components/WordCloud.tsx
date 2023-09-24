import React, { useEffect, useRef } from "react";
import { min, max, select, scale as d3Scale } from "d3";
import cloud from "d3-cloud";
import type { Word } from "d3-cloud";

const getWidth = (marginLeft: number, marginRight: number): number => {
  const margins = marginLeft + marginRight;

  if (typeof window === "undefined") {
    return 1000 - margins;
  }
  return window?.innerWidth - 500 - margins;
};
const scale = d3Scale.linear().range([30, 100]);
const fill = d3Scale.category10();

const words: Word[] = [
  { text: "Running", size: 20 },
  { text: "Surfing", size: 20 },
  { text: "Climbing", size: 50 },
  { text: "Kiting", size: 30 },
  { text: "Sailing", size: 20 },
  { text: "Snowboarding", size: 70 },
  { text: "Running2", size: 80 },
  { text: "Surfing2", size: 10 },
  { text: "Climbing2", size: 20 },
  { text: "Kiting2", size: 30 },
  { text: "Sailing2", size: 20 },
  { text: "Snowboarding2", size: 90 },
];

const WordCloud = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef || !svgRef.current) return;

    const margin = { top: 10, right: 10, bottom: 10, left: 10 };
    const width = getWidth(margin.left, margin.right);
    const height = 1000 - margin.top - margin.bottom;

    scale.domain([
      min(words, (d) => d.size || 0),
      max(words, (d) => d.size || 0),
    ]);

    const svg = select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const wordsLayout = cloud()
      .size([width, height])
      .words(words)
      .padding(5)
      .rotate(() => (Math.random() < 0.5 ? 90 : 0))
      .fontSize((d) => scale(d.size || 0))
      .on("end", draw);

    wordsLayout.start();

    function draw(wordData: Word[]) {
      svg
        .append("g")
        .attr(
          "transform",
          `translate(${wordsLayout.size()[0] / 2},${wordsLayout.size()[1] / 2})`
        )
        .selectAll("text")
        .data(wordData)
        .enter()
        .append("text")
        .style("font-size", (d) => d.size + "px")
        .style("fill", (_, i) => fill(String(i)))
        .attr("text-anchor", "middle")
        .style("font-family", "Impact")
        .attr("transform", (d) => `translate(${d.x},${d.y})rotate(${d.rotate})`)
        .attr("margin", "5")
        .text((d) => d.text || "");
    }
    return () => {
      // Remove the SVG element when the component unmounts
      svg.remove();
    };
  }, []);

  return <svg style={{ backgroundColor: "#0F0F0F" }} ref={svgRef}></svg>;
};

export default WordCloud;
