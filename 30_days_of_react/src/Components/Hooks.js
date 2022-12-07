//useQueryParam

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
