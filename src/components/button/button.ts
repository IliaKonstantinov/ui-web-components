export const UI_BUTTON_TAG = 'ui-button';

export class UIButton extends HTMLElement {
  // ...
}

export function defineButton(tag = UI_BUTTON_TAG) {
  if (!customElements.get(tag)) customElements.define(tag, UIButton)
};

export function UiButton(): UIButton {
  defineButton();
  return document.createElement(UI_BUTTON_TAG) as UIButton;
}