// components/CustomButton.tsx
import React, { forwardRef } from 'react';
import { Button } from '@nextui-org/react';

const CustomButton = forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  (props, ref) => {
    return <Button {...props} ref={ref} />;
  }
);

CustomButton.displayName = 'CustomButton';

export default CustomButton;