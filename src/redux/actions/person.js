/**
 * 该文件专门伟 count 组件生成action 对象
 */
import { ADDPERSON } from '../constant';

//同步actions 就是值action的值为object类型的一般对象
export const createAddPerson = (data) => ({ type: ADDPERSON, data });
