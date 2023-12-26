import { createStore } from "vuex";
import VuexPersist from "vuex-persist";
import router from '../router'
import { auth } from '../firebase'
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut 
} from 'firebase/auth'

const vuexLocalStorage = new VuexPersist({
  key: 'my-app',
  storage: window.localStorage,
  autoRehydrate: true,
  reducer: (state) => ({
    items: state.items,
    amount: state.amount,
    shipping: state.shipping,
    paymentMethod: state.paymentMethod
 })
});

const store = createStore({
  plugins: [vuexLocalStorage.plugin],

  state() {
    return {
      items: [],
      amount: [],
      shipping: {
        fullName: '',
        phoneNumber: '',
        email: '',
        city: '',
        district: '',
        address: '',
      },
      paymentMethod:'',
      user: null
    };
  },

  mutations: {
    addToCart(state, payload) {
      const cartItem = state.items.find((item) => item.id === payload.id);
      if (!cartItem) {
        state.items.push(payload);
      } else {
        cartItem.quantity++;
      }
    },
    deleteItem(state, itemId) {
      state.items = state.items.filter((item) => item.id !== itemId);
    },

    incrementItemQuantity(state, payload) {
      const cartItem = state.items.find((item) => item.id === payload.id);
      cartItem.quantity++;
    },
    decrementItemQuantity(state, payload) {
      const cartItem = state.items.find((item) => item.id === payload.id);
      if (cartItem.quantity > 1) {
        cartItem.quantity--;
      }
    },
    removeAll(state) {
      state.items = [];
      state.amount = [];
      state.shipping = { 
        fullName: '',
        phoneNumber: '',
        email: '',
        city: '',
        district: '',
        address: '',};
      state.paymentMethod = '';
      
    },

    setCheckOutAmount(state, [sub,total]){
      state.amount = [sub,total];
    },

    // shipping information

    updateFullName(state, fullName) {
      state.shipping.fullName = fullName;
    },
    updatePhoneNumber(state, phoneNumber) {
      state.shipping.phoneNumber = phoneNumber;
    },
    updateEmail(state, email) {
      state.shipping.email = email;
    },
    updateCity(state, city) {
      state.shipping.city = city;
    },
    updateDistrict(state, district){
      state.shipping.district = district;
    },
    updateAddress(state, address){
      state.shipping.address = address;
    },

    // payment

    setPaymentMethod(state, method){
      state.paymentMethod = method;
    }
  },
  
  getters: {
    cartQuantity: (state) => {
      return state.items.reduce((acc, cartItem) => {
        return cartItem.quantity + acc;
      }, 0);
    },
  },

  mutations: {

    SET_USER (state, user) {
      state.user = user
    },

    CLEAR_USER (state) {
      state.user = null
    }

  },
  actions: {
    async login ({ commit }, details) {
      const { email, password } = details

      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error) {
        switch(error.code) {
          case 'auth/user-not-found':
            alert("User not found")
            break
          case 'auth/wrong-password':
            alert("Wrong password")
            break
          default:
            alert("Something went wrong")
        }

        return
      }

      commit('SET_USER', auth.currentUser)

      router.push('/')
    },

    async register ({ commit}, details) {
       const { email, password } = details

      try {
        await createUserWithEmailAndPassword(auth, email, password)
      } catch (error) {
        switch(error.code) {
          case 'auth/email-already-in-use':
            alert("Email already in use")
            break
          case 'auth/invalid-email':
            alert("Invalid email")
            break
          case 'auth/operation-not-allowed':
            alert("Operation not allowed")
            break
          case 'auth/weak-password':
            alert("Weak password")
            break
          default:
            alert("Something went wrong")
        }

        return
      }

      commit('SET_USER', auth.currentUser)

      router.push('/')
     },

     async logout ({ commit }) {
      await signOut(auth)

      commit('CLEAR_USER')

      router.push('/login')
    },

    fetchUser ({ commit }) {
      auth.onAuthStateChanged(async user => {
        if (user === null) {
          commit('CLEAR_USER')
        } else {
          commit('SET_USER', user)

          if (router.isReady() && router.currentRoute.value.path === '/login') {
            router.push('/')
          }
        }
      })
    }
    
  }

});



export default store
  