import { Control, FieldValues, Path, RegisterOptions } from 'react-hook-form';

export type RhfProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
  defaultValue?: unknown;
};
