import readme from '../components/button/readme.md';

export default {
  title: 'Components/Button',
  argTypes: {
    text: {
      description: 'Define label of Button',
    },
    appearance: {
      description: 'Define appearance of Button',
      control: {
        type: 'inline-radio',
        options: ['primary', 'secondary', 'tertiary', 'warning', 'danger'],
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Custom Stencil _button_ component, Tag: **<my-button>**'
      }
    },
    notes: readme,
  }
};

const Template = ({ text, appearance }) => `<my-button text=${text} appearance=${appearance}></my-button>`;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary',
  appearance: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary',
  appearance: 'secondary'
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  text: 'Tertiary',
  appearance: 'tertiary'
};

export const Warning = Template.bind({});
Warning.args = {
  text: 'Warning',
  appearance: 'warning'
};

export const Danger = Template.bind({});
Danger.args = {
  text: 'Danger',
  appearance: 'danger'
};
