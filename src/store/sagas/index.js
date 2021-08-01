import { put, takeEvery, all, call } from 'redux-saga/effects';
// tabeEvery 捕捉每一个action   put也可以发送action到store里面
import { INCREASE, DECREASE } from '../constant/count';

function test() {
    return new Promise((r) => {
        setTimeout(() => {
            r({
                data: [{}],
            });
        }, 2000);
    });
}

// 监听 INCREASE 然后异步触发的函数
function* fetchUser() {
    console.log(INCREASE)
    // 模拟异步操作
    let getAjax = yield test();
    // let actions = {
    //     type: INCREASE,
    //     data: getAjax.data.list,
    // };
    // 提交这个actions 到store里面，和在reducer里面提交是一样的
    yield put({ type: DECREASE, data:1 });
}


function* helloSaga() {
    // 很重要的一点，进行捕获 组件里面发出的tyepe类型
    yield takeEvery(INCREASE, fetchUser);
}

// 监听 INCREASE 然后异步触发的函数
function* fetchUser1() {
    console.log(DECREASE)
    // 模拟异步操作
    let getAjax = yield test();
    // let actions = {
    //     type: INCREASE,
    //     data: getAjax.data.list,
    // };
    // 提交这个actions 到store里面，和在reducer里面提交是一样的
    yield put({ type: INCREASE, data:1 });
}


function* helloSaga1() {
    // 很重要的一点，进行捕获 组件里面发出的tyepe类型
    yield takeEvery(DECREASE, fetchUser1);
}

// 监听多个 saga
export default function* rootSaga() {
    yield all([
      helloSaga(),
      helloSaga1()
    ])
  }