import React, { Component } from "react";

const technologyImage = {
  html: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.w3.org%2Fhtml%2Flogo%2F&psig=AOvVaw2u3ETF2OM7uXxtU1lUwDy5&ust=1706643936270000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNin9Z6ug4QDFQAAAAAdAAAAABAE",
  css: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ACSS3_logo.svg&psig=AOvVaw2PIjjSyoQWuTwxjvvpXI-j&ust=1706644185726000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMCxs5Wvg4QDFQAAAAAdAAAAABAE",
  js: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FArchivo%3AJavaScript-logo.png&psig=AOvVaw04drqS6fRxZwC5yXQMbSEC&ust=1706644199961000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOikkJyvg4QDFQAAAAAdAAAAABAE",
  react:
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3AReact-icon.svg&psig=AOvVaw02ui-zpoWprpISeR9aubVQ&ust=1706644224563000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNCL96evg4QDFQAAAAAdAAAAABAE",
};

export default class Home extends Component {
  render() {
    return (
      <div>
        <p>
          Little bit about myself: A goal-driven, communicative young
          professional, a graduate of International Business master’s degree,
          with more than 9-year international experience, primary in sales and
          commercial client support. Passionate about web-development and
          recently embarked on intensive bootcamp to further enhance skills in
          this field.
        </p>
        <p>Here are some of technologies that I had a chance to learn:</p>
        {Object.entries(technologyImage).map(
          ([technology, imageUrl], index) => (
            <TechImageCard
              key={index}
              imageSrc={imageUrl}
              altText={technology}
            />
          )
        )}
      </div>
    );
  }
}
