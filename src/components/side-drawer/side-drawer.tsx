import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'uc-side-drawer',
  styleUrl: './side-drawer.css',
  shadow: true
})
export class SideDrawer {
  @Prop({ reflect: true }) heading: string = '';
  @Prop({ reflect: true, mutable: true }) open: boolean;

  onCloseDrawer() {
    this.open = false;
  }


  render() {
    return (
      <aside>
        <header>
          <h1>{this.heading}</h1>
          <button onClick={this.onCloseDrawer.bind(this)}>X</button>
        </header>
        <main>
          <slot />
        </main>
      </aside>
    );
  }
}
