class View {
    static displayError(msg, err) {
        console.log(`${msg}, ${err}`)
    }

    static displaySuccess(msg) {
        console.log(msg)
    }
}

module.exports = View