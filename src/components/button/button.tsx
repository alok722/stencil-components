import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class MyButton {
  @Prop() text: string;
  @Prop() appearance: string;

  render() {
    return (
      <button class={`btn ${this.appearance}`} type="button">
        {/* Slot */}
        {this.text}
      </button>
    );
  }
}
