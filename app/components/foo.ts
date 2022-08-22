import Component from '@glimmer/component';

export interface FooSignature {
  Args: {
    bar: string;
  };
  Blocks: {
    default: [string];
  };
}

export default class Foo extends Component<FooSignature> {
  get barCapitalized() {
    return this.args.bar.toUpperCase();
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Foo: typeof Foo;
  }
}
