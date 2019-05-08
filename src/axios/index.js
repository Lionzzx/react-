import axios from "axios";
import { Modal } from "antd";
export default class Axios {
  static ajax(options) {
    let loading;
    if (options.data && options.data.isShowLoading !== false) {
      loading = document.getElementById("ajaxLoading");
      loading.style.display = "block";
    }
    return new Promise((resolve, reject) => {
      let BaseUrl =
        "https://www.easy-mock.com/mock/5cd19621ba6f4c73792cd3f6/mockapi";
      axios({
        url: options.url,
        method: options.method || "GET",
        baseURL: BaseUrl,
        timeout: 5000,
        params: (options.data && options.data.params) || ""
      })
        .then(resp => {
          loading && (loading.style.display = "none");
          if (resp.status === 200) {
            let res = resp.data;
            if (res.code === 0) {
              resolve(res.result);
            } else {
              Modal.info({
                title: "提示",
                content: res.msg
              });
            }
          } else {
            reject(resp);
          }
        })
        .catch(res => {
          loading && (loading.style.display = "none");
        });
    });
  }
}
