const options = (data, method, noCache) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  noCache && headers.append("cache-control", "no-cache");

  return {
    body: data ? JSON.stringify(data) : undefined, // must match 'Content-Type' header
    // credentials: "same-origin", // include, same-origin, *omit
    headers,
    method // *GET, POST, PUT, DELETE, etc.
    // mode: "cors" // no-cors, cors, *same-origin
    // redirect: "follow", // manual, *follow, error
    // referrer: "no-referrer" // *client, no-referrer
  };
};
export const fetchCommon = (
  endpoint,
  reqBody,
  method = "GET",
  noCache = false
) => async (
  dispatch = ({ type = "", payload = null }) => {},
  actionKey = ""
) => {
  
  if (typeof endpoint !== "string") {
    return Promise.reject("Specify a string endpoint URL.");
  }
 
  try {
    const response = await fetch(endpoint, options(reqBody, method, noCache));
    const jsonData = await response.json();
    
    if (!response.ok) {
      
      throw !jsonData ? response : jsonData;
    }
    // 6. Send data to dispatch
    console.log(">>>>>>>>>JSONDATA>>>>>", jsonData);
    return response;
  } catch (error) {
 
    return "";
  }
};
