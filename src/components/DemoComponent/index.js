const DemoComponent = props =>
{
    const {children, title} = props;

    return <div>
        Demo component, {title}

        <div>
            {children}
        </div>
    </div>;
};

DemoComponent.props = {
    title: 'string'
};

export default DemoComponent;