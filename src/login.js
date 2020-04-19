let login = (username, password) => {
    if(username !== 'admin' || password !== 'radical') {
        console.log('incorrect')
    } else {
        console.log('correct-o mundo')
    }
}

login('admin', 'radical')