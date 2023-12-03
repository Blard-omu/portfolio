import React from 'react';
import './footer.css';
import footerData from './footerDB';

const Footer = () => {
  // console.log(footerData);
  return (
    <div id='footer' className='footer'>
      <div className='row mx-auto'>
        {footerData.map((item) => (
          <div className='col text-align-start' key={item.id}>
            <h5>{item.title}</h5>
            <ul>
              <li>
                <a href=''>{item.item1}</a>
              </li>
              <li>
                <a href=''>{item.item2}</a>
              </li>
              <li>
                <a href=''>{item.item3}</a>
              </li>
              <li>
                <a href=''>{item.item4}</a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
