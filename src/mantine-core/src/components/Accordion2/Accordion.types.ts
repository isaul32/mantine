export type AccordionValue<Multiple extends boolean> = Multiple extends true
  ? string[]
  : string | null;

export type AccordionOrder = 2 | 3 | 4 | 5 | 6;
export type AccordionIconPosition = 'left' | 'right';