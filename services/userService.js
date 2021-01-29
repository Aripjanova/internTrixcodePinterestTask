const baseApi = 'http://localhost:4002'

const getInfoApi = () => fetch('http://localhost:4002/userinfo');

function updateUserInfoFetch  (values) {
    const res = fetch('http://localhost:4002/userinfo', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values)
    })
    return res
}
export {
    getInfoApi,
    updateUserInfoFetch
}