

export default async function({$auth, redirect}){
     console.log($auth.$state.user.Role);
    const user = await $auth.$state.user.user;
    console.log("role: ",user.Role)

    const users = Number(user.Role)

    if(user && users === 1 ){
        console.log(users);
    }else {
        redirect('/')
        alert("Bạn không có quyền truy cập admin")
    }
}