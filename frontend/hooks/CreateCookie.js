import Cookie from 'js-cookie'

const CreateCookie = (tokenName , token) => {
    Cookie.set(tokenName,token ,{
        expires : 1,
        secure : true,
        path: '/'
    })
}
export default CreateCookie;