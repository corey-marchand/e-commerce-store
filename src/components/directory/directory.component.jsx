import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor(){
    super();

    this.state = {
       sections: [
        {
          title: '',
          imageUrl: 'https://www.logolynx.com/images/logolynx/b7/b77bf32ca55eaff5777fccc226ffa9dd.jpeg',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: '',
          imageUrl: 'https://i1.wp.com/www.coronainline.com/wp-content/uploads/2015/12/Bauer-Logo-600.jpg?ssl=1',
          id: 2,
          linkUrl: ''
        },
        {
          title: '',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSh1xRFQUukMZf30HOm2viS1rVAWGXKfYlOvXgNs47bjhbtqOu6',
          id: 3,
          linkUrl: ''
        },
        {
          title: '',
          imageUrl: 'https://marketplace.canva.com/EADaoHKBHSE/1/0/800w/canva-dried-winter-branches-photo-winter-clearance-sale-facebook-ad-iv1mMqTQKoY.jpg',
          id: 4,
          size: 'large',
          linkUrl: ''
        }
      ] 
    }
  }
  render(){
    return(
      <div className='directory-menu'>
          {this.state.sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))}
      </div>
    )
  }
}

export default Directory;