import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import {Challenge} from './Challenge.js';

export const Challenges = (props) => {
    const path = props.location.pathname
    const slug = path.split('/').slice(path.split('/').length - 1)[0]
    const challenges = [
        {
          name: '30 Days Of Python',
          description:
            '30 Days of Python challenge is a step by step guide to learn Python in 30 days.',
          status: 'completed',
          days: 30,
          level: 'Beginners to Advanced',
          duration: '20 Nov 2019 - 20 Dec 2019',
          slug: 'pyhton',
          url:
            'https://github.com/https://https://github.com/Asabeneh/30-Days-Of-Python.com/Asabeneh/30-Days-Of-JavaScript/30-Days-Of-React',
          author: {
            firstName: 'Asabeneh',
            lastName: 'Yetayeh',
          },
        },
        {
          name: '30 Days Of JavaScript',
          description:
            '30 Days of JavaScript challenge is a step by step guide to learn JavaScript in 30 days.',
          status: 'completed',
          days: 30,
          level: 'Beginners to Advanced',
          duration: '1 Jan 2020 - 30 Jan 2020',
          slug: 'javascript',
          url: 'https://github.com/Asabeneh/30-Days-Of-JavaScript',
          author: {
            firstName: 'Asabeneh',
            lastName: 'Yetayeh',
          },
        },
        {
          name: '30 Days Of React',
          description:
            '30 Days of React challenge is a step by step guide to learn React in 30 days.',
          status: 'ongoing',
          days: 30,
          level: 'Beginners to Advanced',
          duration: '1 Oct 2020- 30 Oct 2020',
          slug: 'react',
          url: 'https://github.com/Asabeneh/30-Days-Of-React',
          author: {
            firstName: 'Asabeneh',
            lastName: 'Yetayeh',
          },
        },
        {
          name: '30 HTML and CSS',
          description:
            '30 Days of HTML and CSS challenge is a step by step guide to learn HTML and CSS in 30 days.',
      
          status: 'coming',
          days: 30,
          level: 'Beginners to Advanced',
          duration: '',
          slug: 'html-and-css',
          url: '',
          author: {
            firstName: 'Asabeneh',
            lastName: 'Yetayeh',
          },
        },
        {
          name: '30 ReactNative',
          description:
            '30 Days of ReactNative challenge is a step by step guide to learn ReactNative in 30 days.',
          status: 'coming',
          days: 30,
          level: 'Beginners to Advanced',
          duration: '',
          slug: 'reactnative',
          url: '',
          author: {
            firstName: 'Asabeneh',
            lastName: 'Yetayeh',
          },
        },
        {
          name: '30 Data Analysis',
          description:
            '30 Days of Data Analysis challenge  is a step by step guide to learn about data, data visualization and data analysis in 30 days.',
          status: 'coming',
          days: 30,
          level: 'Beginners to Advanced',
          duration: '',
          slug: 'data-analysis',
          url: '',
          author: {
            firstName: 'Asabeneh',
            lastName: 'Yetayeh',
          },
        },
        {
          name: '30 Machine Learning',
          description:
            '30 Days of Machine learning challenge  is a step by step guide to learn data cleaning, machine learning models and predictions in 30 days.',
          status: 'coming',
          days: 30,
          level: 'Beginners to Advanced',
          duration: '',
          slug: 'machine-learning',
          url: '',
          author: {
            firstName: 'Asabeneh',
            lastName: 'Yetayeh',
          },
        },
      ]
      const challenge = challenges.find((challenge) => challenge.slug === slug)
   
    return (
      <div>
        <h1>30 Days Of React Challenge</h1>
        <ul>
          {challenges.map(({ name, slug }) => (
            <li>
              <NavLink to={`/challenges/${slug}`}>{name}</NavLink>
            </li>
          ))}
        </ul>
        <Routes>
          <Route
            exact
            path={'/challenges'}
            component={() => <h1>Choose any of the challenges</h1>}
          />
          <Route
            path={path}
            component={(props) => <Challenge challenge={challenge} />}
          />
        </Routes>
      </div>
    )
  }





