const apiRequest = async (url = '', optionObj = null, errMsg = null) => {
    try {
        const response = await fetch(url, optionObj)
        if (!response.ok) throw Error('Please reload the app')
    } catch (error) {
        errMsg = error.messeage;
    } finally {
        return errMsg
    }
}

module.exports = apiRequest;