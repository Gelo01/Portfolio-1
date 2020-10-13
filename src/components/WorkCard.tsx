import React, { FC, useState } from "react";
import Close from "../assets/svg/Close";
import ExpandWork from "../assets/svg/ExpandWork";
import Carousel from "./Carousel";
import LoadingImage from "../assets/images/loading.svg";
import Img from "react-cool-img";
import BackArrow from "../assets/svg/BackArrow";

interface Props {
  description: string;
  tags: Array<string>;
  title: string;
  github?: string;
  preview?: string;
  images: Array<string>;
  thumbnail: string;
  primaryColor?: string;
  checkCurrentRef: () => void;
  viewport: number;
  onModalOpen: () => void;
  onModalClose: () => void;
}

const WorkCard: FC<Props> = (props: Props) => {
  const {
    description,
    tags,
    title,
    checkCurrentRef,
    images,
    viewport,
    onModalOpen,
    onModalClose,
    thumbnail,
    primaryColor,
  } = props;

  const [isVisible, setIsVisible] = useState(false);
  const [imageListVisible, setImageListVisible] = useState(false);

  return (
    <li className="work-card">
      <div
        className="image-list-wrapper"
        style={{
          pointerEvents: imageListVisible ? "auto" : "none",
          left: imageListVisible ? "0" : "-100%",
          overflowY: imageListVisible ? "scroll" : "hidden",
        }}
      >
        <div
          className="back-arrow"
          onClick={() => {
            setImageListVisible(false);
          }}
        >
          <BackArrow />
        </div>
        <ul className="image-list">
          {images.map((img, index) => (
            <li key={index}>
              <a href={img} target="_blank" rel="noopener noreferrer">
                <Img placeholder={LoadingImage} src={img} alt="" lazy={true} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="work-details"
        style={{
          opacity: isVisible ? "1" : "0",
          pointerEvents: isVisible ? "auto" : "none",
        }}
      >
        <div
          onClick={() => {
            setIsVisible(false);
            onModalClose();
            checkCurrentRef();
          }}
          className="close"
        >
          <Close />
        </div>
        <div className="content">
          <Carousel
            images={images}
            viewport={viewport}
            color={primaryColor}
            setImageListVisible={setImageListVisible}
          />

          <div className="text">
            <h5 style={{ color: primaryColor ? primaryColor : "" }}>{title}</h5>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div
        className="work-card"
        onClick={() => {
          setIsVisible(true);
          onModalOpen();
          document.title = `${title} | Jack Kelly`;
        }}
      >
        <div className="image">
          <Img
            placeholder={LoadingImage}
            src={thumbnail}
            alt="Work Card Thumbnail"
            lazy={true}
          />
          <ul className="tag-list">
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="text">
          <h5>{title}</h5>
          <p>
            {description.split(" ").slice(0, 35).join(" ")}
            {description.split(" ").length > 35 ? "..." : ""}
          </p>
          <div className="link">
            <p>
              More Details <ExpandWork />
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default WorkCard;
