import useApiData from '../api/api';
import useAuth from './useAuth';


const useRefreshToken = () => {

  const {setAuth } = useAuth();
  const { getRefresh } = useApiData("private");

  const refresh = async ()=>{
    const response = await getRefresh();

    setAuth( prev => {
        console.log(JSON.stringify(prev));
        console.log(response.data.accessToken);
        return { ...prev, accessToken: response.data.accessToken}
    });

    return response.data.accessToken;

  }


  return refresh;
}

export default useRefreshToken