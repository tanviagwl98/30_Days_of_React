//useQueryParam
/*
  1. useQueryParam: It eases encoding and decoding data of any type as query parameters
  with smart memoization to prevent creating unnecessary duplicate objects. All query parameters
  should be encoded as strings.
*/
import {useQueryParam} from 'beautiful-react-hooks';
import {Input} from 'beautiful-react-ui';
import {HashRouter} from 'react-router-dom';

const FirstHook = () => {
  const [param, setParam] = useQueryParam('foo', {
    initialValue:'star',
    replaceState:'false',
  });
  return(
    <div>
      <p>
        Current value is '{param}' 
      </p>
      <Input value={param} onChange={(e,nextValue) => setParam(nextValue)}/>
    </div>
  )
};

<HashRouter>
  <FirstHook/>
</HashRouter>  
