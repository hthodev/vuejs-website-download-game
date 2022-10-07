export default {
  // get all email
  getAllEmail(axios){
    return axios.get('/username')
  },

  getAllEmailAd(axios){
    return axios.get('/all/username')
  },

  // quan ly accout
  getAccount(axios){
    return axios.get('/accounts')
  },

  // get acc theo id
  getByIdAccount(axios, id){
    return axios.get(`/account/${id}`)
  },

  // sua tai khoan
  editAccount(axios, data){
    return axios.put('/account/update', data)
  },

  // xoa tai khoan
  deleteAccount(axios, id){
    return axios.delete(`/account/${id}`)
  },

  // tao tai khoan user
  postAccount(axios){
    return axios.post('/account/signup')
  },

  // tao tai khoan admin
  postAccountAdmin(axios){
    return axios.post('/admin/signup')
  },

  // get all category
  getCategories(axios){
    return axios.get('/categories')
  },

  // get category theo id
  getByIdCategory(axios, id){
    return axios.get(`/category/${id}`)
  },

  // 
  getFixLink(axios){
    return axios.get('/fixLinks')
  },
  
  //
  getByIdFixLink(axios, id){
    return axios.get(`/fixLink/{id}`)
  },
  
  // get thong tin account
  getInfoAccount(axios){
    return axios.get('/infoAccounts')
  },
  getByIdInfoAccount(axios, id){
    return axios.get(`/infoAccount/{id}`)
  },

  getLinkProducts(axios){
    return axios.get('/linkProducts')
  },
  
  getByIdLinkProducts(axios, id){
    return axios.get(`/linkProduct/{id}`)
  },

  getProducts(axios){
    return axios.get('/products')
  },
  getByIdProducts(axios, id){
    return axios.get(`/product/${id}`)
  },
  getTop4Product(axios){
    return axios.get('/products/new')
  },
  getProductByIdCategory(axios, id){
    return axios.get(`/products/${id}`)
  },
  getProductBySearch(axios, searchkey){
    return axios.get(`/productsearch/${searchkey}`)
  },
  postAddProduct(axios, data){
    const url = '/product'
    return axios.$post(url, data)
  },
  putProduct(axios){
    return axios.put('/product/update')
  },
  deleteProduct(axios, id){
    return axios.delete(`/product/${id}`)
  },

  getPurcharsed(axios){
    return axios.get('/purcharsed')
  },
  getByIdPurcharsed(axios, id){
    return axios.get(`/purcharsed/{id}`)
  },

  getRecharges(axios){
    return axios.get('/recharges')
  },
  getByIdRecharges(axios, id){
    return axios.get(`/recharge/{id}`)
  },

  getRequest(axios){
    return axios.get('/requests')
  },
  getByIdRequest(axios, id){
    return axios.get(`/request/{id}`)
  },


  getData: (axios) => axios.get('/api/Catalog/customes')
}