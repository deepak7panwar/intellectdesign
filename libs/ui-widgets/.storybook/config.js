import { configure, addDecorator } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11Y } from '@storybook/addon-a11y';

addDecorator(withKnobs);
addDecorator(withA11Y);
configure(require.context('../src/lib', true, /\.stories\.tsx?$/), module);
