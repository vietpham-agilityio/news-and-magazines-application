export const formatDate = (dateTime: string): string => {
    // Convert date into ISO 8601 format :Mon Mar 18 2024 04:48:19 GMT+0700 (Indochina Time)
    const date = new Date(dateTime);
    
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');

    // Format the date as YYYY-MM-DD
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
}