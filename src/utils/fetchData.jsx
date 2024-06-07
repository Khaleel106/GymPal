export const exerciseOptions= {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'x-rapidapi-key': '61ea955371mshc717a1aacf32618p137a77jsnf288ee08a091',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };



export const fetchData=async(url,options)=>{
    const response =await fetch(url,options);
    const data=await response.json();

    return data;
}