
import { UiWidgetsModule } from '../ui-widgets.module';
import { ButtonComponent } from './button.component';
import { storiesOf, moduleMetadata } from '@storybook/angular';
export default {
  title: 'ButtonComponent'
}
export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: ButtonComponent,
  props: {
  }
})

storiesOf('button', module)
  .addDecorator(
    moduleMetadata({
      declarations: [ButtonComponent],
    })
  )
  .add('default', () => {
    return {
      template: `<myworkspace-button></myworkspace-button>`,
      props: {},
    };
  })
