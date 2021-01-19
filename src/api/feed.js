const readPhotographs = async (callback) =>{
    const photographHTTP = await fetch ("http://10.0.2.2:3030/feed");
    const photographJSON = await photographHTTP.json();
    callback(photographJSON);
  }

export default readPhotographs;