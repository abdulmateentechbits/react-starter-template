import { toast } from 'react-toastify';

const alert = {
  state: {},
  reducers: {},
  effects: {
    async success(data) {
      toast.success(data.msg);
    },
    async error(data) {
      toast.error(data.msg);
    },
    async warn(data) {
      toast.warn(data.msg);
    }
  }
};

export default alert;