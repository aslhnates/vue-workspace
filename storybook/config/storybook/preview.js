import "../../src/assets/tailwind.css";
import { addDecorator, addParameters } from "@storybook/vue";
import { withA11y } from "@storybook/addon-a11y";

addDecorator(withA11y);
// addDecorator(() => "<div class='container'><story /></div>")

addParameters({
  options: {
    storySort: (aArray, bArray) => {
      // const a = aArray[1];
      // const b = bArray[1];

      // return a.kind === b.kind ? 0 : a.kind > b.kind ? 1 : -1;

      const a = aArray[1];
      const b = bArray[1];

      const aGroup = a.kind.split("/")[1];
      const bGroup = b.kind.split("/")[1];

      if (aGroup > bGroup) {
        return 1;
      }
      else if (aGroup < bGroup) {
        return -1;
      }
      return a.name > b.name ? 1 : -1;
    },
  }
})