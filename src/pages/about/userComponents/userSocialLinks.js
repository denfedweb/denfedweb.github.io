import React, {useEffect, useState} from 'react';
import axios from "axios";

function UserSocialLinks() {
  const [links, setLinks] = useState([]);

  useEffect(()=> {
    axios.get('https://denfedweb-github-io.firebaseio.com/about/socialLinks.json').then(({data}) => {
      const linksObj = Object.keys(data)
        .map(key => ({
          ...data[key],
          id: key
        }));
      setLinks(linksObj);
    })
  }, [])

  return (
    <ul>
      {
        links.map(link => <li key={link.id}><i className={link.fontawesome}/> <a href={link.href}>{link.text}</a></li>)
      }
    </ul>
  );
}

export default UserSocialLinks;
