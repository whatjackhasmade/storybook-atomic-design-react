import React from "react"
import { array, object, text } from "@storybook/addon-knobs"
import { withDesign } from "storybook-addon-designs"
import Carousel from "./carousel"

import knobData from "./carousel.knobs.json"
const { items, intro } = knobData

export const productCarousel = () => (
  <Carousel
    intro={{
      cta: object(intro.cta.label, intro.cta.default, intro.cta.group),
      subtitle: text(
        intro.subtitle.label,
        intro.subtitle.default,
        intro.subtitle.group
      ),
      text: text(intro.text.label, intro.text.default, intro.text.group),
      title: text(intro.title.label, intro.title.default, intro.title.group),
    }}
    items={array(items.label, items.default, items.group)}
  />
)

productCarousel.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=926%3A992",
    },
  },
}

export default {
  component: Carousel,
  decorators: [withDesign],
  title: "Organisms/Caoursel",
}
