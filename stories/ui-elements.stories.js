import React from 'react';
import { storiesOf } from '@storybook/react';
import Cell from '../components/Cell';
import InfoBox from '../components/InfoBox';
import { withKnobs, text, boolean, number, object } from '@storybook/addon-knobs';

const stories = storiesOf('UI elements', module);
stories.addDecorator(withKnobs);

stories.add('Cell', () => (
  <Cell
    icon={text('Icon', 'https://img.icons8.com/dusk/64/000000/picture.png')}
    title={text('Title', 'A title here')}
    caption="A caption here"
  />
));

stories.add('Info Box', () => (
  <InfoBox
    icon={text('Icon', 'https://img.icons8.com/dusk/64/000000/picture.png')}
    title={text('Title', 'A title here')}
    caption="A caption here"
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
