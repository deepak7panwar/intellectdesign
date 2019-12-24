
import { UiWidgetsModule } from '../ui-widgets.module';
import { ButtonComponent } from './button.component';

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
