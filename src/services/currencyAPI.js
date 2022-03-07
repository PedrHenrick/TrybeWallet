const getResultAPICurrency = async () => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const result = await request.json();
  return result;
};

export default getResultAPICurrency;
