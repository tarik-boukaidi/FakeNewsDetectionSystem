import React from 'react';
import type { IconBaseProps } from 'react-icons/lib';
import type { IconType } from 'react-icons';
type Props = {
  as: IconType;
} & IconBaseProps;

export const Icon: React.FC<Props> = ({ as: Component, ...props }) => {
  // Cast explicite pour TypeScript
  const Comp = Component as React.ComponentType<IconBaseProps>;
  return <Comp {...props} />;
};
