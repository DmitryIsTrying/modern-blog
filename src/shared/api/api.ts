import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'
import axios from 'axios'

export const $api = axios.create({
  baseURL: __API_URL__,
  headers: {
    Authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY),
  },
})
