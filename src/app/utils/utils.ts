
export const hex2rgba = (hex: string, alpha = 1) => {
  if (hex) {
    const [r, g, b] = hex.match(/\w\w/g)?.map((x) => parseInt(x, 16)) || [0, 0, 0];
    return `rgba(${r},${g},${b},${alpha})`;
  }
  return `rgba(255,255,255,${alpha})`;
};
export const capitalize = (s: string) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};



export const webSitePattern =
  /(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,63}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?/;

export const getLastDayOfMonth = (date?: Date) => {
  const lastDay = new Date(
    date?.getFullYear() || new Date().getFullYear(),
    date?.getMonth() || new Date().getMonth() + 1,
    0
  );
  return lastDay;
};

export const getFirstDayOfMonth = (date?: Date) => {
  const firstDay = new Date(
    date?.getFullYear() || new Date().getFullYear(),
    date?.getMonth() || new Date().getMonth(),
    1
  );
  return firstDay;
};

export const validateSWIFT = (swift: string) => {
  if (swift) {
    const reg = /^([a-zA-Z]){4}([a-zA-Z]){2}([0-9a-zA-Z]){2}([0-9a-zA-Z]{3})?$/;
    return reg.test(swift);
  }
};

// groupBy
export const groupBy = <T>(xs: any[], key: string): { [key: string]: T[] } => {
  return xs.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export const getColorFromRgb = (rgb: string) => {
  if (rgb) {
    const [r, g, b] = rgb.match(/\w\w/g)?.map((x) => parseInt(x, 16)) || [0, 0, 0];
    const y = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return y > 186 ? '#000' : '#fff';
  }
  return '#000';
};

export const sortArray = (arr: any[], keys: string[]) => {
  return arr.sort((a, b) => {
    const aKeys = keys.map((key) => a[key]);
    const bKeys = keys.map((key) => b[key]);
    return aKeys.join('') > bKeys.join('') ? 1 : -1;
  });
};
// object to form data
export const objectToFormData = (obj: any) => {
  const formData = new FormData();
  Object.keys(obj).forEach((key) => {
    formData.append(key, obj[key]);
  });
  return formData;
};
// isTruthy array and not undefined or null
export const isTruthyArray = (arr: any[]) => {
  if (arr) {
    return arr.length > 0;
  }
  return false;
};

export const replaceUndefined = (
  entity: any,
  detailedReplacement: { [key: string]: any } = {},
  defaultReplacement = ''
) => {
  return Object.keys(entity).reduce(
    (previous, current) => ({
      ...previous,
      [current]:
        entity[current] === undefined || entity[current] === null
          ? detailedReplacement[current] || defaultReplacement
          : entity[current],
    }),
    {}
  );
};

export const removeFields = (object: any, keys: string[]) => {
  return Object.keys(object).reduce(
    (prev, current) => (keys.includes(current) ? prev : { ...prev, [current]: object[current] }),
    {}
  );
};
