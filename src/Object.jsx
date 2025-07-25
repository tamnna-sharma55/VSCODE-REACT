import React from 'react';

const people = [
  { name: "ram", age: 20 },
  { name: "shyam", age: 21 },
  { name: "radheshyam", age: 23 },
  { name: "himanshu", age: 24 }
];

const PeopleList = () => {
  return (
    <div>
      {people.map((person, index) => (
        <div key={index}>
          {Object.keys(person).map((key) => (
            <p key={key}>
              {key}: {person[key]}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PeopleList;
