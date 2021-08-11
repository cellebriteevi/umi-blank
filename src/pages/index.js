const Page = props =>
{
    const {history} = props;

    return <dv>
        This is the Index page

        <div>
            <a onClick={() => history.push('/demo')}>Go to demo page</a>
        </div>
    </dv>;
};

export default Page;