export async function fetchCars(filters) {
    const { manufacturer, year, fuel, limit, model } = filters;

    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key':
                '05440042f4msh81dc06bc821f70fp1c5bffjsnfbca942f6471',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
        },
    };

    const response = await fetch(url, options);
    const result = await response.json();
    return result;
}

export const calculateCarRent = (city_mpg, year) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car, angle) => {
    const url = new URL('https://cdn.imagin.studio/getimage');

    const { make, year, model } = car;

    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
};

export const updateSearchParams = (type, value) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value);

    const newPathname = `${
        window.location.pathname
    }?${searchParams.toString()}`;

    return newPathname;
};
