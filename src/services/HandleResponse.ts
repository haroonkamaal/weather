import { FetchResponseDto } from './Type';

export const HandleResponse = async (
  fetchResonse: Response,
): Promise<FetchResponseDto> => {
  if (fetchResonse.ok) {
    return {
      status: fetchResonse.status,
      data: await fetchResonse.json(),
    };
  }
  return {
    status: fetchResonse.status,
    error: fetchResonse.statusText,
  };
};
