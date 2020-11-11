const { round, floor } = Math;

/**
 * @description checks if the date in ISO format
 * @returns boolean
 */
const isISOString = (date: any) => {
    const before = new Date(date).getTime();
    const after = new Date(new Date(date).toISOString()).getTime();
    //if before and after are the same then the date in ISO format
    return !(before - after);
}

/**
 * @description transforms date to ISO format
 * @param date the date you want to transform
 * @returns ISO Date
 */
export const toISOString = (date: string) => {
    if(isISOString(date)){
       return date;
    }
    return new Date(date).toISOString();
};

/**
 * @description transforms date to mintues
 * @returns mintues
 */
export const toMinutes = (date: number) => {
    return floor(date / 60);
};

/**
 * @description transforms date to hours
 * @returns hours
 */
export const toHours = (date: number) => {
    return floor(date / (60 * 60));
};

/**
 * @description transforms date to days
 * @returns days
 */
export const toDays = (date: number) => {
    return floor(date / (24 * 60 * 60));
}

/**
 * @description transforms a date in ISO format to an object with this keys -> dayName, day, month, year
 * @param date the date in ISO format
 */
export const toDateObject = (date: string) => {
   let dateArray = new Date(date).toDateString().split(" ");
   const mapArray = ["dayName", "month", "day", "year"];
   let count = 0 ;
   const object: Partial<{dayName: string; day: string; month: string; year: string}> = {};
   dateArray.filter((value) => {
      //@ts-ignore
      object[mapArray[count++]] = value;
   });
   return object;
};

/**
 * @description gets the current date in ISO format
 * @returns ISO format of the date
 */
export const getCurrentDate = () => {
    return new Date(Date.now()).toISOString();
};

/**
 * @description gets the Elapsed time from createdAt date until now in seconds
 * @returns seconds
 */
export const getElapsedTime = (createdAt: string) => {
    const first = round(new Date(getCurrentDate()).getTime() / 1000);
    const second = round(new Date(toISOString(createdAt)).getTime() / 1000);
    return first - second;
};