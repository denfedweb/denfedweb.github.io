import React, {useEffect, useState} from 'react';
import axios from 'axios';

function AdminSocialLinks() {
  const [form, setForm] = useState({
    fontawesome: '',
    href: '',
    text: ''
  });
  const [links, setLinks] = useState([]);

  function onChangeForm(e) {
    setForm({...form, returnSecureToken: true,  [e.target.name]: e.target.value});
  }

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

  function addSocialLink(){
    axios.post('https://denfedweb-github-io.firebaseio.com/about/socialLinks.json', form).then(()=>{
      setLinks([...links, form]);
      setForm({
        fontawesome: '',
        href: '',
        text: ''
      });
    });
  }

  function remove(id) {
    axios.delete(`https://denfedweb-github-io.firebaseio.com/about/socialLinks/${id}.json`).then(()=>{
      const newLinks = links.filter(link => link.id !== id);
      setLinks(newLinks);
    });
  }

  return (
    <ul className="collection">
      {
        links.map(link => (
          <li key={link.id} className='collection-item' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span>{link.text}</span>
            <button onClick={()=> remove(link.id)} className="btn waves-effect waves-light">Remove</button>
          </li>
        ))
      }
      <li className='collection-item'>
        <div className="input-field">
          <input onChange={onChangeForm} value={form.fontawesome} id="fontawesome" name="fontawesome" type="text"/>
          <label htmlFor="fontawesome">Fontawesome icon</label>
        </div>
        <div className="input-field">
          <input onChange={onChangeForm} value={form.href} id="href" name="href" type="text"/>
          <label htmlFor="href">Href</label>
        </div>
        <div className="input-field">
          <input onChange={onChangeForm} value={form.text} id="text" name="text" type="text"/>
          <label htmlFor="text">Text</label>
        </div>
        <button className="btn waves-effect waves-light" onClick={addSocialLink}>Add social link</button>
      </li>
    </ul>
  );
}

export default AdminSocialLinks;
