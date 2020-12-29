@observer
export default class Degrees extends React.Component{

    @observable degrees;

    @autobind @action
    setDegrees(value) {
        this.degrees = _.round(((value.value / viewport) * 50) - 25);
    }

    componentWillMount() {
        this.props.rotation.addListener(this.setDegrees);
    }

    render() {
        return (
            <Text align="center" primary>{`${this.degrees}°`}</Text>
        );
    }
}