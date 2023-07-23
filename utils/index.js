export async function fetchCars() {
    const url =
        'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
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
