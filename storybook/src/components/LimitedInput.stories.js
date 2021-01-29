import LimitedInput from "./LimitedInput";
import { withKnobs, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

export default {
  title: "Forms/LimitedInput",
  decorators: [() => "<div class='test-asli'><story/></div>", withKnobs],
  parameters: {
    notes: `
      #Aslıhan Badem
      Hoş geldiniz!
      `,
  },
};

export const SimpleStory = () => ({
  render() {
    return <LimitedInput />
  },
});

SimpleStory.story = {
  name: "Simple Story (bis)",
  decorators: [
    () => "<div class='test-aslihan'><story/></div>"
  ],
  parameters: {
    notes: `
      #Aslıhan
      Hoş gittiniz!
      `,
  },
}


export const StoryForActions = () => ({
  render() {
    return <LimitedInput onInput={action("input")} />
  },
});


export const StoryForLinks = () => ({
  render() {
    return (
      <button onClick={linkTo("Forms/LimitedInput", "Story For Actions")}>Link</button>
    )
  },
});


export const VariableLimit = () => ({
  props: {
    limit: { default: number("Variable Limit", 12) },
  },
  render() {
    return <LimitedInput value="Hello VueSchools" limit={this.limit} />
  },
});


export const simpleWithTemplate = () => ({
  components: { LimitedInput },
  template: "<LimitedInput />",
});

export const withValue = () => ({
  render() {
    return <LimitedInput value="test" />
  },
});

export const ValueTooLong = () => ({
  render() {
    return <LimitedInput value="test VueSchool" />
  },
});

// export const vueComponent = () => ({
//   template: "<h2>Vue Component Aslı</h2>",
// })

// export const pureTemplate = () => "<h2>Pure Template</h2>"

// export const renderFunctionJSX = () => ({
//   render() {
//     return <h2>In JSX</h2>
//   },
// });