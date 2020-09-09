import firebase from 'firebase/app';

import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('1WheqPjAgW0fOyl5bqYs').collection('cartItems').doc('6jvMp96wSgK54pccZmUc');

firestore.doc('/users/1WheqPjAgW0fOyl5bqYs/cartItems/6jvMp96wSgK54pccZmUc');
firestore.collection('/users/1WheqPjAgW0fOyl5bqYs/cartItems')