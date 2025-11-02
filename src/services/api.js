// src/services/api.js
const API_KEY = '3caa66a0b4a548658c6f4ddcc8d013e7';
const BASE_URL = 'https://api.rawg.io/api';

async function handleResponse(response) {
  if (!response.ok) {
    const errorBody = await response.json();
    if (response.status === 401) {
      throw new Error(
        'API Key salah atau gak valid. Cek lagi di services/api.js'
      );
    }
    throw new Error(errorBody.error || 'Something went wrong');
  }
  return response.json();
}

export async function getGames(queryParams) {
  const params = new URLSearchParams({
    key: API_KEY,
  });

  if (queryParams.search) params.append('search', queryParams.search);
  if (queryParams.platforms) params.append('platforms', queryParams.platforms);
  if (queryParams.ordering) params.append('ordering', queryParams.ordering);

  const response = await fetch(`${BASE_URL}/games?${params.toString()}`);
  return handleResponse(response);
}

export async function getGameDetails(gameId) {
  const response = await fetch(`${BASE_URL}/games/${gameId}?key=${API_KEY}`);
  return handleResponse(response);
}

export async function getGameScreenshots(gameId) {
  const response = await fetch(
    `${BASE_URL}/games/${gameId}/screenshots?key=${API_KEY}`
  );
  return handleResponse(response);
}