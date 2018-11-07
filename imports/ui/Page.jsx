import React from 'react';

import { useMeteorSubscription, useMeteorData } from 'meteor/react-meteor-hooks'

import Links from '../api/links';

export const Page = function (props) {
  const loading = useMeteorSubscription('links');
  const links = useMeteorData(() => Links.find().fetch());

  // const { loading, links } = useTracker(() => {
  //   const handle = Meteor.subscribe('links');
  //   const loading = !handle.ready();

  //   return {
  //     loading: loading,
  //     links: Links.find().fetch()
  //   }
  // });

  if(loading) return (<div>Loading links ...</div>);

  return (
    <ul>
      {links.map((link) => (
        <li key={link._id}>
          <a href={link.url} target="_blank">{link.title}</a>
        </li>
      ))}
    </ul>
  );
}
