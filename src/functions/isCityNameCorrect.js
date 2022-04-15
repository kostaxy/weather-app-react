
export function isCityNameСorrect (response, API_DATA, city){
    return (response !== null && (API_DATA.cityName.toUpperCase() === city.toUpperCase()))
}