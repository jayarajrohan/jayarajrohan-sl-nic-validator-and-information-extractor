import { INicDetails } from "./types";

export function isValidSlNic(nic: string) {
  const length = nic.length;

  const firstDigit = nic.charAt(0);
  const secondDigit = nic.charAt(1);
  const thirdDigit = nic.charAt(2);
  const fourthDigit = nic.charAt(3);
  const fifthDigit = nic.charAt(4);
  const sixthDigit = nic.charAt(5);
  const seventhDigit = nic.charAt(6);
  const tenthDigit = nic.charAt(9);

  if (length !== 10 && length !== 12) {
    return false;
  } else if (length === 10) {
    if (
      firstDigit !== "2" &&
      firstDigit !== "3" &&
      firstDigit !== "4" &&
      firstDigit !== "5" &&
      firstDigit !== "6" &&
      firstDigit !== "7" &&
      firstDigit !== "8" &&
      firstDigit !== "9"
    ) {
      return false;
    } else if (
      thirdDigit !== "1" &&
      thirdDigit !== "2" &&
      thirdDigit !== "3" &&
      thirdDigit !== "4" &&
      thirdDigit !== "5" &&
      thirdDigit !== "6" &&
      thirdDigit !== "7" &&
      thirdDigit !== "8" &&
      thirdDigit !== "9" &&
      fourthDigit !== "1" &&
      fourthDigit !== "2" &&
      fourthDigit !== "3" &&
      fourthDigit !== "4" &&
      fourthDigit !== "5" &&
      fourthDigit !== "6" &&
      fourthDigit !== "7" &&
      fourthDigit !== "8" &&
      fourthDigit !== "9" &&
      fifthDigit !== "1" &&
      fifthDigit !== "2" &&
      fifthDigit !== "3" &&
      fifthDigit !== "4" &&
      fifthDigit !== "5" &&
      fifthDigit !== "6" &&
      fifthDigit !== "7" &&
      fifthDigit !== "8" &&
      fifthDigit !== "9"
    ) {
      return false;
    } else if (
      thirdDigit !== "0" &&
      thirdDigit !== "1" &&
      thirdDigit !== "2" &&
      thirdDigit !== "3" &&
      thirdDigit !== "5" &&
      thirdDigit !== "6" &&
      thirdDigit !== "7" &&
      thirdDigit !== "8"
    ) {
      return false;
    } else if (
      thirdDigit !== "0" &&
      thirdDigit !== "1" &&
      thirdDigit !== "2" &&
      thirdDigit !== "5" &&
      thirdDigit !== "6" &&
      thirdDigit !== "7" &&
      fourthDigit !== "0" &&
      fourthDigit !== "1" &&
      fourthDigit !== "2" &&
      fourthDigit !== "3" &&
      fourthDigit !== "4" &&
      fourthDigit !== "5" &&
      fourthDigit !== "6"
    ) {
      return false;
    } else if (
      thirdDigit !== "0" &&
      thirdDigit !== "1" &&
      thirdDigit !== "2" &&
      thirdDigit !== "5" &&
      thirdDigit !== "6" &&
      thirdDigit !== "7" &&
      fourthDigit !== "0" &&
      fourthDigit !== "1" &&
      fourthDigit !== "2" &&
      fourthDigit !== "3" &&
      fourthDigit !== "4" &&
      fourthDigit !== "5" &&
      fourthDigit !== "7" &&
      fourthDigit !== "8" &&
      fourthDigit !== "9" &&
      fifthDigit !== "0" &&
      fifthDigit !== "1" &&
      fifthDigit !== "2" &&
      fifthDigit !== "3" &&
      fifthDigit !== "4" &&
      fifthDigit !== "5" &&
      fifthDigit !== "6"
    ) {
      return false;
    } else if (
      thirdDigit !== "0" &&
      thirdDigit !== "1" &&
      thirdDigit !== "2" &&
      thirdDigit !== "3" &&
      thirdDigit !== "6" &&
      thirdDigit !== "7" &&
      thirdDigit !== "8" &&
      fourthDigit !== "1" &&
      fourthDigit !== "2" &&
      fourthDigit !== "3" &&
      fourthDigit !== "4" &&
      fourthDigit !== "5" &&
      fourthDigit !== "6" &&
      fourthDigit !== "7" &&
      fourthDigit !== "8" &&
      fourthDigit !== "9" &&
      fifthDigit !== "1" &&
      fifthDigit !== "2" &&
      fifthDigit !== "3" &&
      fifthDigit !== "4" &&
      fifthDigit !== "5" &&
      fifthDigit !== "6" &&
      fifthDigit !== "7" &&
      fifthDigit !== "8" &&
      fifthDigit !== "9"
    ) {
      return false;
    } else if (
      tenthDigit !== "x" &&
      tenthDigit !== "X" &&
      tenthDigit !== "v" &&
      tenthDigit !== "V"
    ) {
      return false;
    } else {
      return true;
    }
  } else if (length === 12) {
    if (firstDigit !== "1" && firstDigit !== "2") {
      return false;
    } else if (firstDigit === "1" && secondDigit !== "9") {
      return false;
    } else if (firstDigit === "2" && secondDigit !== "0") {
      return false;
    } else if (
      firstDigit !== "2" &&
      secondDigit !== "0" &&
      secondDigit !== "1" &&
      secondDigit !== "2" &&
      secondDigit !== "3" &&
      secondDigit !== "4" &&
      secondDigit !== "5" &&
      secondDigit !== "6" &&
      secondDigit !== "7" &&
      secondDigit !== "8" &&
      thirdDigit !== "2" &&
      thirdDigit !== "3" &&
      thirdDigit !== "4" &&
      thirdDigit !== "5" &&
      thirdDigit !== "6" &&
      thirdDigit !== "7" &&
      thirdDigit !== "8" &&
      thirdDigit !== "9"
    ) {
      return false;
    } else if (
      firstDigit !== "1" &&
      secondDigit !== "1" &&
      secondDigit !== "2" &&
      secondDigit !== "3" &&
      secondDigit !== "4" &&
      secondDigit !== "5" &&
      secondDigit !== "6" &&
      secondDigit !== "7" &&
      secondDigit !== "8" &&
      secondDigit !== "9" &&
      thirdDigit !== "0"
    ) {
      return false;
    } else if (
      fifthDigit !== "1" &&
      fifthDigit !== "2" &&
      fifthDigit !== "3" &&
      fifthDigit !== "4" &&
      fifthDigit !== "5" &&
      fifthDigit !== "6" &&
      fifthDigit !== "7" &&
      fifthDigit !== "8" &&
      fifthDigit !== "9" &&
      sixthDigit !== "1" &&
      sixthDigit !== "2" &&
      sixthDigit !== "3" &&
      sixthDigit !== "4" &&
      sixthDigit !== "5" &&
      sixthDigit !== "6" &&
      sixthDigit !== "7" &&
      sixthDigit !== "8" &&
      sixthDigit !== "9" &&
      seventhDigit !== "1" &&
      seventhDigit !== "2" &&
      seventhDigit !== "3" &&
      seventhDigit !== "4" &&
      seventhDigit !== "5" &&
      seventhDigit !== "6" &&
      seventhDigit !== "7" &&
      seventhDigit !== "8" &&
      seventhDigit !== "9"
    ) {
      return false;
    } else if (
      fifthDigit !== "0" &&
      fifthDigit !== "1" &&
      fifthDigit !== "2" &&
      fifthDigit !== "3" &&
      fifthDigit !== "5" &&
      fifthDigit !== "6" &&
      fifthDigit !== "7" &&
      fifthDigit !== "8"
    ) {
      return false;
    } else if (
      fifthDigit !== "0" &&
      fifthDigit !== "1" &&
      fifthDigit !== "2" &&
      fifthDigit !== "5" &&
      fifthDigit !== "6" &&
      fifthDigit !== "7" &&
      sixthDigit !== "0" &&
      sixthDigit !== "1" &&
      sixthDigit !== "2" &&
      sixthDigit !== "3" &&
      sixthDigit !== "4" &&
      sixthDigit !== "5" &&
      sixthDigit !== "6"
    ) {
      return false;
    } else if (
      fifthDigit !== "0" &&
      fifthDigit !== "1" &&
      fifthDigit !== "2" &&
      fifthDigit !== "5" &&
      fifthDigit !== "6" &&
      fifthDigit !== "7" &&
      sixthDigit !== "0" &&
      sixthDigit !== "1" &&
      sixthDigit !== "2" &&
      sixthDigit !== "3" &&
      sixthDigit !== "4" &&
      sixthDigit !== "5" &&
      sixthDigit !== "7" &&
      sixthDigit !== "8" &&
      sixthDigit !== "9" &&
      seventhDigit !== "0" &&
      seventhDigit !== "1" &&
      seventhDigit !== "2" &&
      seventhDigit !== "3" &&
      seventhDigit !== "4" &&
      seventhDigit !== "5" &&
      seventhDigit !== "6"
    ) {
      return false;
    } else if (
      fifthDigit !== "0" &&
      fifthDigit !== "1" &&
      fifthDigit !== "2" &&
      fifthDigit !== "3" &&
      fifthDigit !== "6" &&
      fifthDigit !== "7" &&
      fifthDigit !== "8" &&
      sixthDigit !== "1" &&
      sixthDigit !== "2" &&
      sixthDigit !== "3" &&
      sixthDigit !== "4" &&
      sixthDigit !== "5" &&
      sixthDigit !== "6" &&
      sixthDigit !== "7" &&
      sixthDigit !== "8" &&
      sixthDigit !== "9" &&
      seventhDigit !== "1" &&
      seventhDigit !== "2" &&
      seventhDigit !== "3" &&
      seventhDigit !== "4" &&
      seventhDigit !== "5" &&
      seventhDigit !== "6" &&
      seventhDigit !== "7" &&
      seventhDigit !== "8" &&
      seventhDigit !== "9"
    ) {
      return false;
    } else {
      return true;
    }
  }
}

export function extractDetailsFromSlNic(nic: string): INicDetails | undefined {
  let year: string;
  let genderValue: number;
  let monthAndDayInDays: number;

  if (!isValidSlNic(nic)) {
    return undefined;
  }

  if (nic.length === 10) {
    genderValue = +nic.slice(2, 5);
    monthAndDayInDays = genderValue >= 500 ? genderValue - 500 : genderValue;
    year = `19${nic.slice(0, 2)}`;
  } else {
    genderValue = +nic.slice(4, 7);
    monthAndDayInDays = genderValue >= 500 ? genderValue - 500 : genderValue;
    year = `${nic.slice(0, 4)}`;
  }

  let day: number;
  let month;

  if (monthAndDayInDays <= 31) {
    month = "01";
    day = monthAndDayInDays;
  } else if (monthAndDayInDays <= 60) {
    month = "02";
    day = monthAndDayInDays - 31;
  } else if (monthAndDayInDays <= 91) {
    month = "03";
    day = monthAndDayInDays - 60;
  } else if (monthAndDayInDays <= 121) {
    month = "04";
    day = monthAndDayInDays - 91;
  } else if (monthAndDayInDays <= 152) {
    month = "05";
    day = monthAndDayInDays - 121;
  } else if (monthAndDayInDays <= 182) {
    month = "06";
    day = monthAndDayInDays - 152;
  } else if (monthAndDayInDays <= 213) {
    month = "07";
    day = monthAndDayInDays - 182;
  } else if (monthAndDayInDays <= 244) {
    month = "08";
    day = monthAndDayInDays - 213;
  } else if (monthAndDayInDays <= 274) {
    month = "09";
    day = monthAndDayInDays - 244;
  } else if (monthAndDayInDays <= 305) {
    month = "10";
    day = monthAndDayInDays - 274;
  } else if (monthAndDayInDays <= 335) {
    month = "11";
    day = monthAndDayInDays - 305;
  } else {
    month = "12";
    day = monthAndDayInDays - 335;
  }
  const dateOfBirth = `${year.toString()}-${month}-${
    day < 10 ? `0${day}` : day
  }`;

  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return {
    dateOfBirth,
    age,
    gender: genderValue < 500 ? "Male" : "Female",
  };
}
