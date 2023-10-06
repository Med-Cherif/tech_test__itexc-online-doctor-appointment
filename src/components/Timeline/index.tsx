/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from "react";

interface TProps {
  data: any[];
  render: (item: any, index: number) => any;
  //   renderPoint: (item: any, index: number) => any
  idKey?: string | null;
}

const Timeline = ({ data, render, idKey = "id" }: TProps) => {
  return (
    <div className="timeline">
      {data.map((item, index) => {
        const key = idKey === null ? index : item[idKey];
        return (
          <div key={key} className="timeline-item">
            {render(item, index)}
            <span className="timeline-item-point"></span>
            {/* <span className="timeline-item-point-text">March 2010</span> */}
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
