import {format, formatDistanceToNow} from "date-fns";


export function parseAndFormatDateTime(dateString: string) {
  // Normalize to ISO format
  const isoString = dateString.replace(' ', 'T');
  const date = new Date(isoString);

  if (isNaN(date.getTime())) {
    throw new Error('Invalid date string');
  }

  return {
    formatted: format(date, 'dd MMMM yyyy'),
    relative: formatDistanceToNow(date, {
      addSuffix: true,
      includeSeconds: true
    })
  };
}