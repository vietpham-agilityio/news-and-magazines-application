import { formatDate } from '@/utils';

describe('formatDate', () => {
  it('should format the date UTC time correctly for a given date string', () => {
    const dateTime = 'Mon Mar 18 2024 04:48:19 GMT+0700 (Indochina Time)';
    const expectedFormattedDate = '2024-03-17';

    const formattedDate = formatDate(dateTime);

    expect(formattedDate).toBe(expectedFormattedDate);
  });

  it('should format the date ISO 8601 correctly for another date string', () => {
    const dateTime = '2024-12-25T00:00:00Z';
    const expectedFormattedDate = '2024-12-25';

    const formattedDate = formatDate(dateTime);

    expect(formattedDate).toBe(expectedFormattedDate);
  });
});
