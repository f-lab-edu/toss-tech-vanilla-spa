export default class Component {
  $target: HTMLElement | null;
  props;
  state: any;
  constructor($target: HTMLElement | null, props?: any) {
    this.$target = $target;
    this.props = props;
    this.setup();
    this.setEvent();
    this.render();
  }

  setup() {}

  mounted() {}

  template() {
    return "";
  }

  setEvent() {}

  render() {
    if (!this.$target) {
      return;
    }
    this.$target.innerHTML = this.template();
    this.mounted();
  }

  setState(newState: any) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}
