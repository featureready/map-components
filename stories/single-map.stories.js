import React from 'react';
import { storiesOf } from '@storybook/react';
import SingleMap from '../components/SingleMap';
import { withKnobs, text, boolean, number, object } from '@storybook/addon-knobs';

const infoBoxTab = 'Infobox Options';
const contentBoxTab = 'contentBox Options';
const mapTab = 'Map Options';

const stories = storiesOf('Single map', module);
stories.addDecorator(withKnobs);

stories.add('With infoBox', () => (
  <SingleMap
    zoom={number('Map zoom', 8, {}, mapTab)}
    center={object(
      'Map center',
      {
        lat: -34.397,
        lng: 150.644
      },
      mapTab
    )}
    infoBox={{
      icon: text('Info icon url', '', infoBoxTab),
      title: text('Info title', 'Where we will meet', infoBoxTab),
      caption: text(
        'Info caption',
        'At front of Odakyu Hyakkaten. Shinjuku District, Shinjuku',
        infoBoxTab
      ),
      offset: object(
        'Offset',
        {
          x: 0,
          y: 0
        },
        infoBoxTab
      )
    }}
  />
));
stories.add('With infoBox and icon', () => (
  <SingleMap
    zoom={number('Map zoom', 8, {}, mapTab)}
    center={object(
      'Map center',
      {
        lat: -34.397,
        lng: 150.644
      },
      mapTab
    )}
    infoBox={{
      icon: text('Info icon url', 'https://img.icons8.com/dusk/64/000000/picture.png', infoBoxTab),
      title: text('Info title', 'Where we will meet', infoBoxTab),
      caption: text(
        'Info caption',
        'At front of Odakyu Hyakkaten. Shinjuku District, Shinjuku',
        infoBoxTab
      ),
      offset: object(
        'Info offset',
        {
          x: 0,
          y: 0
        },
        infoBoxTab
      )
    }}
  />
));

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));
