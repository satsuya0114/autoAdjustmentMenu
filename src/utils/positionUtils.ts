import { dimensions, dimensionsOffset } from '~/src/configs/dimensionsConfig';

export const getFloatButtonDefaultTop = () => {
  let top =
    Number(window?.top?.document?.body.clientHeight) -
    dimensions.floatButtonHeight -
    dimensionsOffset.floatButtonBottomOffset;
  console.log('button top', top);
  if (top < dimensionsOffset.floatButtonBottomOffset) {
    top = dimensionsOffset.floatButtonBottomOffset;
  }
  return top;
};

export const getFloatButtonDefaultLeft = () => {
  let left =
    Number(window?.top?.document?.body.clientWidth) -
    dimensions.floatButtonWidth -
    dimensionsOffset.floatButtonRightOffset;
  console.log('button left', left);
  if (left < dimensionsOffset.floatButtonRightOffset)
    left = dimensionsOffset.floatButtonRightOffset;
  return left;
};
