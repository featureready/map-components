import React from 'react';
import { storiesOf } from '@storybook/react';
import ListMap from '../components/ListMap';
import { withKnobs, text, boolean, number, object } from '@storybook/addon-knobs';

const infoBoxTab = 'Infobox Options';
const contentBoxTab = 'contentBox Options';
const mapTab = 'Map Options';

const stories = storiesOf('List map', module);
stories.addDecorator(withKnobs);

stories.add('with a scrollable list', () => (
  <ListMap
    zoom={number('Map zoom', 14, {}, mapTab)}
    center={object(
      'Map center',
      {
        lat: 35.6592715,
        lng: 139.7002091
      },
      mapTab
    )}
    places={object(
      'List of places',
      [
        {
          title: 'Shibuya Izakaya',
          caption: 'Nice yakitori place',
          icon: 'https://img.icons8.com/dusk/64/000000/picture.png',
          position: {
            lat: 35.6592715,
            lng: 139.7002091
          }
        },
        {
          title: 'Shinjuku Sushi Restaurant',
          caption: 'Cheap sushi bites',
          icon: 'https://img.icons8.com/dusk/64/000000/picture.png',
          position: {
            lat: 35.6603281,
            lng: 139.707173
          }
        },
        {
          title: 'Harajuku Gyoza',
          caption: 'Japanese dumplings',
          icon: 'https://img.icons8.com/dusk/64/000000/picture.png',
          position: {
            lat: 35.6535471,
            lng: 139.7047349
          }
        },
        {
          title: 'Harajuku Curry Shop',
          caption: 'Best curry in Tokyo',
          icon: 'https://img.icons8.com/dusk/64/000000/picture.png',
          position: {
            lat: 35.6511759,
            lng: 139.6972676
          }
        }
      ],
      mapTab
    )}
  />
));

stories.add('with a carousel', () => (
  <ListMap
    carousel={true}
    zoom={number('Map zoom', 14, {}, mapTab)}
    center={object(
      'Map center',
      {
        lat: 35.6592715,
        lng: 139.7002091
      },
      mapTab
    )}
    places={object(
      'List of places',
      [
        {
          title: 'Shibuya Izakaya',
          caption: 'Nice yakitori place',
          icon: 'https://img.icons8.com/dusk/64/000000/picture.png',
          position: {
            lat: 35.6592715,
            lng: 139.7002091
          }
        },
        {
          title: 'Shinjuku Sushi Restaurant',
          caption: 'Cheap sushi bites',
          icon: 'https://img.icons8.com/dusk/64/000000/picture.png',
          position: {
            lat: 35.6603281,
            lng: 139.707173
          }
        },
        {
          title: 'Harajuku Gyoza',
          caption: 'Japanese dumplings',
          icon: 'https://img.icons8.com/dusk/64/000000/picture.png',
          position: {
            lat: 35.6535471,
            lng: 139.7047349
          }
        },
        {
          title: 'Harajuku Curry Shop',
          caption: 'Best curry in Tokyo',
          icon: 'https://img.icons8.com/dusk/64/000000/picture.png',
          position: {
            lat: 35.6511759,
            lng: 139.6972676
          }
        }
      ],
      mapTab
    )}
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
