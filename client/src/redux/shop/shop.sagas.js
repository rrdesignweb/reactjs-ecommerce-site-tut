import { takeLatest, call, put, all } from "redux-saga/effects"; //take every non blocking call - keeps running async
import ShopActionTypes from "./shop.types";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils.js";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "./shop.action";

export function* fetchCollectionsAsync() {
  const collectionRef = firestore.collection("collections");

  try {
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }

}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)])
}