import common_param from "common/js/common_param.js";
import axios from "axios";

export function lyric_data(id){
  let data = Object.assign({},common_param,{
    format: "json",
    songmid: id,
    pcachetime: +new Date(),
  });
  return axios("/songlyric",{
    params: data,
  }).then((res)=>{
    return Promise.resolve(res.data);
  }).catch((e)=>{
    console.log(e);
  });
}
