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
          linkUrl: 'hats',
          price: 25
        },
        {
          title: '',
          imageUrl: 'https://i1.wp.com/www.coronainline.com/wp-content/uploads/2015/12/Bauer-Logo-600.jpg?ssl=1',
          id: 2,
          linkUrl: '',
          price: 25
        },
        {
          title: '',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSh1xRFQUukMZf30HOm2viS1rVAWGXKfYlOvXgNs47bjhbtqOu6',
          id: 3,
          linkUrl: '',
          price: 25
        },
        {
          title: '',
          imageUrl: 'https://d3e1m60ptf1oym.cloudfront.net/bf848f40-7a0f-40d4-8b1b-e5523426603a/clearance-sale-logo_xlarge.jpg',
          id: 4,
          size: 'large',
          linkUrl: '',
          price: 25
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