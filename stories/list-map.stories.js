import React from 'react';
import { storiesOf } from '@storybook/react';
import ListMap from '../components/ListMap';
import { withKnobs, text, boolean, number, object } from '@storybook/addon-knobs';

const mapTab = 'Map Options';

const stories = storiesOf('List map', module);
stories.addDecorator(withKnobs);

const places = [
  {
    id: 1,
    title: 'Shibuya Izakaya',
    caption: 'Nice yakitori place',
    icon: 'https://img.icons8.com/dusk/64/000000/picture.png',
    position: {
      lat: 35.6592715,
      lng: 139.7002091
    }
  },
  {
    id: 2,
    title: 'Shinjuku Sushi Restaurant',
    caption: 'Cheap sushi bites',
    icon: 'https://img.icons8.com/dusk/64/000000/picture.png',
    position: {
      lat: 35.6603281,
      lng: 139.707173
    }
  },
  {
    id: 3,
    title: 'Harajuku Gyoza',
    caption: 'Japanese dumplings',
    icon: 'https://img.icons8.com/dusk/64/000000/picture.png',
    position: {
      lat: 35.6535471,
      lng: 139.7047349
    }
  },
  {
    id: 4,
    title: 'Harajuku Curry Shop',
    caption: 'Best curry in Tokyo',
    icon: 'https://img.icons8.com/dusk/64/000000/picture.png',
    position: {
      lat: 35.6511759,
      lng: 139.6972676
    }
  },
  {
    id: 5,
    title: 'Karaoke Kan',
    caption: 'Singing place',
    icon: 'https://img.icons8.com/dusk/64/000000/picture.png',
    position: {
      lat: 35.6549714,
      lng: 139.7014199
    }
  },
  {
    id: 6,
    title: 'Onko Gakkai',
    caption: '2nd hand retro shop',
    icon: 'https://img.icons8.com/dusk/64/000000/picture.png',
    position: {
      lat: 35.6544832,
      lng: 139.7052823
    }
  },
  {
    id: 7,
    title: 'Tsutaya',
    caption: 'Book shop',
    icon: 'https://img.icons8.com/dusk/64/000000/picture.png',
    position: {
      lat: 35.6522689,
      lng: 139.7086297
    }
  },
  {
    id: 8,
    title: 'Harajuku Curry Shop',
    caption: 'Best curry in Tokyo',
    icon: 'https://img.icons8.com/dusk/64/000000/picture.png',
    position: {
      lat: 35.6511759,
      lng: 139.6972676
    }
  }
];

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
    places={object('List of places', places, mapTab)}
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
    places={object('List of places', places, mapTab)}
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
