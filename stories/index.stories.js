import React from 'react';
import { storiesOf } from '@storybook/react';
import SingleMap from '../components/SingleMap';

storiesOf('SingleMap', module).add('with default settings', () => <SingleMap />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));
