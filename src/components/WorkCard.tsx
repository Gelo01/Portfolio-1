import React, { FC } from "react";

import PlaceholderImage from "../assets/images/placeholder.png";

interface Props {
  description: string;
  tags: Array<string>;
  title: string;
}

const WorkCard: FC<Props> = (props: Props) => {
  const { description, tags, title } = props;

  return (
    <li>
      <div className="image">
        <img src={PlaceholderImage} alt="" />
        <ul className="tag-list">
          {tags.map((tag, index) => (
            <li key={index}>
              <span>{tag}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="text">
        <h5>{title}</h5>
        <p>{description}</p>
        <span>Expand</span>
      </div>
    </li>
  );
};

export default WorkCard;
