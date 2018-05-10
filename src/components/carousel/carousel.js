import Flickity from 'react-flickity-component'
import React from 'react';

const flickityOptions = {
  cellAlign: 'center',
  autoPlay: true,
  draggable: true,
  groupCells: 1,
  wrapAround: true,
  accessible: true
}

export default class Carousel extends React.Component {
  render() {
    return (
      <Flickity
        className='carousel'
        options={flickityOptions}
        reloadOnUpdate
      >
        <img src="https://static.wixstatic.com/media/1642d4_211129ec79da41cb982eb42a3bd44bf0~mv2.png/v1/crop/x_0,y_0,w_1439,h_757/fill/w_1140,h_600,al_c,usm_0.66_1.00_0.01/1642d4_211129ec79da41cb982eb42a3bd44bf0~mv2.png" />
        <img src="https://static.wixstatic.com/media/1642d4_211129ec79da41cb982eb42a3bd44bf0~mv2.png/v1/crop/x_0,y_0,w_1439,h_757/fill/w_1140,h_600,al_c,usm_0.66_1.00_0.01/1642d4_211129ec79da41cb982eb42a3bd44bf0~mv2.png" />
        <img src="https://static.wixstatic.com/media/1642d4_211129ec79da41cb982eb42a3bd44bf0~mv2.png/v1/crop/x_0,y_0,w_1439,h_757/fill/w_1140,h_600,al_c,usm_0.66_1.00_0.01/1642d4_211129ec79da41cb982eb42a3bd44bf0~mv2.png" />
      </Flickity>
    )
  }
}