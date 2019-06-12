const store = createStore(todoapp);
const Todologin = connect()(Login);
class ReduxLogin extends Component {
    render(){
        return (
            <Provider store={store}>
               <Todologin />
            </Provider>
        )
    }
}
