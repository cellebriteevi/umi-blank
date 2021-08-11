import DemoComponent from '@/components/DemoComponent';
import {Link} from 'umi';

const Page = props =>
{
    //const {history} = props;

    return <dv>This is the Demo page.

        <DemoComponent title={<h3>Hello</h3>}/>
        <div>
            <Link to={'/'}>Go back to index</Link>
        </div>
    </dv>;
};

export default Page;