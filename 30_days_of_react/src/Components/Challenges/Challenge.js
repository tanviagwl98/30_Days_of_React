import React from 'react';


export const Challenge = ({
    challenge: {
      name,
      description,
      status,
      days,
      level,
      duration,
      author: { firstName, lastName },
    },
  }) => (
    <div>
      <h1>{name}</h1>
      <p>{level}</p>
      <p>
        Author: {firstName} {lastName}
      </p>
      {duration && (
        <>
          {' '}
          <small>{duration}</small> <br />
        </>
      )}
      <small>Number of days: {days}</small>
  
      <p>{description}</p>
    </div>
  )