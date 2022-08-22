import Component from '@glimmer/component';

interface FooArgs {
  bar: string;
}

export default class Foo extends Component<FooArgs> {
  get barCapitalized() {
    return this.args.bar.toUpperCase();
  }
}
