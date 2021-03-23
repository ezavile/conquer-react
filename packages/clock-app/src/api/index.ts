async function doFetch(url: string) {
  const response = await fetch(url);

  return response.json();
}

export async function fetchRandomQuote(): Promise<{
  author: string;
  authorSlug: string;
  content: string;
  length: number;
  tags: string[];
}> {
  return doFetch('https://api.quotable.io/random/');
}

export async function getIpData(): Promise<{
  ip: string;
  country_code: string;
  country_name: string;
  region_code: string;
  region_name: string;
  city: string;
  zip_code: string;
  time_zone: string;
  latitude: number;
  longitude: number;
  metro_code: number;
}> {
  return doFetch('https://freegeoip.app/json/');
}

export async function getTimezoneData(): Promise<{
  abbreviation: string;
  client_ip: string;
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  dst: boolean;
  dst_from: null;
  dst_offset: number;
  dst_until: null;
  raw_offset: number;
  timezone: string;
  unixtime: number;
  utc_datetime: string;
  utc_offset: string;
  week_number: number;
}> {
  return doFetch('https://worldtimeapi.org/api/ip/');
}
