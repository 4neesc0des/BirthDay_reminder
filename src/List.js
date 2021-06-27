import React from "react";
const list = ({ people }) => {
  return (
    <>
      {people.map((value) => {
        const { id, name, age, image } = value;
        return (
          <article key={id}>
            <img src={image} alt="peopleimage" />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default list;
