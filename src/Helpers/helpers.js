import CONSTANT from "../CONSTANTS/constants";

const createdDateCal = (date) => {
  const date1 = new Date();
  const date2 = new Date(date);
  var diff = Math.floor(date1.getTime() - date2.getTime());
  var day = 1000 * 60 * 60 * 24;
  var days = Math.floor(diff / day);
  var months = Math.floor(days / 31);
  var years = Math.floor(months / 12);

  if (years > 0) {
    return years > 1
      ? years + CONSTANT.YEARS
      : years + CONSTANT.YEARS.slice(0, CONSTANT.YEARS.length - 1);
  } else if (years <= 0 && months > 0) {
    return months > 1
      ? months + CONSTANT.MONTHS
      : months + CONSTANT.MONTHS.slice(0, CONSTANT.MONTHS.length - 1);
  } else if (years <= 0 && months <= 0) {
    return days > 1
      ? days + CONSTANT.DAYS
      : days + CONSTANT.DAYS.slice(0, CONSTANT.DAYS.length - 1);
  }
};

const createUrl = (state) => {
  const urlFormation = state.dataReducer.api;
  const url = `${urlFormation.baseURL}/${urlFormation.currentType}?${urlFormation.currentQuery}=${urlFormation.typeOfQuery}&page=${urlFormation.page}`
  // const url = "http://hn.algolia.com/api/v1/search?tags=story&page=0";
  return url;
}

export default { createdDateCal, createUrl };
