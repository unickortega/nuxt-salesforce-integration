export default function (context) {
    if(context.app.store.getters.auth){
        context.app.store.dispatch('fetchUser')
    }
}