import { DateTime } from 'luxon';
import { templateVariables } from '../constants';

interface ComposeMessageProps<T> {
  template: string;
  data: Partial<T>;
  addLinebreaks?: boolean;
}

function composeWithVariables<T>({
  template,
  data,
  addLinebreaks = false,
}: ComposeMessageProps<T & { firstLine: string }>): string {
  let tmp = template;
  const dayOfWeek = DateTime.local({ locale: 'en' }).weekdayLong;

  Object.keys(templateVariables).forEach((key) => {
    switch (key) {
      case '{{day_of_week}}':
        tmp = tmp.replaceAll(key, dayOfWeek);
        return;

      default:
        let value = data[templateVariables[key]];
        if (!value) value = '';
        tmp = tmp.replaceAll(key, value);
        return;
    }
  });

  if (addLinebreaks) {
    tmp = tmp.replaceAll('\n', '<br>');
  }

  return tmp;
}

export { composeWithVariables };
