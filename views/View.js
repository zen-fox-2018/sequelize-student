class View {

    static display(data) {
        console.log(data);
        process.exit()
    }

    static disErr(err) {
        console.log('ERROR');
        console.log(err);
        process.exit()
    }

}

module.exports = View