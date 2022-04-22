import IMask from "imask";

export const dateMask = {
  mask: Date,
  pattern: "d/m/Y",
  blocks: {
    d: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 31,
      maxLength: 2,
    },
    m: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
      maxLength: 2,
    },
    Y: {
      mask: IMask.MaskedRange,
      from: 1900,
      to: 9999,
    },
  },
  format(date: Date) {
    let day: string | number = date.getDate();
    let month: string | number = date.getMonth() + 1;
    const year: string | number = date.getFullYear();

    if (day < 10) day = `0${day}`;
    if (month < 10) month = `0${month}`;

    return [day, month, year].join("/");
  },
  parse(str: string) {
    var [day, month, year] = str.split("/").map(d => Number(d));
    return new Date(year, month - 1, day);
  },
};

export const currencyMask = {
  mask: "{R$} num",
  blocks: {
    num: {
      mask: Number,
      scale: 2,
      signed: false,
      thousandsSeparator: ".",
      padFractionalZeros: true,
      radix: ",",
      mapToRadix: [","],
    },
  },
  lazy: false,
};
