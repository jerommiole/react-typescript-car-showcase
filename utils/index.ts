export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'e435b0cd77mshb22f64c97392e93p15c262jsn7215e55a151a',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}