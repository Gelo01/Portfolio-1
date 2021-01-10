import React, { FC } from "react";
import { AboutShapes } from "../assets/svg";
import ArticleCard from "../components/ArticleCard";
import ArticleWrapper from "../components/ArticleWrapper";
import Content from "../components/Content";
//article thumbnails
import FullStackThumbnail from "../assets/images/articles/full-stack.jpg";
import NetworkingThumbnail from "../assets/images/articles/networking.jpg";

interface Props {
  isMobile: boolean;
}

export const Articles: FC<Props> = ({ isMobile }) => {
  return (
    <section id="articles">
      <Content>
        {isMobile ? <></> : <AboutShapes />}
        <h1>Articles</h1>
        <ArticleWrapper>
          <ArticleCard
            description={
              "How to create and publish a full stack application using React.js, Nginx, Strapi, MongoDB, and DigitalOcean."
            }
            title={"Create a Full-Stack App"}
            image={FullStackThumbnail}
            tags={["Tutorial", "Cloud Hosting"]}
            link={
              "https://dev.to/jackrkelly/create-a-full-stack-web-application-using-react-strapi-nginx-mongodb-and-digitalocean-bkh"
            }
          />
          <ArticleCard
            description={
              "Learn about the importance of networking, and how to network successfully as a Software Engineer."
            }
            title={"The importance of networking"}
            image={NetworkingThumbnail}
            tags={["Career", "Beginners"]}
            link={"https://dev.to/jackrkelly/the-importance-of-networking-2o7o"}
          />
          <ArticleCard
            description={
              "How to create and publish a full stack application using React.js, Nginx, Strapi, MongoDB, and DigitalOcean."
            }
            title={"Create a Full-Stack App"}
            image={FullStackThumbnail}
            tags={["Tutorial", "Cloud Hosting"]}
            link={
              "https://dev.to/jackrkelly/create-a-full-stack-web-application-using-react-strapi-nginx-mongodb-and-digitalocean-bkh"
            }
          />
        </ArticleWrapper>
      </Content>
    </section>
  );
};