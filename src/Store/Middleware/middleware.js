import storeAction from '../Action/action'
import * as firebase from 'firebase';
import '../../firebase'
export default class MiddleWare {
    static Login(state) {
        return (dispatch) => {
            firebase.auth().signInWithEmailAndPassword(state.email, state.password)
                .then((user) => {
                    dispatch(storeAction.login(user))
                })
                .catch((ev) => {
                    alert('Not Login')
                })
        }
    }
    static signup(state) {
        return (dispatch) => {
            firebase.auth().createUserWithEmailAndPassword(state.email, state.password)
                .then((user) => {
                    let uids = firebase.auth().currentUser.uid;

                    firebase.database().ref(`Users/${uids}`).set({
                        email: state.email,
                        name: state.name,
                        password: state.password,
                        key: uids,
                    }).then(() => {
                        firebase.auth().currentUser.updateProfile({ displayName: state.name }).then(() => {
                            dispatch(storeAction.signup(user))
                        })

                    })
                })
                .catch(ev => { console.log(ev) })

        }
    }
    static addPatient(state) {
        return (dispatch) => {
            axios.post(`${path}/patient`, {
                state: state
            })
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    static getData(_id) {
        return (dispatch) => {
            axios.get(`${path}/patient/${_id}`)

                .then((res) => {
                    console.log(res.data.Patient)
                    dispatch(storeAction.patient(res.data.Patient))
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
}